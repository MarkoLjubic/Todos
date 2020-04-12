import React from "react";
import { Button as MaterialUiButton } from "@material-ui/core";

interface IButtonProps {
  action?: (...args: any[]) => void;
  actionProps?: any[];
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "default";
}

const Button: React.FunctionComponent<IButtonProps> = ({
  action,
  actionProps,
  color,
  isDisabled = false,
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
    <MaterialUiButton
      color={color}
      disabled={isDisabled}
      onClick={handleClick}
      variant="contained"
      type={type}
    >
      {children}
    </MaterialUiButton>
  );
};

export default Button;
