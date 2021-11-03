import React from "react";
import {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  Button,
} from "./SectionElements";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Button>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>

        <DownArrow src="./images/down-arrow.svg"></DownArrow>
      </Button>
    </Wrap>
  );
};

export default Section;
