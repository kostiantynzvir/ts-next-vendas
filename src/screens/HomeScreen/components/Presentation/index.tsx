import React from "react";
import Highlighter from "@/components/Highlighter";
import Text from "@/components/Text";
import PresentationBox, {
  Card,
  CardImage,
  PresentationContainer,
} from "./style";

export default function Presentation() {
  return (
    <PresentationBox>
      <PresentationContainer>
        <Text variant="large">
          PORQUE EU DEVO <Highlighter>PARTICIPAR DA MENTORIA?</Highlighter>
        </Text>
        <Text>
          Bem-vindo à Mentoria Online e Gratuita sobre Vendas: O Poderoso Chefão
          das Vendas! Prepare-se para uma experiência única e enriquecedora no
          universo dos negócios, inspirada no lendário filme O Poderoso Chefão.
        </Text>
        <Text>
          Nesta jornada de aprendizado, você será guiado por verdadeiros
          {` "chefões"`} das vendas, especialistas que dominam as estratégias e
          táticas para alcançar o sucesso no mundo dos negócios. Aprenda como
          construir relacionamentos sólidos e duradouros com seus clientes,
          descubra os segredos do networking e influência, e domine a arte de
          fechar negócios de forma magistral.
        </Text>
        <Text>
          Assim como Don Vito Corleone comandava com maestria o submundo do
          crime, você também se tornará um mestre nas técnicas de persuasão e
          comunicação, capaz de vender qualquer coisa para qualquer pessoa, de
          forma ética e eficiente.
        </Text>
        <Text>
          Nessa mentoria interativa e envolvente, você desvendará os princípios
          do sucesso do Poderoso Chefão das Vendas e como aplicá-los em seu
          próprio cenário empresarial. Prepare-se para ser cativado por lições
          valiosas, histórias emocionantes e insights práticos, tudo enquanto
          mergulha no universo fascinante do filme clássico.
        </Text>
        <Text>
          Venha fazer parte desta jornada única, e ao final, você estará pronto
          para assumir o controle do mercado, conquistar novos clientes e se
          destacar como um verdadeiro Poderoso Chefão das Vendas!
        </Text>
      </PresentationContainer>
      <PresentationContainer>
        <Card>
          <CardImage src="/img/cards/target.svg" alt="target" />
          <Text>
            Aprendizado inspirado no filme clássico {`"O Poderoso Chefão"`} para
            potencializar suas habilidades de vendas.
          </Text>
        </Card>
        <Card>
          <CardImage src="/img/cards/work.svg" alt="work" />
          <Text>
            Estratégias comprovadas para construir relacionamentos sólidos e
            duradouros com clientes.
          </Text>
        </Card>
        <Card>
          <CardImage src="/img/cards/alert.svg" alt="alert" />
          <Text>
            Técnicas de persuasão e comunicação eficazes para fechar negócios
            com maestria.{" "}
          </Text>
        </Card>
        <Card>
          <CardImage src="/img/cards/handshake.svg" alt="handshake" />
          <Text>
            Networking de sucesso: descubra como ampliar sua rede de contatos e
            influência.
          </Text>
        </Card>
      </PresentationContainer>
    </PresentationBox>
  );
}
