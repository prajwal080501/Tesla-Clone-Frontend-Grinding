import React from "react";
import Section from "../Section/Section";
import { Container } from "./HomeElements";

const Home = () => {
  return (
    <Container>
      <Section
        id="model-s"
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="model-3"
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="model-X"
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="model-y"
        title="Solar Panels"
        description="Low cost solar panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roofs"
        description="Produce clean enerygy from your roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;
