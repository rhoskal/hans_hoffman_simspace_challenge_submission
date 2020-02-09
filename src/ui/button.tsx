import React from "react";
import styled from "styled-components";

type Props = {
  isActive?: boolean;
  onClick?: () => void;
  text?: string;
};

const StyledButton = styled.button<{ isActive: Boolean }>`
  background-color: ${props => (props.isActive ? null : "#d4d4d4")};
  background-image: ${props =>
    props.isActive ? "linear-gradient(to right, #348AC7 51%, #7474BF 100%)" : null};
  color: ${props => (props.isActive ? "white" : "black")};
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
`;

export function Button({ isActive = false, onClick, text = "Click Me" }: Props) {
  return (
    <StyledButton disabled={isActive} isActive={isActive} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
