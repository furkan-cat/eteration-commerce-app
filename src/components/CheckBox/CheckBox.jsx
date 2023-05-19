import PropTypes from "prop-types";

export default function CheckBox({
  name,
  title,
  value,
  onChange,
  defaultChecked,
}) {
  return (
    <label className="flex space-x-2 text-sm py-0.5 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      {title && <span>{title}</span>}
    </label>
  );
}

CheckBox.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool
};
