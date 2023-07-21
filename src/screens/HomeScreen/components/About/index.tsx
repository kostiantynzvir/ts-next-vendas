import React from "react";
import Text from "@/components/Text";
import Highlighter from "@/components/Highlighter";
import AboutBox, { AboutContainer, SideImage, TopImage } from "./style";

export default function About() {
  return (
    <AboutBox>
      <TopImage
        src="/img/offer.png"
        alt="'Eu vou lhe fazer uma oferta que você não pode recusar'"
      />
      <AboutContainer>
        <Text variant="large">
          COMO VAI FUNCIONAR{" "}
          <Highlighter display="inline">O EVENTO:</Highlighter>
        </Text>
        <Text>
          Nesta mentoria online gratuita, você terá acesso a 5 aulas em vídeo,
          onde mentores especialistas compartilharão estratégias comprovadas
          para construir relacionamentos sólidos com clientes, técnicas
          persuasivas para fechar negócios com maestria e insights práticos para
          destacar-se no mercado.
        </Text>
        <Text>
          Além disso, participará de 2 transmissões ao vivo interativas para
          tirar dúvidas e interagir com os mentores e outros participantes.
          Junte-se também ao grupo exclusivo no Telegram para networking e
          acesso a materiais complementares.
        </Text>
        <Text>Tudo isso de maneira 100% online e gratuita.</Text>
        <Text>
          Vagas limitadas - garanta a sua agora mesmo e prepare-se para dominar
          as vendas como um verdadeiro Poderoso Chefão!
        </Text>
      </AboutContainer>
      <SideImage
        src="/img/corleone.png"
        alt="Desenho do Corleone limpando uma faca suja de sangue"
      />
    </AboutBox>
  );
}
