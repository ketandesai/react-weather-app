import React from "react";

export const Temperature = ({ degrees, units, showUnits }) => {
  const symbol = "\u00B0";
  const unit = units === "imperial" ? "F" : "C";

  return (
    <>
      {Math.round(degrees)} {symbol} {showUnits ? unit : ""}
    </>
  );
};
