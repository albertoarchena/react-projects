const Navbar = () => {
  return (
    <div className="shadow-sm shadow-[#1d2336]">
      <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto bg-transparent">
        <div>
          <h1 className="w-full text-3xl font-bold text-cyan-300">{`{ Alberto Moreno }`}</h1>
        </div>
        <div className="flex justify-between gap-20 items-center ">
          <ul className="flex">
            <li className="p-4">
              <a className="hover:text-cyan-300" href="#">Projects</a></li>
            <li className="p-4">
              <a className="hover:text-cyan-300" href="#">Experience</a>
            </li>
            <li className="p-4">
              <a className="hover:text-cyan-300" href="#">Skills</a>
            </li>
            <li className="p-4">
              <a className="hover:text-cyan-300" href="#">About</a>
            </li>
            <li className="p-4">
              <a className="hover:text-cyan-300" href="#">Contact</a>
            </li>
          </ul>
          <div>
            <button className="bg-transparent hover:bg-[#1d2336] text-cyan-300 font-semibold py-2 px-4 border border-cyan-300 rounded-lg">Resume</button>
          </div>
        </div> 
      </nav>
    </div>
    
  );
};

export default Navbar;
