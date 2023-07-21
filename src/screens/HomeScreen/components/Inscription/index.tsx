import React from "react";
import Text from "@/components/Text";
import { useTheme } from "styled-components";
import Form from "@/components/Form";
import InscriptionBox, { InscriptionContainer, FormContainer } from "./style";

export default function Inscription() {
  const theme = useTheme();

  return (
    <InscriptionBox>
      <InscriptionContainer>
        <Text variant="emphasis">CHEFÃO DAS VENDAS</Text>
        <Text variant="emphasis" color={theme.colors.main}>
          100% ONLINE E GRATUITO
        </Text>
        <Text>15 A 20 DE NOVEMBRO ÀS 20H</Text>
        <FormContainer>
          <Form />
        </FormContainer>
      </InscriptionContainer>
    </InscriptionBox>
  );
}
