import { Card, CardBody, LineItem } from "../../components";
import Button from "../../components/Button/Button";

export default function Cart() {
  return (
    <div className="grid gap-3">
      <Card>
        <CardBody>
          <LineItem />
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <div>
            Total Price: <strong>117.000TL</strong>
          </div>
          <Button title="Checkout" className="w-full" />
        </CardBody>
      </Card>
    </div>
  );
}
