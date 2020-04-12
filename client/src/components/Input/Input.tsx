import React, { Component, ChangeEvent } from "react";

interface IProps {
  value: string;
  className?: string;
  id: string;
  isRequired?: boolean;
  label?: string;
  onChange: (value: string, id: string) => void;
}

class Input extends Component<IProps> {
  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value, this.props.id);
  };

  public render() {
    const { className, id, value, label } = this.props;
    return (
      <label
        className={`input${className ? ` ${className}` : ""}`}
        htmlFor={id}
      >
        <input
          type="text"
          value={value}
          required={this.props.isRequired}
          onChange={this.handleChange}
        />
        {label ? <span>{label}</span> : null}
      </label>
    );
  }
}

export default Input;
