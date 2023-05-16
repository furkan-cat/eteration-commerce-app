import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Products() {
  return (
    <div className="grid grid-cols-4">
      <ProductCard
        product={{
          name: "xxx",
          price: "12 Manat",
          id: "1",
          brand: "Hiyar",
          model: "Baku",
          image:
            "https://images.unsplash.com/photo-1531170960116-aa500027308c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        }}
      />
    </div>
  );
}
