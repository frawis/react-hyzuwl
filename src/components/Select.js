import React from "react";

const Select = props => {
  const { id, options, value, display, selected, disable, onSelect } = props;

  const selections = options.reduce((acc, option) => {
    if (option[value] !== disable) {
      acc.push(
        <option key={option.id + id} value={option[value]}>
          {option[display]}
        </option>
      );
    }
    return acc;
  }, []);

  return (
    <select id={id} onChange={onSelect} value={selected}>
      {selections}
    </select>
  );
};

export default Select;
