import React, { useContext, useState } from "react";

interface SignInCredentials {
  email: string;
  password: string;
}

interface userData {
  email: string;
  password: string;
}

interface AuthContextData {
  SignIn({ email, password }: SignInCredentials): Promise<void>;
  SignOut(): Promise<void>;
  user: userData;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<userData>({} as userData);

  async function SignIn({ email, password }: SignInCredentials): Promise<void> {
    setUser({ email, password });
  }

  async function SignOut(): Promise<void> {
    setUser({} as userData);
  }

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
