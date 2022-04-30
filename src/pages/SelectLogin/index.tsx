import React from "react";
import { View } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import CustomButton from "../../components/Button";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { AlreadyHaveCountText, Container, Title } from "./styles";

export default function SelectLoginPage() {
  return (
    <SafeAreaContainer>
      <Container>
        <View style={{ width: "100%" }}>
          <AuthHeader />
          <Title>
            Aqui você poderá assistir simultaneamente com imagem seu time de
            coração
          </Title>
        </View>

        <View style={{ width: "100%", paddingVertical: 20 }}>
          <CustomButton
            type="light"
            text="Entrar com uma Operadora"
            style={{ marginBottom: 10 }}
          />
          <CustomButton type="dark" text="Realizar Cadastro" />
          <AlreadyHaveCountText>Já tenho uma conta</AlreadyHaveCountText>
        </View>
      </Container>
    </SafeAreaContainer>
  );
}
