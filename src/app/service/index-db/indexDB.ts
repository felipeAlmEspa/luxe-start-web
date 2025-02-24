import { mueblesApi } from "@/app/api/mueblesApi";
import { IProducto } from "../../../../ts/models/IProducto";

const DB_NAME = "ProductosDB";
const DB_VERSION = 1;
const STORE_NAME = "productos";

let db: IDBDatabase | null = null;

export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (db) return resolve(db); // Si la base de datos ya está abierta, la devolvemos

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    // Este evento se ejecuta cuando la base de datos se crea o se actualiza
    request.onupgradeneeded = (event) => {
      const database = (event.target as IDBOpenDBRequest).result;

      // Crear el object store solo si no existe
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });

        // Aquí puedes crear índices si es necesario, por ejemplo:
        store.createIndex("titulo", "titulo", { unique: false });
        store.createIndex("precio", "precio", { unique: false });
      }
    };

    request.onsuccess = (event) => {
      db = (event.target as IDBOpenDBRequest).result;
      resolve(db); // Base de datos abierta con éxito
    };

    request.onerror = () => reject("Error al abrir la base de datos");
  });
};

export const agregarProducto = async (producto: IProducto) => {
  const database = await openDB();
  const tx = database.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.add(producto);
};

export const obtenerProductos = async (): Promise<IProducto[]> => {
  const database = await openDB();
  return new Promise((resolve, reject) => {
    const tx = database.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Error al obtener productos");
  });
};

export const eliminarProducto = async (id: number) => {
  const database = await openDB();
  const tx = database.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.delete(id);
};

export const actualizarProducto = async (producto: IProducto) => {
  const database = await openDB();
  const tx = database.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.put(producto);
};

// Función para cargar muebles desde la API y sincronizarlos con IndexedDB
export const sincronizarConAPI = async () => {
  try {
    // Hacer una petición a la API para obtener los muebles
    const mueblesAPI = await mueblesApi.getMuebles();

    // Obtener los muebles en IndexedDB
    const mueblesIndexedDB = await obtenerProductos();

    // Sincronizar: Si hay muebles nuevos en la API que no están en IndexedDB, agregarlos
    for (const muebleAPI of mueblesAPI) {
      const muebleExistente = mueblesIndexedDB.find(
        (m) => m.id === muebleAPI.id
      );
      if (!muebleExistente) {
        await agregarProducto(muebleAPI);
      } else {
        // Si el mueble ya existe en IndexedDB, actualízalo con los datos de la API
        await actualizarProducto(muebleAPI);
      }
    }
  } catch (error) {
    console.error("Error al sincronizar con la API", error);
  }
};
