import React from "react";
import { Outlet } from "react-router-dom";

import Filter from "../sections/Filter/Filter";
import Cart from "../sections/Cart/Cart";

export default function ProductLayout() {
  return (
    <main>
      <div className="container mt-8">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 sm:col-span-3 md:col-span-3 lg:col-span-2 order-2 sm:order-1">
            <Filter />
          </div>
          <div className="col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-8 order-3 sm:order-2">
            <Outlet />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2 order-1 sm:order-3">
            <Cart />
          </div>
        </div>
      </div>
    </main>
  );
}
