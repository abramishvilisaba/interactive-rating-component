import React, { useState } from "react";
// import star from "../../images/icon-star.svg";
import { BodyWrapper } from "./MainElements";
import Thanks from "./Thanks/Thanks";
import Rating from "./Rating/Rating";

export default function Main() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState();

  console.log(submitted);
  console.log(selected);

  return (
    <BodyWrapper>
      {submitted ? (
        <Thanks selected={selected} />
      ) : (
        <Rating isSubmitted={setSubmitted} getSelected={setSelected} />
      )}
    </BodyWrapper>
  );
}
