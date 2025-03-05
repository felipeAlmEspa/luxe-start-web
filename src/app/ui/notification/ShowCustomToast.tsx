import { toast } from "sonner";
import { CheckCircle, X, XCircle } from "lucide-react";

export const ShowCustomToast = (
  type: "success" | "error",
  message: string,
  duration: number
) => {
  toast.custom(
    (t) => (
      <div className="flex justify-between bg-red-500">
        <div className="bg-green-100 w-[5px] h-full"></div>
        <div className="w-full">
          {type === "success" && (
            <CheckCircle className="text-green-500 w-6 h-6" />
          )}
          {type === "error" && <XCircle className="text-red-500 w-6 h-6" />}
        </div>
        <div className="text-sm text-black">{message}</div>
        <button
          onClick={() => toast.dismiss(t)}
          className="ml-auto text-gray-500 hover:text-gray-800"
        >
          <X size={24} color="red" />
        </button>
      </div>
    ),
    { duration: duration }
  );
};
