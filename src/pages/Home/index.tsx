import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

interface ChampionshipTypes {
  nome: string;
  logo: string;
}

export default function HomePage() {
  const { user, SignOut } = useAuth();
  const [championship, setChampionship] = useState<ChampionshipTypes[]>([]);
  const [activeOption, setActiveOption] = useState(-1)
  const navigation = useNavigation();

  async function LoadData() {
    Toast.show({
      position: "top",
      type: "success",
      text1: "Seu time do coração está jogando agora!! 💜",
      text2: "Não perca a oportunidade de assisti-lo!! 👋",
      visibilityTime: 3000,
      autoHide: true,
    });
  }

  async function handleNavigate(league: string) {
    await AsyncStorage.setItem("@evolutball:league", league);
    navigation.navigate("ListGames");
  }

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
              contentContainerStyle={{ marginTop: 20 }}
            >
              {Object.entries(campeonatos).map(([key, value]) => {
                return (
                  <OptionCard
                    key={key}
                    active={activeOption.toString() === key}
                    onPress={() => {
                      setActiveOption(key)
                      setChampionship(value.tipos)
                    }}
                  >
                    <Image
                      source={value.image}
                      resizeMode="contain"
                      style={{ width: 20, height: 20, marginRight: 10, backgroundColor: '#fff', borderRadius: 50 }}
                    />
                    <Text style={{color: activeOption.toString() === key ? '#fff' : '#000'}}>{key}</Text>
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
                scrollEnabled
                data={championship}
                keyExtractor={(item) => item.nome}
                renderItem={({ item }) => (
                  <LeagueCard onPress={() => handleNavigate(item.nome)}>
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
