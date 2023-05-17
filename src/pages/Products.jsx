import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductsAsync } from "../libs/store/slices/productsSlice";

import ProductCard from "../components/ProductCard/ProductCard";

export default function Products() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);
  const selectedFilters = useSelector((state) => state.filters.selectedFilters);

  useEffect(() => {
    dispatch(fetchProductsAsync(selectedFilters));
  }, [selectedFilters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-4">
      {data.map((products) => (
        <ProductCard
          key={products.id}
          product={{
            id: products.id,
            name: products.name,
            price: products.price,
            brand: products.brand,
            model: products.model,
            image: products.image,
          }}
        />
      ))}
    </div>
  );
}
