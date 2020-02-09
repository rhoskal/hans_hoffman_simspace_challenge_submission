import React from "react";
import axios from "axios";
import styled from "styled-components";

import { Button, Error, Loading } from "../ui";
import { ApiResponse } from "../types";

type Props = {
  onSelect?: (breed: string) => void;
  searched_breed?: string;
  selected_breed?: string;
};

const BreedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 15px;
`;

const LIMIT = 12;

export function BreedList({ onSelect, searched_breed = "", selected_breed = "" }: Props) {
  const [didError, setDidError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [breeds, setBreeds] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function fetchBreeds() {
      setIsLoading(true);

      axios
        .get("/breeds/list/all")
        .then(({ data }: ApiResponse) => {
          setBreeds(Object.keys(data.message).sort());
        })
        .catch(() => {
          setDidError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    fetchBreeds();
  }, []);

  function renderBreeds() {
    const filtered = breeds
      .filter((breed: string) => breed.includes(searched_breed))
      .slice(0, LIMIT);

    if (filtered.length === 0) return <Error message="No breeds matches found." />;

    return (
      <BreedGrid>
        {filtered.map(breed => {
          return (
            <Button
              key={breed}
              isActive={breed === selected_breed}
              onClick={() => {
                onSelect && onSelect(breed);
              }}
              text={breed}
            />
          );
        })}
      </BreedGrid>
    );
  }

  if (isLoading) return <Loading />;
  if (didError) return <Error />;

  return renderBreeds();
}
