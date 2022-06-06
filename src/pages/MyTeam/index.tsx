import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import { FontAwesome5 } from "@expo/vector-icons";

import theme from "../../theme";

import { jogos, timeDoCoracao } from "../../service/fakeApi";
import { useAuth } from "../../hooks/Auth";
import {
  Container,
  ContentContainer,
  Header,
  HeaderButton,
} from "../Home/styles";
import { HeaderTitle, LeagueCard, LeagueCardText, TextLeague } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { JogosTypes } from "../Transmission";

export default function MyTeam() {
  const { SignOut, user } = useAuth();
  const [games, setGames] = useState<JogosTypes[]>([]);
  const [gamesLive, setGamesLive] = useState<JogosTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function LoadData() {
      setLoading(true);
      setGames([]);
      setGamesLive([]);

      try {
        const jogosLive: JogosTypes[] = [];
        const items: JogosTypes[] = [];

        timeDoCoracao.SaoPaulo.forEach((item) => {
          if (item.aoVivo) {
            jogosLive.push(item);
          } else {
            items.push(item);
          }
          setGamesLive(jogosLive);
          setGames(items);
        });
      } catch (err) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    LoadData();
  }, []);

  if (loading) {
    return (
      <SafeAreaContainer>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={theme.COLORS.primary_700} />
        </View>
      </SafeAreaContainer>
    );
  }

  return (
    <SafeAreaContainer>
      <Container>
        <Header>
          <View
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <HeaderTitle>{user.time}</HeaderTitle>
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
          <ScrollView>
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
                data={gamesLive}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <LeagueCard
                    onPress={() =>
                      navigation.navigate("Transmission", { item })
                    }
                  >
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        borderRadius: 10000,
                        backgroundColor: `${theme.COLORS.primary_700}`,
                      }}
                    >
                      <Image
                        source={item.logoTimeCasa}
                        resizeMode="contain"
                        style={{ width: 45, height: 45 }}
                      />
                    </View>
                    <View>
                      <LeagueCardText>{item.rodada}</LeagueCardText>
                      <LeagueCardText>
                        {item.placarTimeCasa} {"         "}x{"         "}{" "}
                        {item.placarTimeFora}
                      </LeagueCardText>
                      {item.aoVivo ? (
                        <LeagueCardText>🔴 Ao vivo</LeagueCardText>
                      ) : (
                        <LeagueCardText>{item.horario}</LeagueCardText>
                      )}
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        borderRadius: 10000,
                        backgroundColor: `${theme.COLORS.primary_700}`,
                      }}
                    >
                      <Image
                        source={item.logoTimeFora}
                        resizeMode="contain"
                        style={{ width: 45, height: 45 }}
                      />
                    </View>
                  </LeagueCard>
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <TextLeague>Jogos do {user.time}</TextLeague>
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
                data={games}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <LeagueCard
                    onPress={() =>
                      navigation.navigate("Transmission", { item })
                    }
                  >
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        borderRadius: 10000,
                        backgroundColor: `${theme.COLORS.primary_700}`,
                      }}
                    >
                      <Image
                        source={item.logoTimeCasa}
                        resizeMode="contain"
                        style={{ width: 45, height: 45 }}
                      />
                    </View>
                    <View>
                      <LeagueCardText>{item.rodada}</LeagueCardText>
                      <LeagueCardText>
                        {item.placarTimeCasa} {"         "}x{"         "}{" "}
                        {item.placarTimeFora}
                      </LeagueCardText>
                      {item.aoVivo ? (
                        <LeagueCardText>🔴 Ao vivo</LeagueCardText>
                      ) : (
                        <LeagueCardText>
                          {item.data} - {item.horario}
                        </LeagueCardText>
                      )}
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        borderRadius: 10000,
                        backgroundColor: `${theme.COLORS.primary_700}`,
                      }}
                    >
                      <Image
                        source={item.logoTimeFora}
                        resizeMode="contain"
                        style={{ width: 45, height: 45 }}
                      />
                    </View>
                  </LeagueCard>
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </ScrollView>
        </ContentContainer>
      </Container>
    </SafeAreaContainer>
  );
}
