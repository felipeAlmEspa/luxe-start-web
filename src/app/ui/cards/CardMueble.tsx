import { IMueble } from "../../../../ts/models/IMueble";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

interface CardMuebleProps {
  mueble: IMueble;
}
export const CardMueble: React.FC<CardMuebleProps> = ({ mueble }) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src={mueble.img ?? ""}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">HeroUI</p>
          <p className="text-small text-default-500">heroui.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
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
  );
};
