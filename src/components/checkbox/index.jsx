import React from "react";
import * as PropTypes from "prop-types";
import "./style.css";

const defaultProps = {
  className: "",
};

const Checkbox = (props) => {
  const { label, isSelected, onChange, className } = props;

  return (
    <div className={"checkbox-list__item ".concat(className)}>
      <label>
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={onChange}
          className="checkbox-list__item__input"
          aria-label={`${label} checkbox`}
        />
        <span>{props.children || label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Checkbox.defaultProps = defaultProps;

export { Checkbox };
