import React, { Component } from "react";
import PropTypes from "prop-types";

interface IButtonProps {
  action?: (...args: any[]) => void;
  actionProps?: any[];
  className?: string;
  isDisabled?: boolean;
  title?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FunctionComponent<IButtonProps> = ({
  action,
  actionProps,
  className,
  isDisabled = false,
  title,
  type = "button",
  children
}) => {
  const handleClick = () => {
    if (action) {
      if (actionProps) {
        action(...actionProps);
      } else {
        action();
      }
    }
  };

  return (
    <button
      className={`button${className ? ` ${className}` : ""}`}
      disabled={isDisabled}
      onClick={handleClick}
      title={title}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
