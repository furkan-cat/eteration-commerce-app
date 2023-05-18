import PropTypes from "prop-types";
import Button from "../Button/Button";
import cn from "classnames";

export default function ProductDetailCard({ product, className }) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row gap-2 p-2.5 bg-white rounded-md",
        className
      )}
    >
      <img src={product.image} alt={product.name} className="w-full sm:w-1/2" />

      <div className="w-full sm:w-1/2 flex flex-col gap-2">
        <div className="text-blue-600 truncate">{product.name}</div>
        <div className="text-sm">
          {product.brand} {product.model}
        </div>
        <Button title="Add to Cart" className="w-full" />
        <p>{product.description}</p>
      </div>
    </div>
  );
}

ProductDetailCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    model: PropTypes.string,
    brand: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string,
  }),
};
