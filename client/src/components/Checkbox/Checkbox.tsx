import React, { Component, ChangeEvent } from "react";
import { Checkbox as MatrialUiCheckbox } from "@material-ui/core";

interface IProps {
  value: boolean;
  id: string;
  onChange: (value: boolean, id: string) => void;
  color?: "primary" | "secondary" | "default";
}

class Checkbox extends Component<IProps> {
  private handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.props.onChange(!this.props.value, this.props.id);
  };

  public render() {
    const { id, value, color } = this.props;
    return (
      <MatrialUiCheckbox
        checked={value}
        id={id}
        onChange={this.handleChange}
        color={color || "primary"}
      />
    );
  }
}

export default Checkbox;
