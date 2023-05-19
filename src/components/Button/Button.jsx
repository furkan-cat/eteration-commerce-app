import PropTypes from "prop-types";
import cn from "classnames";
import Spinner from "../Spinner/Spinner";

export default function Button({
  type,
  title,
  onClick,
  children,
  disabled,
  className,
  isLoading = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-9 px-3 inline-flex whitespace-nowrap justify-center items-center bg-blue-500 border border-blue-300 rounded-md text-white text-sm cursor-pointer",
        "hover:opacity-80",
        className
      )}
    >
      {isLoading ? <Spinner /> : null}
      {title || children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
