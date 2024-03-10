import { useLoaderData, useParams } from "react-router-dom";
import Item from "../components/Item";
import { updateLS } from "../helpers/updateLS";

function ShopPage() {
  const { data } = useLoaderData();
  const { id } = useParams();
  function onAddToCArt(medecine) {
    updateLS(medecine, id);
  }
  return (
    <>
      <div className="w-full h-full   gap-6 p-6 flex flex-wrap justify-around overflow-auto">
        {data.medecines.medecines.map((el) => (
          <Item medecine={el} key={el._id} onAddToCart={onAddToCArt} />
        ))}
      </div>
    </>
  );
}

export default ShopPage;
