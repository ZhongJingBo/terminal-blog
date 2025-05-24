import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { getNoteList, NoteItem } from '../service/index';

interface MarkdownContextType {
  noteList: NoteItem[];
  loading: boolean;
  error: Error | null;
  refreshNoteList: () => Promise<void>;
}

const defaultContext: MarkdownContextType = {
  noteList: [],
  loading: false,
  error: null,
  refreshNoteList: async () => {}
};

const MarkdownContext = createContext<MarkdownContextType>(defaultContext);

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);
  if (!context) {
    throw new Error('useMarkdown must be used within a MarkdownProvider');
  }
  return context;
};

interface MarkdownProviderProps {
  children: ReactNode;
}

export const MarkdownProvider: React.FC<MarkdownProviderProps> = ({ children }) => {
  const [noteList, setNoteList] = useState<NoteItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchNoteList = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getNoteList();
      setNoteList(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch note list'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNoteList();
  }, []);

  const contextValue = {
    noteList,
    loading,
    error,
    refreshNoteList: fetchNoteList
  };

  return (
    <MarkdownContext.Provider value={contextValue}>
      {children}
    </MarkdownContext.Provider>
  );
}; 