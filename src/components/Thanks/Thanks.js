import React from "react";
// import star from "../../images/icon-star.svg";
import logo from "../../images/illustration-thank-you.svg";

import {
  ContentContainer,
  MainWrapper,
  Texth,
  Textp,
  Image,
  ImageWrapper,
  SelectedRatingContainer,
} from "../MainElements";
export default function Rating({ selected }) {
  return (
    <MainWrapper>
      <ImageWrapper>
        <Image src={logo}></Image>
      </ImageWrapper>
      <SelectedRatingContainer>
        <Texth
          fontsize={"18px"}
          fontweight={"400"}
          color={"rgba(252, 118, 20, 1)"}
        >
          You selected {selected} out of 5
        </Texth>
      </SelectedRatingContainer>
      <ContentContainer justifycontent={"center"}>
        <Texth>Thank You!</Texth>
      </ContentContainer>
      <ContentContainer justifycontent="center">
        <Textp textalign="center">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Textp>
      </ContentContainer>
    </MainWrapper>
  );
}
