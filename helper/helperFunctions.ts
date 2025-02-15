import { btoa, atob } from "react-native-quick-base64";
import { Dimensions } from "react-native";
import { parse, format, getMonth, fromUnixTime, getUnixTime } from "date-fns";
import { find } from "lodash";
import * as FileSystem from "expo-file-system";
import { FORMATO_FECHA } from "@/constants/Fechas";
import { ICodificarUrl } from "@/ts/utils/ICodificarUrl";
import { Image as ImageCompress } from "react-native-compressor";
import * as Location from "expo-location";
import { toast } from "sonner-native";
import { Linking } from "react-native";
import { BUCKET_PRINCIPAL, SECRET_REGION_AWS } from "./constans";
import { S3Params } from "@/ts/utils/CommonTypes";

export const obtenerIdYoutube = (url: string) => {
  const regExp =
    /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
  const match = url.match(regExp);
  if (match && match.length > 0) {
    return match[1];
  }
  return url;
};

interface propsCodificarUrl {
  bucket: string;
  key: string;
  alto?: number;
  ancho?: number;
  resizemode?: "contain";
}

export const codificarUrl = ({
  bucket,
  key,
  alto,
  ancho,
  resizemode,
}: propsCodificarUrl) => {
  const URL = "https://cloud-image.kamaytech.com/";
  let resultado = "";
  const parametros: ICodificarUrl = { edits: {} };
  if (bucket) parametros.bucket = bucket;
  if (key) parametros.key = key;
  if (alto && ancho && resizemode && parametros.edits) {
    parametros.edits.resize = {
      width: ancho,
      height: alto,
      fit: resizemode,
      background: "#ffffff",
    };
  }
  resultado += URL + btoa(JSON.stringify(parametros));
  return resultado;
};

export function getFullUrlS3({
  bucket = BUCKET_PRINCIPAL,
  key = "",
  path = "",
  extension = "",
}: S3Params): string {
  if (!bucket || !key) {
    return "";
  }

  const baseUrl: string = `https://${bucket}.s3.${SECRET_REGION_AWS}.amazonaws.com/`;
  return `${baseUrl}${path}${key}${extension}`;
}
interface DecodedImage {
  bucket: string;
  key: string;
}
export const decodeBase64 = (data: string): DecodedImage => {
  const str = data.split("/ey")[1];
  const decoded = atob(`ey${str}`);
  return JSON.parse(decoded);
};

const getMonthName = (month: number) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return months[month];
};

export const getFormatDateFromString = (fecha: any) => {
  const _fecha = parse(fecha, "dd-MM-yyyy HH:mm", new Date());
  const mes = getMonthName(getMonth(_fecha));
  return {
    dia: format(_fecha, "d"),
    mes,
    mesn: getMonth(_fecha),
    anio: format(_fecha, "yyyy"),
    hora: format(_fecha, "HH"),
    minuto: format(_fecha, "mm"),
  };
};

export const getFormatDateNotimeFromString = (fecha: any) => {
  const _fecha = parse(fecha, "yyyy-MM-dd", new Date());
  const mes = getMonthName(getMonth(_fecha));
  return {
    dia: format(_fecha, "d"),
    mes,
    mesn: getMonth(_fecha) + 1,
    anio: format(_fecha, "yyyy"),
  };
};

export const msToTime = (s: any) => {
  const sec_num = parseInt(s, 10); // don't forget the second param
  let hours: any = Math.floor(sec_num / 3600);
  let minutes: any = Math.floor((sec_num - hours * 3600) / 60);
  let seconds: any = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

export const round = (value: number, decimals = 2) => {
  return Number(Math.round(Number(`${value}e${decimals}`)) + `e-${decimals}`);
};

export const responsiveWidth = (width: number) => {
  return Dimensions.get("window").width * width;
};

export const responsiveHeight = (height: number) => {
  return Dimensions.get("window").height * height;
};

export const obtenerMesNumerico = (mes: string) => {
  const months = [
    { mes: "Enero", mesNumerico: 1 },
    { mes: "Febrero", mesNumerico: 2 },
    { mes: "Marzo", mesNumerico: 3 },
    { mes: "Abril", mesNumerico: 4 },
    { mes: "Mayo", mesNumerico: 5 },
    { mes: "Junio", mesNumerico: 6 },
    { mes: "Julio", mesNumerico: 7 },
    { mes: "Agosto", mesNumerico: 8 },
    { mes: "Septiembre", mesNumerico: 9 },
    { mes: "Octubre", mesNumerico: 10 },
    { mes: "Noviembre", mesNumerico: 11 },
    { mes: "Diciembre", mesNumerico: 12 },
  ];
  const mesSeleccionado = find(months, (month) => month.mes === mes);
  if (mesSeleccionado) {
    return mesSeleccionado.mesNumerico;
  }
  return 0;
};

export const formatCurrency = (value: string) => {
  if (value === undefined || value === null) return "$0.00";
  const number = Number(value);
  const [integerPart, decimalPart] = number.toFixed(2).split(".");
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ",",
  );

  return `$${formattedIntegerPart}.${decimalPart}`;
};

export function isArrayAndNotEmpty(array: any[]) {
  return Array.isArray(array) && array.length > 0;
}

export const uriToBlob = async (uri: string) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
};

export const fechaLegible = (epoch: number): string => {
  return format(fromUnixTime(epoch), "yyyy-MM-dd");
};

export const fechaLegibleConHora = (epoch: number): string => {
  return format(fromUnixTime(epoch), "yyyy-MM-dd HH:mm:ss");
};

export const fechaAEpoch = (fecha: Date): number => {
  return getUnixTime(fecha);
};

export const ensureDirectoryExists = async (path: string) => {
  const dirInfo = await FileSystem.getInfoAsync(path);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(path, { intermediates: true });
  }
};

export function getStringDateByUnix(fecha: number) {
  return format(fecha * 1000, FORMATO_FECHA);
}

export const comprimirImagen = async (rutaArchivo: string) => {
  try {
    const imagenComprimida = await ImageCompress.compress(rutaArchivo, {
      quality: 0.8,
      maxWidth: 1024,
      maxHeight: 1024,
    });
    return imagenComprimida;
  } catch (error) {
    console.error("Error al comprimir imagen:", error);
    throw new Error("Error al comprimir imagen");
  }
};

export const obtenerParametrosUbicacion = () => {
  let watcher: Location.LocationSubscription | null = null;

  let precision: number | null = null;
  let latitud: number = 0;
  let longitud: number = 0;
  let hasReachedDesiredAccuracy: boolean = false;
  let isError: boolean = false;
  let error: string = "";

  const obtenerUbicacion = async () => {
    do {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        isError = true;
        error = "Se necesita permiso de ubicación para continuar.";
        return;
      }

      const watchLocation = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (location) => {
          const { accuracy, latitude, longitude } = location.coords;

          // Redondear precisión a 0 decimales
          precision = accuracy ? Math.round(accuracy) : null;
          latitud = latitude;
          longitud = longitude;

          // Si la precisión es menor o igual a 40 metros, detenemos el watcher
          if (accuracy && accuracy <= 40) {
            hasReachedDesiredAccuracy = true;
            if (watcher) {
              watcher.remove(); // Detenemos el proceso cuando la precisión es suficiente
              watcher = null; // Aseguramos que el watcher se limpie
            }
          }
        },
      );

      watcher = watchLocation;
    } while (!hasReachedDesiredAccuracy);
  };

  obtenerUbicacion();

  return { precision, latitud, longitud, isError, error };
};

export function redondear(number: number, decimalPlaces: number) {
  // return Number(Math.round(parseFloat(number + 'e' + decimalPlaces)) + 'e-' + decimalPlaces);
  // return Math.round(number * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);

  return (
    Math.ceil(number * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces)
  );
}

export function redondearDecimales(num: number, decimalPlaces: number) {
  //return Math.round(num * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
  return (
    Math.round(redondear(num * Math.pow(10, decimalPlaces), decimalPlaces)) /
    Math.pow(10, decimalPlaces)
  );
}

interface IMiUbicacion {
  latitude: number;
  longitude: number;
  precision: number | null;
}

export const obtenerMiUbicacion = async (): Promise<IMiUbicacion | null> => {
  // Solicitar permisos
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    toast.error(
      "Permiso denegado. Se necesita permiso de ubicación para continuar.",
    );
    return null;
  }

  // Obtener ubicación actual
  const location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.High,
  });

  const { accuracy, latitude, longitude } = location.coords;

  return {
    latitude,
    longitude,
    precision: accuracy ?? null,
  };
};

export const openGoogleMaps = (latitude: number, longitude: number) => {
  const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
  Linking.openURL(url).catch((err) =>
    console.error("Error al abrir Google Maps", err),
  );
};
