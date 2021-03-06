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

export default function SignUpPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = useCallback(async () => {
    if (email === "" || senha === "") {
      Alert.alert("Erro", "Por favor preencha todos os campos informados!");
    } else {
      navigation.navigate("ConfirmNamePage");
    }
  }, [email, senha]);

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <Container>
          <BackButton />
          <View style={{ width: "100%" }}>
            <AuthHeader />
            <Title>Informe seu email e senha para criar uma conta</Title>
          </View>

          <View style={{ width: "100%", flex: 1 }}>
            <Input
              placeholder="Digite o email"
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
              isFilled={!!email}
            />
            <Input
              placeholder="Digite a senha"
              value={senha}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(value) => setSenha(value)}
              isFilled={!!senha}
            />
            <CustomButton
              type="white"
              text="Cadastrar"
              style={{ marginBottom: 20 }}
              onPress={handleSubmit}
            />
          </View>
        </Container>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  );
}
