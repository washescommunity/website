import { useState, useRef, useEffect  } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from 'prop-types';

export function ChamadaDeTrabalhos({titulo, conteudo}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const openDropDown = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
  }}, [isOpen]);

  return(
    <section>
      <div className={`w-full px-4 py-3 flex flex-row items-center justify-between shadow-md cursor-pointer
        ${isOpen ? "rounded-t-[10px]" : "rounded-[10px]" }`} 
        onClick={openDropDown}>
        <h2 className="lg:text-2xl text-lg font-semibold">{titulo}</h2>
        <IoIosArrowDown className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}/>
      </div>
      <div className={`bg-white px-6 rounded-b-[10px] shadow-md w-full transition-all ease-in-out overflow-hidden origin-top`}
           style={{ transition: 'max-height 0.5s ease-in-out'}}
           ref={contentRef}
        >
        <div
          className="py-4 lg:text-lg text-base sm:text-justify"
          dangerouslySetInnerHTML={{ __html: conteudo }}
        />
      </div>
    </section>
  )
}

ChamadaDeTrabalhos.propTypes ={
  titulo: PropTypes.string.isRequired,
  conteudo: PropTypes.string.isRequired,
}