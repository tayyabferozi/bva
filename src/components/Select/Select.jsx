import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import { SelectContext } from "./selectContext";
import "./Select.scss";

const Select = ({ children, defaultValue, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || "Choose an option";
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (defaultValue) setSelectedOption(defaultValue);
  }, [defaultValue]);

  console.log(selectedOption);

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div className="custom-form-control">
        <div className="custom-select-container" ref={selectContainerRef}>
          <div
            className={showDropdown ? "selected-text active" : "selected-text"}
            onClick={showDropdownHandler}
          >
            {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
            <ChevronDownIcon size={20} />
          </div>
          <ul
            className={
              showDropdown
                ? "select-options show-dropdown-options"
                : "select-options hide-dropdown-options"
            }
          >
            {children}
          </ul>
        </div>
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
