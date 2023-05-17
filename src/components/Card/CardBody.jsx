import cn from "classnames";
import PropTypes from "prop-types";

export default function CardBody({ className, children }) {
  return <div className={cn("p-2", className)}>{children}</div>;
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
