import { NavLink, useLoaderData } from "react-router-dom";

function ShopNav() {
  const { data } = useLoaderData();
  if (!data.shops) return <h1>Loading</h1>;
  return (
    <nav className="col-span-2 row-span-10 flex flex-col items-center justify-start pt-12 border-r-2 w-full h-full">
      <span className="mb-12 font-bold border-b-4">Shops:</span>
      {data.shops.map((el) => (
        <NavLink to={el._id} key={el._id} className="navlink">
          {el.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default ShopNav;
