import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import BackButton from "../../components/BackButton";
import CustomButton from "../../components/Button";
import Input from "../../components/Input";
import KeyboardAvoidingContainer from "../../components/KeyboardAvoidContainer";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { Container, Title } from "./styles";

export default function ConfirmNamePage() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");

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
              onChangeText={(value) => setNome(value)}
              isFilled={!!nome}
            />

            <CustomButton
              type="white"
              text="Confirmar"
              style={{ marginTop: 15 }}
              onPress={() => navigation.navigate("ConfirmTeamPage")}
            />
          </View>
        </Container>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  );
}
