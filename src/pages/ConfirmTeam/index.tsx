import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Alert, View } from "react-native";
import BackButton from "../../components/BackButton";
import CustomButton from "../../components/Button";
import Input from "../../components/Input";
import KeyboardAvoidingContainer from "../../components/KeyboardAvoidContainer";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { Container, Title } from "./styles";

export default function ConfirmTeamPage() {
  const navigation = useNavigation();
  const params = useRoute();
  const [teamName, setTeamName] = useState("");

  const handleSubmit = useCallback(async () => {
    if (teamName === "") {
      Alert.alert("Erro", "Por favor preencha todos os campos informados!");
    } else {
      navigation.navigate("ReadyPage", { nome: params.params.nome });
    }
  }, [teamName, params]);

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <BackButton />
        <Container>
          <Title>{!!teamName ? "😄" : "😀"}</Title>
          <Title>Qual o seu Time de Coração?</Title>

          <View style={{ width: "100%", marginTop: 30 }}>
            <Input
              placeholder="Digite seu time de coração"
              value={teamName}
              autoCapitalize="words"
              onChangeText={(value) => setTeamName(value)}
              isFilled={!!teamName}
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
