import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../service/fakeApi";

interface SignInCredentials {
  nome: string;
  email: string;
  password: string;
}

interface userData {
  nome: string;
  email: string;
  password: string;
  time: string | undefined;
  tipoConta: string;
}

interface AuthContextData {
  SignIn({ email, password }: SignInCredentials): Promise<void>;
  SignOut(): Promise<void>;
  user: userData;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<userData>({} as userData);

  async function SignIn({
    email,
    password,
    nome,
  }: SignInCredentials): Promise<void> {
    var userInfo: userData = {
      nome: "",
      email: "",
      password: "",
      time: "",
      tipoConta: "",
    };

    login.contas.map((item) => {
      if (item.email === email && item.senha === password) {
        userInfo = {
          nome: nome,
          email: item.email,
          password: item.senha,
          time: item.time,
          tipoConta: item.tipoConta,
        };
      }
    });

    setUser(userInfo);

    await AsyncStorage.setItem("@evolutball:user", JSON.stringify(userInfo));
  }

  async function SignOut(): Promise<void> {
    await AsyncStorage.removeItem("@evolutball:user");

    setUser({} as userData);
  }

  useEffect(() => {
    async function loadData() {
      const userJSONValue = await AsyncStorage.getItem("@evolutball:user");

      if (!userJSONValue) {
        setUser({} as userData);
      } else {
        setUser(JSON.parse(userJSONValue));
      }
    }

    loadData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        SignIn,
        SignOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado com AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
