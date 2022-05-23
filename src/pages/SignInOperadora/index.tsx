import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Alert, View } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import BackButton from "../../components/BackButton";
import CustomButton from "../../components/Button";
import Input from "../../components/Input";
import KeyboardAvoidingContainer from "../../components/KeyboardAvoidContainer";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { useAuth } from "../../hooks/Auth";
import { Container, Title } from "./styles";

export default function SignInOperadoraPage() {
  const { SignIn } = useAuth();
  const [cpf, setCpf] = useState("");

  const handleSubmit = useCallback(async () => {
    if (cpf === "") {
      Alert.alert("Erro", "Por favor preencha todos os campos informados!");
    } else {
      await SignIn({
        email: "antonio@evolutball.com",
        password: "antonio@evolutball",
        nome: "Antonio",
      });
    }
  }, [cpf]);

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <Container>
          <BackButton />
          <View style={{ width: "100%" }}>
            <AuthHeader />
            <Title>Informe o CPF cadastrado na sua operadora para entrar</Title>
          </View>

          <View style={{ width: "100%", flex: 1 }}>
            <Input
              placeholder="Digite o cpf"
              value={cpf}
              keyboardType="numeric"
              onChangeText={(value) => setCpf(value)}
              isFilled={!!cpf}
            />

            <CustomButton
              type="white"
              text="Entrar"
              style={{ marginBottom: 20 }}
              onPress={handleSubmit}
            />
          </View>
        </Container>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  );
}
