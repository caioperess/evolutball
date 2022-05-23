import React from "react";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { Container, NextButton, SubTitle, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Image, View } from "react-native";
import introductionImg from "../../assets/man.png";

import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default function IntroductionPage() {
  const navigation = useNavigation();

  return (
    <SafeAreaContainer>
      <Container>
        <Title>Assista suas partidas de onde estiver</Title>

        <View style={{ width: "100%", height: "55%" }}>
          <Image
            source={introductionImg}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <SubTitle>
          Aqui você poderá assistir simultaneamente com imagem seu time de
          coração
        </SubTitle>

        <NextButton onPress={() => navigation.navigate("SelectLogin")}>
          <Feather
            name="chevron-right"
            size={25}
            color={theme.COLORS.primary_700}
          />
        </NextButton>
      </Container>
    </SafeAreaContainer>
  );
}
