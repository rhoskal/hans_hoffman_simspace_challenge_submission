import React from "react";

type Props = {
  message?: string;
};

export function Error({ message = "Ah ah ah, you didn't say the magic word." }: Props) {
  return <p>{message}</p>;
}
