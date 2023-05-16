import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import Input from "./Input/Input";

export default function Navbar() {
  return (
    <div className="bg-blue-500 text-white p-3 flex-1">
      <div className="container flex justify-between">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:space-x-2 md:space-x-4">
          <div>Eteration</div>
          <Input prefix={<BiSearchAlt />} placeholder="Search" />
        </div>

        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:space-x-2 md:space-x-4">
          <div className="flex items-center sm:space-x-2">
            <BsBag />
            <div>118.123TL</div>
          </div>
          <div className="flex items-center sm:space-x-2">
            <AiOutlineUser />
            <div>Kerem</div>
          </div>
        </div>
      </div>
    </div>
  );
}
