import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from "react";
import type { ReactNode } from "react";
import { getShows } from "../api/api";

type Show = {
  id: number;
  name: string;
  start_time: string;
};

type AppContextType = {
  shows: Show[];
  fetchShows: () => Promise<void>;
  loading: boolean;
};

 const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchShows = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getShows();
      setShows(res.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);
  return (
    <AppContext.Provider value={{ shows, fetchShows, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };