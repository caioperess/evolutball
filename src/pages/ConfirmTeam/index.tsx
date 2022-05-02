import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import BackButton from "../../components/BackButton";
import CustomButton from "../../components/Button";
import Input from "../../components/Input";
import KeyboardAvoidingContainer from "../../components/KeyboardAvoidContainer";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { Container, Title } from "./styles";

export default function ConfirmTeamPage() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");

  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer>
        <BackButton />
        <Container>
          <Title>{!!nome ? "😄" : "😀"}</Title>
          <Title>Qual o seu Time de Coração?</Title>

          <View style={{ width: "100%", marginTop: 30 }}>
            <Input
              placeholder="Digite seu time de coração"
              value={nome}
              onChangeText={(value) => setNome(value)}
              isFilled={!!nome}
            />

            <CustomButton
              type="white"
              text="Confirmar"
              style={{ marginTop: 15 }}
              onPress={() => navigation.navigate('ReadyPage')}
            />
          </View>
        </Container>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  );
}
