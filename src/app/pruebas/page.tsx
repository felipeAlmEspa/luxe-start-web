"use client";
import { useState } from "react";
import { CheckCircle, CircleAlert, X } from "lucide-react";
import { Button } from "@/ui/components/button";

const Pruebas = () => {
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("este es un mensaje de prueba");
  return (
    <div className="w-full h-auto flex justify-center pt-20">
      <div className="flex items-center bg-white rounded-md border w-80 p-3 relative">
        <div className="max-w-[10%]">
          {type === "success" && (
            <div className="bg-green-500 w-2 h-full absolute left-0 top-0 rounded-tl-md rounded-bl-md"></div>
          )}
          {type === "error" && (
            <div className="bg-red-500 w-2 h-full absolute left-0 top-0 rounded-tl-md rounded-bl-md"></div>
          )}
        </div>
        {/* Icono */}
        <div className="flex-1 max-w-[10px]">
          {type === "success" && (
            <CheckCircle className="text-green-500 w-4 h-4" />
          )}

          {type === "error" && <CircleAlert className="text-red-500 w-4 h-4" />}
        </div>

        {/* Mensaje centrado */}
        <div className="flex-col pl-2 w-full">
          <small className="text-sm text-black">{message}</small>
          <small className="text-sm text-black">{message}</small>
        </div>

        {/* Botón de cierre */}
        <Button variant="ghost" size="icon">
          <X size={12} color="black" />
        </Button>
      </div>
    </div>
  );
};
export default Pruebas;

{
  /* <div className="mt-20 pl-2 pr-2">
<div className="flex ">
  <div className="flex bg-green-500 w-[10px] h-[auto] rounded-tl-md rounded-bl-md"></div>
  <div className="flex bg-blue-200 w-full p-3 rounded-md">
    <div className="flex bg-red-500 w-[8%] justify-start">
      {type === "success" && (
        <CheckCircle className=" text-green-500 w-5 h-5" />
      )}
      {type === "error" && <XCircle className="text-red-500 w-6 h-6" />}
    </div>
    <span className="text-sm text-black">{message}</span>
    <Button
      // onClick={() => toast.dismiss(t)}
      className="w-[5%] bg-red-100"
      variant="light"
    >
      <X size={24} color="red" className="text-green-500 w-6 h-6" />
    </Button>
  </div>
</div>
</div> */
}
