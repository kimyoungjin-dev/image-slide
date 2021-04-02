import React, { useState } from "react";
import styled from "styled-components";
import { SliderData } from "./SliderData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Box = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  width: 1000px;
  height: 600px;
  border-radius: 10px;
`;

const LeftArrow = styled(FaArrowLeft)`
  position: absolute;
  width: 50px;
  height: 50px;
  color: black;
  border-radius: 50%;
  left: 32px;
  cursor: pointer;
  user-select: none;
`;

const RightArrow = styled(FaArrowRight)`
  position: absolute;
  width: 50px;
  height: 50px;
  color: black;
  border-radius: 50%;
  top: 50%;
  right: 32px;
  cursor: pointer;
  user-select: none;
`;

const App = () => {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const prevButton = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
  };

  const nextButton = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };

  return (
    <Box>
      <LeftArrow onClick={prevButton} />
      <RightArrow onClick={nextButton} />
      {SliderData.map(
        (slide, index) =>
          current === index && <Image key={index} src={slide.image.default} />
      )}
    </Box>
  );
};

export default App;
