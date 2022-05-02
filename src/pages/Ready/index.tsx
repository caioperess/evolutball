import React from "react";
import CustomButton from "../../components/Button";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { Container, Emoji, Subtitle, Title } from "./styles";

export default function ReadyPage() {
  return (
    <SafeAreaContainer>
      <Container>
        <Emoji>😁</Emoji>
        <Title>Prontinho</Title>
        <Subtitle>Agora você pode acompanhar todos os jogos </Subtitle>

        <CustomButton type="white" text="Começar" style={{ marginTop: 20 }} />
      </Container>
    </SafeAreaContainer>
  );
}
