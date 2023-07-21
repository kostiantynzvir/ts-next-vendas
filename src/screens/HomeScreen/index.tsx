import React from "react";
import styled from "styled-components";

const Box = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["050"]};
  background-color: ${({ theme }) => theme.colors.main};

  @media screen and (min-width: 0px) {
    padding: ${({ theme }) => theme.sizes.padding.section["xs"]};
    font-size: ${({ theme }) => theme.typography.variants["large_xs"].size};
    font-weight: ${({ theme }) => theme.typography.variants["large_xs"].weight};
  }
  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.sizes.padding.section["md"]};

    font-size: ${({ theme }) => theme.typography.variants["large_md"].size};
    font-weight: ${({ theme }) => theme.typography.variants["large_md"].weight};
  }
`;

export default function HomeScreen() {
  return <Box>Olá</Box>;
}
