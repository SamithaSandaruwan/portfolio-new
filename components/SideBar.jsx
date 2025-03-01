const Sidebar = () => {
  return (
    <div className=" w-[250px] bg-[#252526] text-white p-4 h-screen">
      <h2 className="text-sm font-semibold mb-4">EXPLORER</h2>

      <div className="space-y-2 text-sm">
        <div className="cursor-pointer hover:text-gray-300">📁 My Projects</div>
        <div className="pl-4">
          <div className="cursor-pointer hover:text-gray-300">📁 index.js</div>
          <div className="cursor-pointer hover:text-gray-300">📁 Navbar.js</div>
          <div className="cursor-pointer hover:text-gray-300">
            📄 Sidebar.js
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Sidebar;
