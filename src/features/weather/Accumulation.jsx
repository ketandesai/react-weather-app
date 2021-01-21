import React from "react";

export const Accumulation = ({ amount }) => {
  let inchesAmount = Number.parseFloat(amount / 25.4).toFixed(1);
  return <> {inchesAmount} in</>;
};
