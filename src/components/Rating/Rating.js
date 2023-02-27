import React, { useState } from "react";
import {
  Button1,
  Button2,
  ContentContainer,
  MainWrapper,
  Texth,
  Textp,
  Button3,
} from "../MainElements";
const buttonValues = [
  { id: 1, type: "button", value: "1" },
  { id: 2, type: "button", value: "2" },
  { id: 3, type: "button", value: "3" },
  { id: 4, type: "button", value: "4" },
  { id: 5, type: "button", value: "5" },
];

export default function Thanks({ isSubmitted, getSelected }) {
  let [active, setactive] = useState(0);

  const ButtonsMap = buttonValues.map((item) => {
    return (
      <Button2
        key={item.id}
        onClick={() => (active = setactive(item.value))}
        activated={active === item.value ? true : false}
      >
        {item.value}
      </Button2>
    );
  });

  return (
    <MainWrapper>
      <ContentContainer>
        <Button1
          value={"ee"}
          placeholder={"sss"}
          defaultValue="sssss"
        ></Button1>
      </ContentContainer>
      <ContentContainer>
        <Texth> How did we do?</Texth>
      </ContentContainer>
      <ContentContainer>
        <Textp fontsize={"15px"} color="rgba(150, 159, 173, 1)">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Textp>
      </ContentContainer>
      <ContentContainer>{ButtonsMap}</ContentContainer>
      <ContentContainer>
        <Button3
          type="submit"
          onClick={
            active
              ? () => {
                  isSubmitted(true);
                  getSelected(active);
                }
              : null
          }
        >
          SUBMIT
        </Button3>
      </ContentContainer>
    </MainWrapper>
  );
}
