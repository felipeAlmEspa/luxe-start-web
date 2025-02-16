import { IMueble } from "../../../ts/models/IMueble";

export const mueblesApi = {
  getMuebles: async () => {
    try {
      const response = await fetch("https://felipealmespa.github.io/luxeApi/");
      let res: IMueble[] = [];
      const text = await response.text(); // Obtener el contenido como texto
      // Extraer contenido del <pre>
      const jsonMatch = text.match(/<pre>([\s\S]*?)<\/pre>/);

      if (jsonMatch && jsonMatch[1]) {
        try {
          // Intentar convertir a JSON
          const jsonData = JSON.parse(jsonMatch[1]);
          res = jsonData.data;
        } catch (parseError) {
          console.error("Error al parsear JSON:", parseError);
          res = [];
        }
      } else {
        console.error("No se encontró contenido JSON válido en el <pre>");
        res = [];
      }
      return res;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      return [];
    }
  },
};
