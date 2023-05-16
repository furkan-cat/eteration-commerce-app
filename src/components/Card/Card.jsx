import PropTypes from "prop-types";

export default function Card({ children }) {
  return (
    <div className="bg-white drop-shadow-sm rounded-md border border-slate-200">
      {children}
    </div>
  );
}

Card.PropTypes = {
  children: PropTypes.element,
};
