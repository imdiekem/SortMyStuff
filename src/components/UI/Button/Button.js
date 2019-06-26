import React from "react";

import { StyledButton } from "../styled-components";

const button = props => {
  const { clickHandler } = props;
  return (
    <StyledButton onClick={() => clickHandler()}>{props.children}</StyledButton>
  );
};

export default button;
