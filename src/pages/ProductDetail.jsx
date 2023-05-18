import { useParams } from "react-router-dom";
import { Card, CardBody, ProductDetailCard } from "../components";

import { useGetProductDetailsQuery } from "../libs/store/api/productDetailsApi";
import Cart from "../sections/Cart/Cart";

export default function ProductDetail() {
  const params = useParams();
  const { data, isLoading } = useGetProductDetailsQuery(params.id);

  return (
    <div className="container mt-8">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-8">
          <Card>
            <CardBody>
              {!isLoading && <ProductDetailCard product={data} />}
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
