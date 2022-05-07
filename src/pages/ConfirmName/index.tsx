import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Alert, View } from "react-native";
import BackButton from "../../components/BackButton";
import CustomButton from "../../components/Button";
import Input from "../../components/Input";
import KeyboardAvoidingContainer from "../../components/KeyboardAvoidContainer";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { Container, Title } from "./styles";

export default function ConfirmNamePage() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");

  const handleSubmit = useCallback(async () => {
    if (nome === "") {
      Alert.alert("Erro", "Por favor preencha todos os campos informados!");
    } else {
      navigation.navigate("ConfirmTeamPage", { nome });
    }
  }, [nome]);

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <BackButton />
        <Container>
          <Title>{!!nome ? "😄" : "😀"}</Title>
          <Title>Como podemos chamar você?</Title>

          <View style={{ width: "100%", marginTop: 30 }}>
            <Input
              placeholder="Digite o nome"
              value={nome}
              autoCapitalize="words"
              onChangeText={(value) => setNome(value)}
              isFilled={!!nome}
            />
            <CustomButton
              type="white"
              text="Confirmar"
              style={{ marginTop: 15 }}
              onPress={handleSubmit}
            />
          </View>
        </Container>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  );
}
