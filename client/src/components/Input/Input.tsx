import React, { Component, ChangeEvent } from "react";
import { Input as MaterialUiInput } from "@material-ui/core";

interface IProps {
  value: string;
  id: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  hasError?: boolean;
  label?: string;
  onChange: (value: string, id: string) => void;
  color?: "primary" | "secondary";
  placeholder?: string;
}

class Input extends Component<IProps> {
  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value, this.props.id);
  };

  public render() {
    const {
      placeholder,
      color,
      id,
      value,
      hasError,
      isDisabled,
      isRequired
    } = this.props;
    return (
      <MaterialUiInput
        type="text"
        id={id}
        value={value}
        required={isRequired}
        disabled={isDisabled}
        error={hasError}
        onChange={this.handleChange}
        color={color}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
