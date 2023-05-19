import cn from "classnames";
import PropTypes from "prop-types";

export default function QuantityPill({ value, onChange, className }) {
  const handleInc = () => {
    onChange?.({ type: "increase", value: value + 1 });
  };

  const handleDec = () => {
    if (value == 0) return;
    onChange?.({ type: "decrease", value: value - 1 });
  };

  return (
    <div
      className={cn(
        "flex border borde-gray-200 rounded-md p-0.5 gap-0.5 h-9",
        className
      )}
    >
      <button
        type="button"
        onClick={handleDec}
        className={cn(
          "flex items-center justify-center w-8 h-full bg-slate-200 text-slate-500 rounded-md",
          "hover:bg-slate-300 hover:text-slate-600"
        )}
      >
        -
      </button>
      <div className="flex-1 h-full flex items-center justify-center">
        {value}
      </div>
      <button
        type="button"
        onClick={handleInc}
        className={cn(
          "flex items-center justify-center w-8 h-full bg-slate-200 text-slate-500 rounded-md",
          "hover:bg-slate-300 hover:text-slate-600"
        )}
      >
        +
      </button>
    </div>
  );
}

QuantityPill.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
