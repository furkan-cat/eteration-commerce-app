import PropTypes from "prop-types";
import QuantityPill from "../QuantityPill/QuantityPill";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../libs/store/slices/cartSlice";

export default function LineItem({ product }) {
  const dispatch = useDispatch();

  const handleChange = ({ type }) => {
    if (type === "increase") {
      dispatch(increaseQuantity(product.id));
    } else {
      dispatch(decreaseQuantity(product.id));
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <div className="text-sm">
          {product.brand} {product.model}
        </div>
        <div className="text-sm text-blue-400">{product.price}</div>
      </div>
      <QuantityPill value={product.quantity} onChange={handleChange} />
    </div>
  );
}

LineItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};
