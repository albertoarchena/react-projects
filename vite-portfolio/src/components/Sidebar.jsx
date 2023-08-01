import { AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div>
        <div className='hidden 2xl:flex flex-col justify-start items-start '>
            <div className="v-line" />
            {/* Social Icons */}
            <div className="flex fixed top-[75%] ml-2 z-10 bg-[#1a232e]">
                
                <ul className="">
                    <li className="p-2 hover:ml-2">
                        <a className='' href="linkedin"><AiFillLinkedin size={30} fill='#3bba9c' /></a>
                    </li>
                    <li className="p-2 hover:ml-2">
                        <a href="github"><AiOutlineGithub size={30} fill='#3bba9c' /></a>
                    </li>
                    <li className="p-2 hover:ml-2">
                        <a href="twitter"><AiOutlineTwitter size={30} fill='#3bba9c' /></a>
                    </li>
                    <li className="p-2 hover:ml-2">
                        <a href="instagram"><AiOutlineInstagram size={30} fill='#3bba9c' /></a>
                    </li>
                </ul>  
            </div>
        </div>
        <div className='hidden 2xl:flex flex-col justify-start items-end '>
            <div className="v-line-2" />
            <p className='px-8 fixed top-[75%] rotate-90 text-[#3bba9c] mr-[-7.7rem] bg-[#1a232e]'><a className='font-mono hover:text-white hover:font-normal' href='#'>albertoarchenaomg@gmail.com</a></p>
        </div>
    </div>
  )
}

export default Sidebar