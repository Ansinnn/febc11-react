import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

const ThemeStore = (set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode}))
});

const useThemeStore = create(persist(ThemeStore, {
  name: 'themeStore',
}));

export default useThemeStore;