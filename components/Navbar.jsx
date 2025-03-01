import { IoSearchOutline } from "react-icons/io5";
import { FaArrowLeft , FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#1e1e1e] text-white px-4 py-2 shadow-md rounded">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-center">

      <div className="flex items-center justify-center text-sm text-center gap-2">
        <p className="text-gray-400"><FaArrowLeft /></p>
        <p><FaArrowRight /></p>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-center border-1 rounded-md border-gray-600 px-2 py-1 w-60">
        <p className="text-white"><IoSearchOutline /></p>
        <p>samitha-sandaruwan</p>
      </div>
      </div>

      <div className="flex space-x-6 text-sm">
        <Link href="/hero">
        <span className="cursor-pointer hover:text-gray-300">Home</span>
        </Link>
        <Link href="/about">
        <span className="cursor-pointer hover:text-gray-300">About</span>
        </Link>
        <Link href="/projects">
        <span className="cursor-pointer hover:text-gray-300">Projects</span>
        </Link>
        <Link href="/contact">
        <span className="cursor-pointer hover:text-gray-300">Contact</span>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
