import { create } from "zustand";
import { IMueble } from "../../ts/models/IMueble";
import { LocalStorageManager } from "../../ts/local-storage/LocalStorageManager";

export type TypeCarritoStore = {
  state: {
    listaCarrito: IMueble[];
  };
  setState: (newState: Partial<TypeCarritoStore["state"]>) => void;
  addCarrito: (mueble: IMueble) => void;
  removeCarrito: (id: number | null) => void;
  updateCarrito: (updatedMueble: IMueble) => void;
  cargaInicialCarrito: () => void;
};

export const useCarritoStore = create<TypeCarritoStore>((set) => ({
  state: {
    listaCarrito: [],
  },

  setState: (newState: Partial<TypeCarritoStore["state"]>) =>
    set((state) => {
      const newStateObj = { ...state.state, ...newState };
      LocalStorageManager.setItem("muebles.carrito", newStateObj.listaCarrito); // Guardar en localStorage
      return { state: newStateObj };
    }),

  // Agregar un mueble a Carrito y actualizar localStorage
  addCarrito: (mueble: IMueble) =>
    set((state) => {
      const newLista = [...state.state.listaCarrito, mueble];
      LocalStorageManager.setItem("muebles.carrito", newLista);
      return {
        state: { ...state.state, listaCarrito: newLista },
      };
    }),

  // Eliminar un mueble de Carrito y actualizar localStorage
  removeCarrito: (id: number | null) =>
    set((state) => {
      const newLista = state.state.listaCarrito.filter(
        (mueble) => mueble.id !== id
      );
      LocalStorageManager.setItem("muebles.carrito", newLista);
      return {
        state: { ...state.state, listaCarrito: newLista },
      };
    }),

  // Actualizar un mueble en Carrito y sincronizar con localStorage
  updateCarrito: (updatedMueble: IMueble) =>
    set((state) => {
      const newLista = state.state.listaCarrito.map((mueble) =>
        mueble.id === updatedMueble.id ? updatedMueble : mueble
      );
      LocalStorageManager.setItem("muebles.carrito", newLista);
      return {
        state: { ...state.state, listaCarrito: newLista },
      };
    }),

  // Cargar datos desde localStorage
  cargaInicialCarrito: () =>
    set(() => {
      const lista =
        LocalStorageManager.getItem<IMueble[]>("muebles.carrito") ?? [];
      return {
        state: { listaCarrito: lista },
      };
    }),
}));
