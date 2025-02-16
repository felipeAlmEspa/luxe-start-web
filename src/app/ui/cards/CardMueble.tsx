import { IMueble } from "../../../../ts/models/IMueble";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  useDisclosure,
} from "@heroui/react";
import { ModalImagen } from "../modals/Modalmagen";

interface CardMuebleProps {
  mueble: IMueble;
}
export const CardMueble: React.FC<CardMuebleProps> = ({ mueble }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const verImagen = () => {
    onOpen();
  };
  return (
    <>
      <Card className="max-w-[500px] w-[320px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">
              {mueble.titulo ? mueble.titulo : "Mueble Luxe"}
            </p>
            <p className="text-small text-default-500">
              {mueble.etiqueta ? mueble.etiqueta : "Mueble Luxe"}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image
            alt="heroui logo"
            width={500}
            height={220}
            radius="sm"
            src={mueble.img ?? ""}
            onClick={() => verImagen()}
          />
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/heroui-inc/heroui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
      {isOpen && mueble.img && (
        <ModalImagen
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          imageUrl={mueble.img}
        />
      )}
    </>
  );
};
