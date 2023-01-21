import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = ({
  className,
  to,
  small,
  children,
  icon,
  textClassName,
  bordered,
  whiteBlue,
  green,
  orange,
  ...rest
}) => {
  const classes = clsx(
    "c-btn",
    className,
    small && "btn-small",
    bordered && "btn-bordered",
    orange && "btn-orange",
    green && "btn-green",
    whiteBlue && "btn-orange-blue"
  );

  let btnChilren = (
    <>
      {icon && (
        <div className={clsx("btn-icon", icon.rootClassName)}>
          <img
            className={clsx("d-block", icon.className)}
            src={icon.src}
            title={icon.title}
            alt={icon.alt}
          />
        </div>
      )}
      <div className={clsx("btn-text", textClassName)}>{children}</div>
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {btnChilren}
      </Link>
    );
  } else {
    return (
      <button className={classes} {...rest}>
        {btnChilren}
      </button>
    );
  }
};

export default Button;
