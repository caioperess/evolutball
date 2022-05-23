import { useRoute } from "@react-navigation/native";
import React, { useCallback } from "react";
import CustomButton from "../../components/Button";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { useAuth } from "../../hooks/Auth";
import { Container, Emoji, Subtitle, Title } from "./styles";

export default function ReadyPage() {
  const { SignIn } = useAuth();
  const route = useRoute();

  const handleSubmit = useCallback(async () => {
    if (route.params) {
      SignIn({
        email: "renan@evolutball.com",
        password: "renan@evolutball",
        nome: route.params.nome,
      });
    }
  }, [route]);

  return (
    <SafeAreaContainer>
      <Container>
        <Emoji>😁</Emoji>
        <Title>Prontinho</Title>
        <Subtitle>Agora você pode acompanhar todos os jogos </Subtitle>

        <CustomButton
          type="white"
          text="Começar"
          style={{ marginTop: 20 }}
          onPress={handleSubmit}
        />
      </Container>
    </SafeAreaContainer>
  );
}
