import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import CustomButton from "../../components/Button";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { AlreadyHaveCountText, Container, Title } from "./styles";

export default function SelectLoginPage() {
  const navigation = useNavigation();

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
          <CustomButton
            type="dark"
            text="Realizar Cadastro"
            onPress={() => navigation.navigate("SignUpPage")}
          />
          <AlreadyHaveCountText
            onPress={() => navigation.navigate("SignInPage")}
          >
            Já tenho uma conta
          </AlreadyHaveCountText>
        </View>
      </Container>
    </SafeAreaContainer>
  );
}
