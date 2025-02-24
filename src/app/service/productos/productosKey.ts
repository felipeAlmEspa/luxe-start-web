export const productosKey = {
  todos: () => ["producto"] as const,
  listado: () => [...productosKey.todos(), "listado"] as const,
};
