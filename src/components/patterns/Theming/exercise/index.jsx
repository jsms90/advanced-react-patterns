import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import CardWithButton from './CardWithButton'

const Wrapper = styled("div")`
  padding: 40px;
`;

const ThemingExercise = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <CardWithButton buttonText="Click me!">
        <p>Hi Semra</p>
        <p>I'm the best card in the world</p>
        <p>Nice to meet you :)</p>
      </CardWithButton>
    </Wrapper>
  </ThemeProvider>
);

export default ThemingExercise;
