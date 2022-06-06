import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, Platform, View } from "react-native";
import IntroductionPage from "../pages/Introduction";
import { FontAwesome5 } from "@expo/vector-icons";

import logo from "../assets/cut_logo.png";
import theme from "../theme";
import ListGames from "../pages/ListGames";
import AppStackRoutes from "./AppStack";
import MyTeam from "../pages/MyTeam";

const BottomTab = createBottomTabNavigator();

export default function AppTabRoutes() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.active,
        tabBarInactiveTintColor: theme.COLORS.inactive,
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarAllowFontScaling: true,
        tabBarStyle: {
          height: 60,
          backgroundColor: "#fff",
          marginBottom: Platform.OS === "android" ? 2 : undefined,
          paddingBottom: 2,
        },
      }}
    >
      <BottomTab.Screen
        name="Transmissões"
        component={ListGames}
        options={{
          tabBarLabel: "Transmissões",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="chromecast" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <View
              style={{
                width: 70,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 70 / 2,
                backgroundColor: "#fff",
                padding: 5,
                top: -10,
              }}
            >
              <Image
                source={logo}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 70 / 2,
                }}
              />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="MyTeam"
        component={MyTeam}
        options={{
          tabBarLabel: "Time de Coração",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="heart" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
