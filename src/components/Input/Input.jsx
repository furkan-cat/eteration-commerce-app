import PropTypes from "prop-types";
import cn from "classnames";

export default function Input({ name, value, onChange, prefix, placeholder }) {
  return (
    <div
      className={cn(
        "relative rounded-md bg-slate-100 text-black border border-slate-200 ring-offset-1 transition-all",
        "focus-within:ring-2"
      )}
    >
      {prefix && (
        <div className="absolute top-0 left-0 flex justify-center items-center w-8 h-full pointer-events-none">
          {prefix}
        </div>
      )}
      <input
        type="search"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          prefix && "pl-8",
          "w-full h-9 bg-transparent outline-none"
        )}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  prefix: PropTypes.element,
};
