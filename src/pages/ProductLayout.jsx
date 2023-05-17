import React from "react";
import { Outlet } from "react-router-dom";
import Filter from "../sections/Filter/Filter";
import Cart from "../sections/Cart/Cart";

export default function ProductLayout() {
  return (
    <main className="container mt-8">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-2">
          <Filter />
        </div>
        <div className="col-span-7">
          <Outlet />
        </div>
        <div className="col-span-3">
          <Cart />
        </div>
      </div>
    </main>
  );
}
