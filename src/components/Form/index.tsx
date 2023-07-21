import React from "react";
import FormBox, { Input, Button } from "./style";
import Text from "@/components/Text";

export default function Form() {
  return (
    <FormBox>
      <Input type="email" placeholder="Digite seu e-mail" />
      <Button type="submit">
        <Text variant="emphasis">GARANTIR MINHA VAGA</Text>
      </Button>
    </FormBox>
  );
}
