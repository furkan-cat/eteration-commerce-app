import PropTypes from "prop-types";

export default function CheckBox({ title, name, value, onChange }) {
  return (
    <label className="flex space-x-2 text-sm py-0.5 cursor-pointer">
      <input type="checkbox" name={name} value={value} onChange={onChange} />
      {title && <span>{title}</span>}
    </label>
  );
}

CheckBox.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
