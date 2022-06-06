import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomePage from "../pages/Home";
import ListGames from "../pages/ListGames";
import MyTeam from "../pages/MyTeam";
import Transmission from "../pages/Transmission";

const Stack = createStackNavigator();

export default function AppStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ListGames" component={ListGames} />
      <Stack.Screen name="Transmission" component={Transmission} />
      <Stack.Screen name="MyTeam" component={MyTeam} />
    </Stack.Navigator>
  );
}
