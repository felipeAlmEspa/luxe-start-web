import * as FileSystem from "expo-file-system";
import { ISelectorModalData } from "@/components/ui/modal/selector-modal";

export const URL_ZIP_PRODUCTOS =
  "https://apolo-pulse.s3.us-east-1.amazonaws.com/0190333973001.zip";

export const DIR_IMAGES = `${FileSystem.documentDirectory}imagenes/`;
export const BUCKET_PRINCIPAL = "kamaycloud--us-east-1";
export const BASE_URL_S3 = `https://${BUCKET_PRINCIPAL}.s3.amazonaws.com/`;
export const SECRET_REGION_AWS = "us-east-1";

export const TipoImgGesPubli = {
  ejemplo: "EJEMPLO",
  asesor: "ASESOR",
};

export const OptionsEstadosMerchandising: ISelectorModalData[] = [
  { id: "PENDIENTE SUBIR", title: "PENDIENTE SUBIR" },
  { id: "PENDIENTE APROBACION", title: "PENDIENTE APROBACION" },
  { id: "APROBADO", title: "APROBADO" },
  { id: "RECHAZADO", title: "RECHAZADO" },
  { id: "PENDIENTE DE SINCRONIZAR", title: "PENDIENTE DE SINCRONIZAR" },
];
