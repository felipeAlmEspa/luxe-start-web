"use client";
import { useState } from "react";
import { CheckCircle, X, XCircle } from "lucide-react";

const Pruebas = () => {
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("este es un mensaje de prueba");
  return (
    <div className="flex justify-between items-center bg-white rounded-xl p-4">
      <div className="bg-green-500 w-[5%] h-full"></div>
      <div className="w-[10%]">
        {type === "success" && (
          <CheckCircle className="text-green-500 w-6 h-6" />
        )}
        {type === "error" && <XCircle className="text-red-500 w-6 h-6" />}
      </div>
      <span className="text-sm text-black">{message}</span>
      <button
        // onClick={() => toast.dismiss(t)}
        className="ml-auto text-gray-500 hover:text-gray-800"
      >
        <X size={24} color="red" />
      </button>
    </div>
  );
};
export default Pruebas;
