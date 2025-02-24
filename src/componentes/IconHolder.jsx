
  import { useState } from "react";

const IconHolder = ({ iconSrc, href = "#", isMail = false }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    if (isMail) {
      e.preventDefault(); 
      const email = "lucagrangeiro@gmail.com"; 

      
      navigator.clipboard.writeText(email).then(() => {
        setShowModal(true); 
       
        window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`, "_blank");

        setTimeout(() => {
          setShowModal(false);
        }, 12000);
      });
    }
  };

  return (
    <>
      <a
        href={isMail ? "#" : href}
        target="_blank"
        rel="noopener noreferrer"
        className=" border border-[#5a5a5a] p-3 bg-[#282828] rounded-lg hover:bg-[#3a3a3a] transition flex items-center justify-center"
        onClick={handleClick}
      >
        <img src={iconSrc} alt="icon" className="w-6 h-6" />
      </a>

      
      {showModal && (
        <div className=" border border-[#5a5a5a] fixed bottom-5 right-5 bg-[#1e1e1e] text-white p-4 rounded-lg shadow-lg">
          📩 The developer email has been copied to your clipboard.
        </div>
      )}
    </>
  );
};

export default IconHolder;

  