import { create } from "zustand";
import { IProducto } from "../../ts/models/IProducto";
import { LocalStorageManager } from "../../ts/local-storage/LocalStorageManager";

export type TypeFavoritosStore = {
  state: {
    listaFavoritos: IProducto[];
  };
  setState: (newState: Partial<TypeFavoritosStore["state"]>) => void;
  addFavorito: (mueble: IProducto) => void;
  removeFavorito: (id: number | null) => void;
  updateFavorito: (updatedMueble: IProducto) => void;
  cargaInicial: () => void;
};

export const useFavoritosStore = create<TypeFavoritosStore>((set) => ({
  state: {
    listaFavoritos: [],
  },

  setState: (newState: Partial<TypeFavoritosStore["state"]>) =>
    set((state) => {
      const newStateObj = { ...state.state, ...newState };
      LocalStorageManager.setItem("muebles", newStateObj.listaFavoritos); // Guardar en localStorage
      return { state: newStateObj };
    }),

  // Agregar un mueble a favoritos y actualizar localStorage
  addFavorito: (mueble: IProducto) =>
    set((state) => {
      const newLista = [...state.state.listaFavoritos, mueble];
      LocalStorageManager.setItem("muebles", newLista);
      return {
        state: { ...state.state, listaFavoritos: newLista },
      };
    }),

  // Eliminar un mueble de favoritos y actualizar localStorage
  removeFavorito: (id: number | null) =>
    set((state) => {
      const newLista = state.state.listaFavoritos.filter(
        (mueble) => mueble.id !== id
      );
      LocalStorageManager.setItem("muebles", newLista);
      return {
        state: { ...state.state, listaFavoritos: newLista },
      };
    }),

  // Actualizar un mueble en favoritos y sincronizar con localStorage
  updateFavorito: (updatedMueble: IProducto) =>
    set((state) => {
      const newLista = state.state.listaFavoritos.map((mueble) =>
        mueble.id === updatedMueble.id ? updatedMueble : mueble
      );
      LocalStorageManager.setItem("muebles", newLista);
      return {
        state: { ...state.state, listaFavoritos: newLista },
      };
    }),

  // Cargar datos desde localStorage
  cargaInicial: () =>
    set(() => {
      const lista = LocalStorageManager.getItem<IProducto[]>("muebles") ?? [];
      return {
        state: { listaFavoritos: lista },
      };
    }),
}));
