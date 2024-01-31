import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useState } from "react";

interface FilesContextType {
  files: Array<File>;
  setFiles: Dispatch<SetStateAction<Array<File>>>;
}

export const FilesContext = createContext<FilesContextType | undefined>(
  undefined
);

export function FilesProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {children}
    </FilesContext.Provider>
  );
}
