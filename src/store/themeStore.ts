import create from "zustand";

type State = {
  darkTheme: boolean
  toggleTheme: () => void
}

export const useThemeStore = create<State>((set, get) => ({
  darkTheme: false,
  toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
}));
