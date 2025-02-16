import { IMueble } from "../models/IMueble";

type StorageKey = "mueble" | "muebles" | "user" | "theme" | "settings"; // Solo claves permitidas

export class LocalStorageManager {
  static setItem<T>(key: StorageKey, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem<T>(key: StorageKey): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  static removeItem(key: StorageKey): void {
    localStorage.removeItem(key);
  }

  static addMueble(mueble: IMueble): void {
    const muebles = this.getItem<IMueble[]>("muebles") || [];
    muebles.push(mueble);
    this.setItem("muebles", muebles);
  }

  static removeMueble(id: number): void {
    let muebles = this.getItem<IMueble[]>("muebles") || [];
    muebles = muebles.filter((mueble) => mueble.id !== id);
    this.setItem("muebles", muebles);
  }

  static clear(): void {
    localStorage.clear();
  }
}

// Ejemplo de uso
// LocalStorageManager.setItem('user', { name: 'Juan', age: 30 });
// const user = LocalStorageManager.getItem<{ name: string; age: number }>('user');
// console.log(user);
