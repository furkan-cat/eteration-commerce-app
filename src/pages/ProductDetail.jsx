import { useParams } from "react-router-dom";
import { Card, CardBody, ProductDetailCard } from "../components";

import { useGetProductDetailsQuery } from "../libs/store/api/productDetailsApi";
import Cart from "../sections/Cart/Cart";
import { useDispatch } from "react-redux";
import { addToCart } from "../libs/store/slices/cartSlice";

export default function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductDetailsQuery(params.id);

  const addToCartHandler = () => {
    dispatch(addToCart(data));
  };

  return (
    <div className="container mt-8">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-8">
          <Card>
            <CardBody>
              {!isLoading && (
                <ProductDetailCard product={data} onClick={addToCartHandler} />
              )}
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-4">
          <Cart />
        </div>
      </div>
    </div>
  );
}
