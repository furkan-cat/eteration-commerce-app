import PropTypes from "prop-types";
import QuantityPill from "../QuantityPill/QuantityPill";

export default function LineItem({ brand, model, price }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <div className="text-sm">
          {brand} {model}
        </div>
        <div className="text-sm text-blue-400">{price}</div>
      </div>
      <QuantityPill value={3} onChange={console.log} />
    </div>
  );
}

LineItem.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
