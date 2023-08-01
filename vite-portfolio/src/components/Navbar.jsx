import { useState, useEffect } from "react";
import { BiMenuAltRight, BiX } from 'react-icons/bi'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [navResponsive, setNavResponsive] = useState(false);

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

  const handleClick = () => setNavResponsive(!navResponsive);

  // #0d1326
  //bg-[#1a232e]

  return (
    <div className={`${isScrolled ? "sticky top-0 bg-transparent backdrop-filter backdrop-blur-md shadow-lg" : "bg-transparent"} duration-500 transition-all z-50`}>
      <nav className={`flex justify-between items-center max-w-[1240px] lg:mx-auto mx-4  ${ isScrolled ? "h-16" : "h-24"} transition-all duration-500`}>
        <div className="">
          <a href="/">
            <img 
                src="/logo.svg"
                alt="logo"
                className={`cursor-pointer ${isScrolled ? "h-[40px] " : "h-[45px]  "} transition-all duration-500`}
              />
          </a> 
        </div>
        <div className="hidden md:flex justify-between gap-4 items-center ">
          <ul className="flex">
            <li className="p-4">
              <a className="hover:text-white focus:text-white" href="/Projects">Projects</a></li>
            <li className="p-4">
              <a className="hover:text-white focus:text-white" href="/Experiece">Experience</a>
            </li>
            <li className="p-4">
              <a className="hover:text-white focus:text-white" href="/Skills">Skills</a>
            </li>
            <li className="p-4">
              <a className="hover:text-white focus:text-white" href="/About">About</a>
            </li>
            <li className="p-4">
              <a className="hover:text-white focus:text-white" href="/Contact">Contact</a>
            </li>
          </ul>
          <div>
            <button className="bg-transparent hover:bg-[#2a333e] text-[#3bba9c] font-semibold py-2 px-4 border border-[#3bba9c] rounded-lg">Resume</button>
          </div>
        </div> 
        {/* menu hamburguesa */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!navResponsive ? <BiMenuAltRight size={30}/> : <BiX size={30}/>}
        </div>

        {/* menu responsive */}
        <ul className={!navResponsive ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#1a232e] flex flex-col justify-center items-center"}>
          <li className="py-8 text-4xl">
            <a className="focus:text-white" href="/Projects">Projects</a></li>
          <li className="py-8 text-4xl">
            <a className="focus:text-white" href="/Experiece">Experience</a>
          </li>
          <li className="py-8 text-4xl">
            <a className="focus:text-white" href="/Skills">Skills</a>
          </li>
          <li className="py-8 text-4xl">
            <a className="focus:text-white" href="/About">About</a>
          </li>
          <li className="py-8 text-4xl">
            <a className="focus:text-white" href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Navbar;
