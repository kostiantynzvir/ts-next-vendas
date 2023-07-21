import React from "react";
import { useTheme } from "styled-components";

import Text from "@/components/Text";
import CoverBox, { CoverContainer, CoverLogo } from "./style";
import Form from "@/components/Form";
import Highlighter from "@/components/Highlighter";

export default function Cover() {
  const theme = useTheme();

  return (
    <CoverBox>
      <CoverContainer>
        <picture>
          <CoverLogo src="/img/logo.png" alt="Evento Chefão das Vendas" />
        </picture>
        <Text as="h1" variant="large">
          APRENDA A DOMINAR AS MELHORES
          <Highlighter>TÉCNICAS DE VENDA</Highlighter>
        </Text>
        <Text>
          Domine as Táticas de Vendas Inspiradas no Filme Clássico! Participe da
          Imperdível Mentoria Online e Gratuita sobre Vendas com a Temática do
          Poderoso Chefão. Aprenda a Construir Relacionamentos Duradouros,
          Técnicas de Persuasão e Estratégias para Alavancar seus Resultados nos
          Negócios. Vagas Limitadas - Reserve sua cadeira agora mesmo!
        </Text>
        <Form />
        <Text variant="small" color={theme.colors.neutral["100"]}>
          Não utilizamos suas informações de contato para enviar qualquer tipo
          de SPAM. Os dados coletados são tratados nos termos da LGPD e você
          pode se descadastrar da nossa lista de contatos a qualquer momento.
          Para mais informações acesse nossa Política de Privacidade.
        </Text>
      </CoverContainer>
    </CoverBox>
  );
}
