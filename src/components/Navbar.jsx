import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="bg-blue-500 text-white p-3">
      <div className="container flex justify-between">
        <div className="flex items-center space-x-4">
          <div>Eteration</div>
          <input className="" onChange={() => null} placeholder="Search" />
        </div>

        <div className="flex items-center space-x-4">
          <BsBag />
          <div>118.123TL</div>
          <AiOutlineUser />
        </div>
      </div>
    </div>
  );
}
