import React, { useEffect, useState } from "react";
import { EyeIcon, EyeClosedIcon } from "@primer/octicons-react";
import clsx from "clsx";

import "./Input.scss";

const Input = ({
  icon,
  textarea,
  id,
  inputClassName,
  className,
  labelClassName,
  type,
  label,
  placeholder,
  minLabel,
  ...rest
}) => {
  const [showPwd, setShowPwd] = useState(false);
  const [typeState, setTypeState] = useState();

  useEffect(() => {
    setTypeState(type);
  }, [type]);

  useEffect(() => {
    if (type === "password") {
      if (showPwd) {
        setTypeState("text");
      } else {
        setTypeState("password");
      }
    } else {
      setTypeState("text");
    }
  }, [type, setTypeState, showPwd]);

  useEffect(() => {
    setTypeState(type);
  }, [type]);

  return (
    <div className={clsx("custom-form-control", className)}>
      {label && (
        <label className={clsx(labelClassName)} htmlFor={id}>
          {label} {minLabel && <div className="min-label">{minLabel}</div>}
        </label>
      )}
      <div className="input">
        {type === "password" && (
          <div
            className="pwd-icon"
            onClick={() => setShowPwd((prevState) => !prevState)}
          >
            {showPwd ? (
              <EyeClosedIcon className="" size={16} />
            ) : (
              <EyeIcon className="" size={16} />
            )}
          </div>
        )}
        {icon && <img className="icon" src={icon.src} alt={icon.alt} />}
        {textarea ? (
          <textarea
            className={clsx(inputClassName)}
            {...rest}
            placeholder={placeholder}
          ></textarea>
        ) : (
          <input
            className={clsx(inputClassName)}
            id={id}
            type={typeState}
            placeholder={placeholder}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
