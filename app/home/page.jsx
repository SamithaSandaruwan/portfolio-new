import Navbar from "@/components/Navbar";
import Sidebar from "@/components/SideBar";
import Hero from "../hero/page";


export default function Home() {
  return (
        <div className="flex-grow bg-[#1e1e1e] text-white">
          <Hero/>
        </div>
  );
}
