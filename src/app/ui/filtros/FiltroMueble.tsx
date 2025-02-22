import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  SharedSelection,
} from "@heroui/react";
import { useCallback } from "react";
import { IClaveValor } from "../../../../ts/models/IClaveValor";
import { X } from "lucide-react";

interface FiltroMuebleProps {
  onSelect: (item: string | null) => void;
  valor: string | null;
  data: IClaveValor[];
  placeholder?: string;
  borderColor?: string;
  title?: string;
}
export const FiltroMueble: React.FC<FiltroMuebleProps> = ({
  onSelect,
  valor,
  data,
  placeholder = "Seleccionar una opción",
  borderColor = "border-gray-500",
  title = "",
}) => {
  const selectedValue = useCallback(
    (keys: SharedSelection) => {
      if (keys instanceof Set) {
        const selectedKey = [...keys][0];
        if (selectedKey.toString() === "_TODOS") {
          onSelect(null);
          return;
        }

        onSelect(selectedKey.toString());
      }
    },
    [onSelect]
  );
  const limpiarSelect = useCallback(() => onSelect(null), [onSelect]);
  return (
    <div className="flex flex-col min-w-[150px]">
      <small>{title}</small>
      <div className="flex flex-row items-center justify-between gap-1">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              color="default"
              className={`border border-1 border-gray-400 uppercase text-[11px] text-gray-800 h-[30px]`}
            >
              {valor ?? placeholder}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="waSingle selection example"
            selectedKeys={valor ?? undefined}
            selectionMode="single"
            variant={"bordered"}
            onSelectionChange={selectedValue}
          >
            <DropdownSection>
              <DropdownItem key={"_TODOS"}>
                <div className="flex justify-between">
                  <small>Todos</small>
                </div>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              {data.map((item) => (
                <DropdownItem key={item.valor}>
                  <div className="flex justify-between">
                    <small className="uppercase">{item.valor}</small>
                  </div>
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        {valor && (
          <Button
            isIconOnly
            aria-label="Like"
            color="default"
            size="sm"
            className="w-6 h-6 p-1"
            onPress={limpiarSelect}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
