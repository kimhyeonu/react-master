import React, { createContext, useContext, useState } from 'react';

interface User {
  id: number;
  username: string;
}

interface AuthContextValue {
  user: User | null;
  setUser(user: User): void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('AuthContextProvider is not used.');
  }

  return auth;
}
