import PropTypes from "prop-types";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onClick, to }) {
  return (
    <Link
      to={to}
      className="flex flex-col justify-between gap-2 p-2.5 bg-white rounded-md border border-black/5"
      // onClick={navigateToDetail}
    >
      <img src={product.image} alt={product.name} className="h-34" />

      <div className="text-blue-600 truncate">{product.name}</div>

      <div className="text-sm">
        {product.brand} {product.model}
      </div>

      <Button title="Add to Cart" className="w-full" onClick={onClick} />
    </Link>
  );
}

ProductCard.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    model: PropTypes.string,
    brand: PropTypes.string,
    id: PropTypes.string,
  }),
};
