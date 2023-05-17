import { Card, CardBody, LineItem } from "../../components";
import Button from "../../components/Button/Button";

export default function Cart() {
  return (
    <div className="grid gap-3">
      <Card>
        <CardBody>
          <LineItem brand="Test" price="200" model="dssdsd" />
        </CardBody>
      </Card>

      <Card>
        <CardBody className="grid gap-3">
          <div>
            Total Price: <strong>117.000TL</strong>
          </div>
          <Button title="Checkout" className="w-full" />
        </CardBody>
      </Card>
    </div>
  );
}
