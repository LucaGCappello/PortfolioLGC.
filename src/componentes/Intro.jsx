import IconHolder from "./IconHolder";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 px-6 md:px-12">
      <div className="border border-[#5a5a5a] bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
        
        
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-white">Luca Cappello</h1>

          {/* Icons Row */}
          <div className="flex gap-2">
                         <IconHolder iconSrc="/gh.svg" href="https://github.com" />
                         <IconHolder iconSrc="/lk.svg" href="https://www.linkedin.com/in/luca-gcappello/" />
                         <IconHolder iconSrc="/mail.svg" isMail={true} />
                         <IconHolder iconSrc="/cv.svg" href="#" />
          </div>
        </div>

        <p className="text-gray-600 text-sm">Lisbon, Portugal.</p>

        <p className="text-gray-300 text-sm text-left mt-4">
          I'm a 25-year-old Full-Stack Web Developer, continuously refining my skills for over a year.
          I specialize in building professional websites and developing innovative solutions to enhance user experiences.
        </p>
      </div>
    </div>
  );
};

export default Intro;



// <div className="flex gap-4">
//                         <IconHolder iconSrc="../../public/gh.svg" href="https://github.com" />
//                         <IconHolder iconSrc="../../public/lk.svg" href="mailto:you@example.com" />
//                         <IconHolder iconSrc="../../public/mail.svg" href="https://instagram.com" />
//                         <IconHolder iconSrc="../../public/cv.svg" href="https://linkedin.com" />
//                  </div></div>