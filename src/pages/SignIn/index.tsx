import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import BackButton from "../../components/BackButton";
import CustomButton from "../../components/Button";
import Input from "../../components/Input";
import KeyboardAvoidingContainer from "../../components/KeyboardAvoidContainer";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { Container, Title } from "./styles";

export default function SignInPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <Container>
          <BackButton />
          <View style={{ width: "100%" }}>
            <AuthHeader />
            <Title>Informe o email e a senha para entrar</Title>
          </View>

          <View style={{ width: "100%", flex: 1 }}>
            <Input
              placeholder="Digite o email"
              value={email}
              onChangeText={(value) => setEmail(value)}
              isFilled={!!email}
            />
            <Input
              placeholder="Digite a senha"
              value={senha}
              onChangeText={(value) => setSenha(value)}
              isFilled={!!senha}
            />
          </View>
          <CustomButton
            type="white"
            text="Entrar"
            style={{ marginBottom: 20 }}
            onPress={() => navigation.navigate("ConfirmNamePage")}
          />
        </Container>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  );
}
