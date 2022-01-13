import React from "react";
import "./Section.css";
import {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  Button,
} from "./SectionElements";
import Fade from "react-reveal/Fade";

const Section = ({
  isOpen,
  setIsOpen,
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap isOpen={isOpen} bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Button>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src="./images/down-arrow.svg"></DownArrow>
      </Button>
    </Wrap>
  );
};

export default Section;
