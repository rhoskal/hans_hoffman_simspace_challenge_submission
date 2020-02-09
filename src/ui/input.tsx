import React from "react";
import styled from "styled-components";

type Props = {
  name: string;
  // eslint-disable-next-line no-undef
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string;
};

const StyledInput = styled.input`
  min-width: 300px;
  border-width: 1px;
  padding: 5px;
`;

export function Input({ name, onChange, placeholder = "Search", type = "text", value }: Props) {
  return (
    <>
      <label htmlFor={name} style={{ display: "none" }}>
        Breed
      </label>
      <StyledInput
        autoComplete="off"
        id={name}
        onChange={e => {
          onChange && onChange(e);
        }}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </>
  );
}
