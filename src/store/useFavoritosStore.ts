import { create } from "zustand";
import { IMueble } from "../../ts/models/IMueble";

export type TypeFaoritosStore = {
  state: {
    listaFavoritos: IMueble[];
  };
  setState: (newState: Partial<TypeFaoritosStore["state"]>) => void;
  addFavorito: (mueble: IMueble) => void;
  removeFavorito: (id: number) => void;
  updateFavorito: (updatedMueble: IMueble) => void;
};

export const useFavoritosStore = create<TypeFaoritosStore>((set) => ({
  state: {
    listaFavoritos: [],
  },
  setState: (newState: Partial<TypeFaoritosStore["state"]>) =>
    set((state) => ({
      state: { ...state.state, ...newState },
    })),

  // Agregar un mueble a la lista
  addFavorito: (mueble: IMueble) =>
    set((state) => ({
      state: {
        ...state.state,
        listaFavoritos: [...state.state.listaFavoritos, mueble],
      },
    })),

  // Eliminar un mueble de la lista
  removeFavorito: (id: number) =>
    set((state) => ({
      state: {
        ...state.state,
        listaFavoritos: state.state.listaFavoritos.filter(
          (mueble) => mueble.id && mueble.id !== id
        ),
      },
    })),

  // Actualizar un mueble en la lista
  updateFavorito: (updatedMueble: IMueble) =>
    set((state) => ({
      state: {
        ...state.state,
        listaFavoritos: state.state.listaFavoritos.map((mueble) =>
          mueble.id === updatedMueble.id ? updatedMueble : mueble
        ),
      },
    })),
}));
