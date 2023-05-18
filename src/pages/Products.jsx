import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decreasePage,
  fetchProductsAsync,
  increasePage,
} from "../libs/store/slices/productsSlice";

import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/Pagination/Pagination";
import { addToCart } from "../libs/store/slices/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { data, loading, meta, originalData } = useSelector((state) => state.products);
  const selectedFilters = useSelector((state) => state.filters.selectedFilters);

  useEffect(() => {
    dispatch(fetchProductsAsync(selectedFilters));
  }, [selectedFilters, meta.page]);

  const handleNext = () => {
    dispatch(increasePage());
  };
  const handlePrev = () => {
    dispatch(decreasePage());
  };

  const addToCartHandler = (e, products) => {
    e.preventDefault();
    dispatch(addToCart(products));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((products) => (
          <ProductCard
            to={`/products/${products.id}`}
            key={products.id}
            product={{
              id: products.id,
              name: products.name,
              price: products.price,
              brand: products.brand,
              model: products.model,
              image: products.image,
            }}
            onClick={(e) => addToCartHandler(e, products)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Pagination
          onNext={handleNext}
          onPrev={handlePrev}
          activePage={meta.page}
          totalPage={Math.floor(originalData.length / 12)}
        />
      </div>
    </>
  );
}
