
const Hero = () => {
  return (
    // max-w-[1240px] mx-10 sm:mx-auto my-[15rem] py-12 px-16 sm:px-0
    // sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6
    <section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6 max-w-[1240px] mx-auto sm:my-48 my-20">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-7xl">Alberto Moreno.</h1>
      <h2 className="mt-1 sm:mt-3 text-3xl font-bold tracking-tight text-slate-400 sm:text-7xl ">Software Engineer.</h2>
      <p className="sm:mt-10 mt-6 max-w-sm leading-normal font-medium">
        I&apos;m a software engineer specialized on full-stack development. Currently, I&apos;m working as a QA Engineer, developing automated tests at <a className="text-[#3bba9c]" href="https://www.capgemini.com/">Capgemini</a>.
      </p>
      <div className="flex gap-4 mt-8">
        <button className="bg-[#3bba9c] hover:bg-[#0b8a6c] hover:text-white text-[#1a232e] font-semibold py-2 px-4 rounded-lg shadow-md shadow-black"><a href="#Projects">Projects</a></button>
        <button className="bg-transparent hover:bg-[#2a333e] text-[#3bba9c] font-semibold py-2 px-4 border border-[#3bba9c] rounded-lg"><a href="">LinkedIn</a></button>
      </div>
    </section>
  )
}

export default Hero