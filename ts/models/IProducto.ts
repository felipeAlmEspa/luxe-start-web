export interface IProducto {
  id: number | null;
  titulo: string | null;
  activo: boolean | null;
  precio: number | null;
  descuento: number | null;
  stock: number | null;
  img: string | null;
  etiqueta: string | null;
  descripcion: string | null;
  alto: number | null;
  ancho: number | null;
  largo: number | null;
  categoria: string | null;
  favorito: boolean;
  carrito: boolean;
  color: string | null;
}
