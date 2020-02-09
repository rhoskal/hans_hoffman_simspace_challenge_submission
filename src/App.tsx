import React from "react";
import styled from "styled-components";

import { BreedList, Gallery } from "./components";
import { Input } from "./ui";

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export default function App() {
  const [selected_breed, setSelectedBreed] = React.useState<string>("");
  const [searched_breed, setSearchedBreed] = React.useState<string>("");

  function handleBreedSelect(breed: string) {
    setSelectedBreed(breed);
  }

  // eslint-disable-next-line no-undef
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchedBreed(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("fix me");
  }

  return (
    <section>
      <StyledRow>
        <h1>Dogs!</h1>
        <form onSubmit={handleSubmit}>
          <Input name="breed" onChange={handleChange} value={searched_breed} />
        </form>
      </StyledRow>
      <BreedList
        onSelect={handleBreedSelect}
        searched_breed={searched_breed}
        selected_breed={selected_breed}
      />
      <Gallery breed={selected_breed} />
    </section>
  );
}
