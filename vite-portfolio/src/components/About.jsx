const About = () => {
  return (
    <section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6 max-w-[1240px] mx-auto sm:my-48 my-20">
        {/* titulo seccion */}
        <div className="flex justify-center">
            <h1 className="font-bold text-4xl sm:text-6xl text-slate-200 underline underline-offset-8 decoration-[#3bba9c]">
                About me.
            </h1>
        </div>   
        <div className="flex pt-24">
            <div className="bg-[#3bba9c] p-3 rounded-xl z-10">
                <img 
                    src="/picture.jpg"
                    alt="picture"
                    className="h-[300px] rounded-sm"
                /> 
            </div>
            <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-600 p-20">
            
                <p>Hello! My name is Alberto, I studied Computer Science at Catholic University of Murcia (UCAM).My interest in web development started back in 2017 when I decided to create a website for League of Legends news and builds. That taught me some HTML and CSS skills.</p>
                <p className="mt-4">Nowadays I have the privilege of working at Capgemini ADCenter Spain. My job here is to develop Automated Testing Scripts for checking websites are working correctly. The actual technologie I use is Robotframework (Python).</p>
            </div>
        </div> 
    </section>
  )
}

export default About