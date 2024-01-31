import { useState, createContext } from "react";

interface StatusContextType {
  content: String;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StatusContext = createContext<StatusContextType | undefined>(
  undefined
);

export function StatusProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <StatusContext.Provider
      value={{ content, loading, setContent, setLoading }}
    >
      {children}
    </StatusContext.Provider>
  );
}
