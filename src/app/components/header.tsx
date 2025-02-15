import { Divider } from "../ui/Divider";

export const MyHeader = () => {
  return (
    <nav className="bg-white">
      <div className="flex justify-between pl-3 pr-3">
        <div className="text-black grid grid-cols-3 gap-2">
          <small>Whatsapp: 099999999</small>
          <small>tuemailaqui@gmail.com</small>
        </div>
        <div className="text-black">
          <small>Cuneca - Ecuador</small>
        </div>
      </div>
      <Divider />
      <div className="w-screen">
        <div className="flex">
          <div className="w-1/3 text-center"></div>
          <div className="w-1/3 text-center">
            <h1 className="text-3xl font-serif">MUEBLERÍA LUXE</h1>
          </div>
          <div className="w-1/3 text-center"></div>
        </div>
      </div>
    </nav>
  );
};
