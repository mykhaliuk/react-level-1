import React, { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import { Checkbox } from "../checkbox";
import "./style.css";

const defaultProps = {
  onChange: () => void 0,
};

const CheckboxList = ({ list, onChange }) => {
  const defaultState = list
    ? list.reduce((acc, item) => ({ ...acc, [item.label]: true }), {})
    : void 0;

  const [checked, setChecked] = useState(defaultState);
  const [checkedAll, setCheckedAll] = useState(true);

  useEffect(() => {
    //  if all checked
    let isAllChecked = true;
    for (let key in checked) {
      if (checked[key]) continue;
      isAllChecked = false;
      break;
    }

    if (checkedAll !== isAllChecked) {
      setCheckedAll(() => isAllChecked);
    }

    // fire up cb
    onChange({ ...checked });
  }, [checked, checkedAll]);

  if (!list || list.length <= 0) return null;

  const toggleAll = () => {
    const newState = {};
    for (let key in checked) {
      newState[key] = !checkedAll;
    }
    setChecked(() => newState);
  };

  const renderCheckboxes = () =>
    list.map(({ label }, key) => {
      const isSelected = !!checked[label];
      const onChange = ({ target: { name } }) => {
        setChecked(() => ({
          ...checked,
          [name]: !checked[name],
        }));
      };
      return <Checkbox {...{ onChange, isSelected, label, key }} />;
    });

  return (
    <div className="checkbox-list">
      <Checkbox
        isSelected={checkedAll}
        label="Select All"
        onChange={toggleAll}
        className="select-all"
      >
        {`${checkedAll ? "Deselect" : "Select"} all`}
      </Checkbox>
      {renderCheckboxes()}
    </div>
  );
};

CheckboxList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: Checkbox.propTypes.label,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

CheckboxList.defaultProps = defaultProps;

export { CheckboxList };
