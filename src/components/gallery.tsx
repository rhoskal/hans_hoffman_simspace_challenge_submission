import React from "react";
import styled from "styled-components";
import axios from "axios";

import { Error, Loading } from "../ui";
import { ApiResponse } from "../types";

type Props = {
  breed?: string;
};

const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 15px;
  margin-top: 50px;
`;

const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
`;

export function Gallery({ breed = "" }: Props) {
  const [didError, setDidError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [images, setImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function fetchBreedImages() {
      setIsLoading(true);

      axios
        .get(`/breed/${breed}/images`)
        .then(({ data }: ApiResponse) => {
          setImages(data.message);
          didError && setDidError(false);
        })
        .catch(() => {
          setDidError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (breed !== "") {
      fetchBreedImages();
    }
  }, [breed]);

  if (isLoading) return <Loading />;
  if (didError) return <Error />;

  return (
    <MasonryGrid>
      {images.map(img => (
        <Image key={img} src={img} />
      ))}
    </MasonryGrid>
  );
}
