import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, LineItem } from "../../components";
import Button from "../../components/Button/Button";
import {
  resetCart,
  totalPriceSelector,
} from "../../libs/store/slices/cartSlice";
import { useTimeout } from "../../libs/hooks";

export default function Cart() {
  const lineItems = useSelector((state) => state.cart.data);
  const totalPrice = useSelector(totalPriceSelector);
  const [isPending, setTimeout] = useTimeout();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    setTimeout(3000, () => dispatch(resetCart()));
  };

  // console.log(lineItems);

  return (
    <div className="grid gap-3">
      <Card>
        <CardBody>
          {lineItems.length > 0 ? (
            lineItems.map((product) => {
              return (
                <div key={product.id}>
                  {product.quantity > 0 && <LineItem product={product} />}
                </div>
              );
            })
          ) : (
            <div className="text-sm">Cart is Empty!</div>
          )}
        </CardBody>
      </Card>

      <Card>
        <CardBody className="grid gap-3">
          <div>
            Total Price: <strong>{totalPrice}₺</strong>
          </div>
          <Button
            title="Checkout"
            className="w-full"
            onClick={handleCheckout}
            isLoading={isPending}
          />
        </CardBody>
      </Card>
    </div>
  );
}
