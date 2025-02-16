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

interface FiltroMuebleProps {
  onSelect: (item: string) => void;
  valor: string | null;
  data: IClaveValor[];
  placeholder?: string;
  borderColor?: string;
}
export const FiltroMueble: React.FC<FiltroMuebleProps> = ({
  onSelect,
  valor,
  data,
  placeholder = "Seleccionar una opción",
  borderColor = "border-gray-500",
}) => {
  const selectedValue = useCallback(
    (keys: SharedSelection) => {
      if (keys instanceof Set) {
        const selectedKey = [...keys][0];
        onSelect(selectedKey.toString());
      }
    },
    [onSelect]
  );
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            color="default"
            className={`border ${borderColor}`}
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
            <DropdownItem key={"Todos"}>
              <div className="flex justify-between">
                <small>Todos</small>
              </div>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            {data.map((item) => (
              <DropdownItem key={item.valor}>
                <div className="flex justify-between">
                  <small>{item.valor}</small>
                </div>
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
