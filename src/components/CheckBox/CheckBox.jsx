import PropTypes from "prop-types";

export default function CheckBox({ title, name, value, onChange }) {
  return (
    <div className="flex space-x-2 text-sm">
      <input type="checkbox" name={name} value={value} onChange={onChange} />
      {title && <div>{title}</div>}
    </div>
  );
}

CheckBox.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
