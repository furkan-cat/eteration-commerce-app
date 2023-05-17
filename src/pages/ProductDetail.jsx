import { Card, CardBody, ProductDetailCard } from "../components";
import Cart from "../sections/Cart/Cart";

export default function ProductDetail() {
  return (
    <div className="container mt-8">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-8">
          <Card>
            <CardBody>
              <ProductDetailCard
                product={{
                  name: "test",
                  price: "121./1212",
                  brand: "xxxxx",
                  model: "ssss",
                  description: "lorem20asdadasdasdadadada",
                  image:
                    "https://images.unsplash.com/photo-1682687982468-4584ff11f88a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                }}
              />
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
