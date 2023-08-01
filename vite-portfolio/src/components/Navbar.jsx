import { useState, useEffect } from "react";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0){
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [])

  // #0d1326

  return (
    <div className={`${isScrolled ? "sticky top-0 bg-[#1a232e] bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-sm shadow-[#1d2336]" : "bg-transparent"} duration-1000 transition-all`}>
      <nav className={`flex justify-between items-center max-w-[1240px] mx-auto ${ isScrolled ? "h-16" : "h-24"} transition-all duration-500`}>
        <div>
          <h1 className="w-full text-3xl font-bold text-cyan-300">{`{ Alberto Moreno }`}</h1>
        </div>
        <div className="flex justify-between gap-6 items-center ">
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
