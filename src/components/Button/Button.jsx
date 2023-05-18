import PropTypes from "prop-types";
import cn from "classnames";
import Spinner from "../Spinner/Spinner";

export default function Button({
  title,
  children,
  type,
  onClick,
  className,
  disabled,
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
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};
