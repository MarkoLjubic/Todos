import React, { Component, ChangeEvent } from "react";

interface IProps {
  value: boolean;
  className?: string;
  id: string;
  label?: string;
  onChange: (value: boolean, id: string) => void;
}

class Checkbox extends Component<IProps> {
  private handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.props.onChange(!this.props.value, this.props.id);
  };

  public render() {
    const { className, id, value, label } = this.props;
    return (
      <label
        className={`checkbox${className ? ` ${className}` : ""}`}
        htmlFor={id}
      >
        <input
          id={id}
          type="checkbox"
          checked={value}
          onChange={this.handleChange}
        />
        {label && <span>{label}</span>}
      </label>
    );
  }
}

export default Checkbox;
