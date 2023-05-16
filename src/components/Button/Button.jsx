import PropTypes from "prop-types";
import cn from "classnames";

export default function Button({ title, children, type, onClick, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "h-9 px-3 inline-flex justify-center items-center bg-blue-200 border border-blue-300 rounded-md text-blue-600 cursor-pointer",
        "hover:opacity-80",
        className
      )}
    >
      {title || children}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
  className: PropTypes.string,
};
