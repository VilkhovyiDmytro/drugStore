import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Suspense } from "react";
import Loader from "./Loader";
import ShopNav from "./ShopNav";

function Layout() {
  return (
    <main className="grid h-[100dvh] grid-rows-12 grid-cols-12">
      <Header />
      <ShopNav />
      <div className="col-span-10 row-span-10">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}

export default Layout;
