import { toast } from "sonner";
import { CheckCircle, CircleAlert, X } from "lucide-react";
import { Button } from "@/ui/components/button";

interface PropsShowCustomToast {
  type: "success" | "error";
  title: string;
  descripcion?: string;
  duration?: number;
}

export const ShowCustomToast = (data: PropsShowCustomToast) => {
  toast.custom(
    (t) => (
      <div className="w-full h-auto flex justify-center pt-20">
        <div className="flex gap-4 items-center bg-white rounded-md border w-80 p-3 relative">
          <div className="max-w-[10%]">
            {data.type === "success" && (
              <div className="bg-green-500 w-2 h-full absolute left-0 top-0 rounded-tl-md rounded-bl-md"></div>
            )}
            {data.type === "error" && (
              <div className="bg-red-500 w-2 h-full absolute left-0 top-0 rounded-tl-md rounded-bl-md"></div>
            )}
          </div>
          {/* Icono */}
          <div className="flex-1 max-w-[10px]">
            {data.type === "success" && (
              <CheckCircle className="text-green-500 w-4 h-4" />
            )}

            {data.type === "error" && (
              <CircleAlert className="text-red-500 w-4 h-4" />
            )}
          </div>

          {/* Mensaje centrado */}
          <div className="flex-col w-full">
            <small className="justify-center text-sm text-black">
              {data.title}
            </small>
            {data.descripcion && (
              <small className="text-sm text-black">{data.descripcion}</small>
            )}
          </div>

          {/* Botón de cierre */}
          <div className="max-w-[10%]">
            <Button
              className=" right-0"
              variant="ghost"
              size="icon"
              onClick={() => toast.dismiss(t)}
            >
              <X size={12} color="black" />
            </Button>
          </div>
        </div>
      </div>
    ),
    { duration: data.duration }
  );
};
