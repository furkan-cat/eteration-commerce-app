import PropTypes from "prop-types";

export default function Radio({ title, name, value, onChange }) {
  return (
    <label className="flex space-x-2 text-sm py-0.5 cursor-pointer">
      <input type="radio" name={name} value={value} onChange={onChange} />
      {title && <span>{title}</span>}
    </label>
  );
}

Radio.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
