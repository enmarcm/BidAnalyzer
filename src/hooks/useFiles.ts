import { useContext } from 'react';
import { FilesContext } from '../context/files';


export function useFiles() {
  const context = useContext(FilesContext);
  if (context === undefined) {
    throw new Error('useFiles must be used within a FilesProvider');
  }
  return context;
}
