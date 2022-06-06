import React from "react";
import { Text, View } from "react-native";
import {
  RectButton,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../assets/loading.json";
import theme from "../../theme";

interface ILoadingScreen {
  hasError?: boolean;
}

const LoadingScreen = ({ hasError }: ILoadingScreen) => {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.COLORS.white,
      }}
    >
      <LottieView
        autoPlay
        loop
        source={Loading}
        style={{ backgroundColor: "transparent", width: 100, height: 100 }}
      />
      <Text style={{ fontFamily: theme.FONTS.md, marginTop: 5 }}>
        Carregando...
      </Text>

      {hasError ? (
        <View
          style={{
            position: "absolute",
            bottom: 50,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginBottom: 5,
              fontFamily: theme.FONTS.lg,
              color: "red",
            }}
          >
            Ocorreu um erro ao carregar
          </Text>
          <RectButton
            style={{
              height: "auto",
              width: "40%",
              backgroundColor: theme.COLORS.primary_500,
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontFamily: theme.FONTS.md,
                color: "#fff",
              }}
            >
              Voltar
            </Text>
          </RectButton>
        </View>
      ) : (
        <></>
      )}
    </GestureHandlerRootView>
  );
};

export default LoadingScreen;
