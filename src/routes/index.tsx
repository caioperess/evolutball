import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../hooks/Auth";
import AppTabRoutes from "./AppTabRoutes";
import AuthStackRoutes from "./AuthStackRoutes";

export default function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.nome ? <AppTabRoutes /> : <AuthStackRoutes />}
    </NavigationContainer>
  );
}
