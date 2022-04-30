import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../hooks/Auth";
import AppTabRoutes from "./AppTabRoutes";
import AuthStackRoutes from "./AuthStackRoutes";

export default function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.email ? <AppTabRoutes /> : <AuthStackRoutes />}
    </NavigationContainer>
  );
}
