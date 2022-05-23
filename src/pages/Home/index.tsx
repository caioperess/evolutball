import React, { useState } from "react";
import { FlatList, ScrollView, Text, View, Image } from "react-native";
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
  LeagueCard,
  LeagueCardText,
  OptionCard,
} from "./styles";
import theme from "../../theme";

import { campeonatos } from "../../service/fakeApi";
import { useAuth } from "../../hooks/Auth";
import introductionImg from "../../assets/man.png";

interface ChampionshipTypes {
  nome: string;
  logo: string;
}

export default function HomePage() {
  const { user, SignOut } = useAuth();
  const [championship, setChampionship] = useState<ChampionshipTypes[]>([]);

  return (
    <SafeAreaContainer>
      <Container>
        <Header>
          <View
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <HeaderTitle>Olá,</HeaderTitle>
            <HeaderSubTitle>{user.nome}</HeaderSubTitle>
          </View>
          <HeaderButton onPress={() => SignOut()}>
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
              {Object.entries(campeonatos).map(([key, value]) => {
                return (
                  <OptionCard key={key} onPress={() => setChampionship(value)}>
                    <Text>{key}</Text>
                  </OptionCard>
                );
              })}
            </ScrollView>
          </View>

          {championship.length !== 0 ? (
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FlatList
                scrollEnabled={false}
                data={championship}
                keyExtractor={(item) => item.nome}
                renderItem={({ item }) => (
                  <LeagueCard>
                    <Image
                      source={item.logo}
                      resizeMode="contain"
                      style={{ width: "100%", height: "70%" }}
                    />
                    <LeagueCardText>{item.nome}</LeagueCardText>
                  </LeagueCard>
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
              />
            </View>
          ) : (
            <View style={{ width: "100%", height: "100%" }}>
              <Image
                source={introductionImg}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          )}
        </ContentContainer>
      </Container>
    </SafeAreaContainer>
  );
}
