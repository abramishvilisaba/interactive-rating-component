import styled from "styled-components";
import star from "../images/icon-star.svg";
import logo from "../images/illustration-thank-you.svg";

export const BodyWrapper = styled.div`
  display: flex;
  background-color: rgba(19, 21, 24, 1);
  width: 100%;
  height: 1000px;
  justify-content: center;
  align-items: center;
  @import url("https://fonts.googleapis.com/css2?family=Overpass&display=swap");
`;
export const MainWrapper = styled.div`
  display: flex;
  height: 420px;
  width: 420px;
  background-image: linear-gradient(
    to bottom,
    rgba(35, 42, 52, 1),
    rgba(24, 30, 39, 1)
  );
  padding: 35px;
  flex-direction: column;
  border-radius: 40px;
  box-sizing: border-box;
  justify-content: space-between;
  @media (max-width: 500px) {
    border-radius: 20px;
    padding: 20px;
    width: 330px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  height: ${(props) => (props.height ? props.height : "fit-content")};
  width: 100%;
  justify-content: ${(props) =>
    props.justifycontent ? props.justifycontent : "space-between"};
`;

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  display: flex;
  background-color: rgba(38, 46, 56, 1);
`;

export const Button1 = styled(Button)`
  background-size: 17px;
  background-image: url(${star});
  background-repeat: no-repeat;
  background-position: center;
  width: 48px;
  height: 48px;
  background-color: rgba(38, 46, 56, 1);
`;
export const Button2 = styled(Button)`
  background-size: 17px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  background-color: rgba(38, 46, 56, 1);
  cursor: pointer;
  background-color: ${(props) =>
    props.activated ? "rgba(151, 151, 151, 1)" : null};
  color: ${(props) => (props.activated ? "white" : "rgba(124, 135, 152, 1)")};
  @media (max-width: 500px) {
    width: 45px;
    height: 45px;
  }
  &:hover {
    background-color: rgba(252, 118, 20, 1);
    color: white;
  }

  /* margin-top: 20px; */
`;

export const Button3 = styled(Button)`
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  border-radius: 50px;
  width: 100%;
  height: 50px;
  background-color: rgba(252, 118, 20, 1);
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: rgba(252, 118, 20, 1);
  }
`;

export const Text = styled.h1`
  font-family: "Overpass", sans-serif;
  margin: 0;
  color: white;
`;

export const Texth = styled.h1`
  font-family: "Overpass", sans-serif;
  margin: 10px 0;
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: ${(props) => (props.fontweight ? props.fontweight : "600")};
  font-size: ${(props) => (props.fontsize ? props.fontsize : "28px")};
`;

export const Textp = styled.p`
  font-family: "Overpass", sans-serif;
  /* font-weight: 400;
  font-size: 15px;
  color: rgba(150, 159, 173, 1); */
  line-height: 20pt;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "rgba(150, 159, 173, 1)")};
  font-weight: ${(props) => (props.fontweight ? props.fontweight : "400")};
  font-size: ${(props) => (props.fontsize ? props.fontsize : "15px")};
  text-align: ${(props) => (props.textalign ? props.textalign : null)};

  /* margin: 40px 0; */
  /* background-color: #262e38; */
`;

export const ImageWrapper = styled(ContentContainer)`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  /* background-image: url(${logo}); */
  /* src: logo; */
  width: 162px;
  height: 108px;
  /* background-size: 100px;
  background-repeat: no-repeat;
  background-position: center; */
  /* margin: 40px 0; */
  /* background-color: #262e38; */
`;

export const SelectedRatingContainer = styled(ContentContainer)`
  align-self: center;
  background-color: rgba(38, 46, 56, 1);
  width: 70%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;
