import React from "react";
import Main from "./style";
import Cover from "./components/Cover";
import Presentation from "./components/Presentation";

export default function HomeScreen() {
  return (
    <Main>
      <Cover />
      <Presentation />
    </Main>
  );
}
