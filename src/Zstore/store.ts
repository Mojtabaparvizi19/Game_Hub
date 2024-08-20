import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  input?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setPlatformId: (platformId: number) => void;
  setOrder: (ordering: string) => void;
  setInput: (input: string) => void;
  setGenreId: (genreId: number) => void;
}

const useGameStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setInput: (input) => set(() => ({ gameQuery: { input } })),
  setOrder: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering: order } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
}));

export default useGameStore;
