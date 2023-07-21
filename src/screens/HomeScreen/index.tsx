import React from "react";
import { useTheme } from "styled-components";
import Text from "@/components/Text";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Text as="h1" variant="emphasis" color={theme.colors.main}>
      Olá
    </Text>
  );
}
