import React from "react";
import { ScrollView, Text, View } from "react-native";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Container,
  ContentContainer,
  ContentTitle,
  Header,
  HeaderButton,
  HeaderSubTitle,
  HeaderTitle,
  OptionCard,
} from "./styles";
import theme from "../../theme";

export default function HomePage() {
  return (
    <SafeAreaContainer>
      <Container>
        <Header>
          <View
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <HeaderTitle>Olá,</HeaderTitle>
            <HeaderSubTitle>Caio</HeaderSubTitle>
          </View>
          <HeaderButton>
            <FontAwesome5
              name="power-off"
              size={20}
              color={theme.COLORS.primary_700}
            />
          </HeaderButton>
        </Header>
        <ContentContainer>
          <ContentTitle>
            Selecione seu esporte favorito, {"\n"}e assista suas ligas
            preferidas
          </ContentTitle>
          <View
            style={{
              height: 80,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ marginTop: 24 }}
            >
              <OptionCard>
                <Text>Volei</Text>
              </OptionCard>
              <OptionCard>
                <Text>Volei</Text>
              </OptionCard>
              <OptionCard>
                <Text>Volei</Text>
              </OptionCard>
              <OptionCard>
                <Text>Volei</Text>
              </OptionCard>
              <OptionCard>
                <Text>Volei</Text>
              </OptionCard>
              <OptionCard>
                <Text>Volei</Text>
              </OptionCard>
              <OptionCard>
                <Text>Volei</Text>
              </OptionCard>
            </ScrollView>
          </View>
          <View style={{ flex: 1, width: "100%" }}>
            <View
              style={{ backgroundColor: "#fff", height: 60, width: 60 }}
            ></View>
          </View>
        </ContentContainer>
      </Container>
    </SafeAreaContainer>
  );
}
