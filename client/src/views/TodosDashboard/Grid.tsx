import React from "react";
import { Grid as MaterialUiGrid } from "@material-ui/core";

interface IGridProps {
  leftComponent: React.ReactNode;
  rightTopComponent: React.ReactNode;
  rightBottomComponent: React.ReactNode;
}

const Grid: React.FunctionComponent<IGridProps> = ({
  leftComponent,
  rightTopComponent,
  rightBottomComponent
}) => {
  return (
    <MaterialUiGrid container={true} direction="row">
      <MaterialUiGrid item={true} xs={6}>
        {leftComponent}
      </MaterialUiGrid>
      <MaterialUiGrid item={true} xs={6} container={true} direction="column">
        <MaterialUiGrid>{rightTopComponent}</MaterialUiGrid>
        <MaterialUiGrid>{rightBottomComponent}</MaterialUiGrid>
      </MaterialUiGrid>
    </MaterialUiGrid>
  );
};

export default Grid;
