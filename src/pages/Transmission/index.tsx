import React from "react";
import { View, Image } from "react-native";
import SafeAreaContainer from "../../components/SafeAreaContainer";
import theme from "../../theme";

import { Container, ContentContainer } from "../Home/styles";
import { Header, HeaderTitle, LeagueCard, LeagueCardText } from "./styles";
import { useRoute } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import WebView from "react-native-webview";

export interface JogosTypes {
  id: number;
  rodada: string;
  timeCasa: string;
  logoTimeCasa: any;
  placarTimeCasa: number;
  timeFora: string;
  logoTimeFora: any;
  placarTimeFora: number;
  data: string;
  horario: string;
  aoVivo: boolean;
  url: string;
}

interface routeParams {
  item: JogosTypes;
}

export default function Transmission() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const route = useRoute();
  const { item } = route.params as routeParams;

  return (
    <SafeAreaContainer>
      <BackButton />
      <Header>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <HeaderTitle>{item.aoVivo ? "🔴 Ao vivo" : ""}</HeaderTitle>
        </View>
      </Header>
      <Container>
        {item.url !== "" ? (
          <WebView
            style={{
              alignSelf: "center",
              width: 400,
              height: 350,
              marginBottom: 20,
              borderRadius: 12,
            }}
            javaScriptEnabled={true}
            source={{
              uri: `${item.url}`,
            }}
          />
        ) : null}
        <ContentContainer>
          <LeagueCard>
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
        </ContentContainer>
      </Container>
    </SafeAreaContainer>
  );
}
