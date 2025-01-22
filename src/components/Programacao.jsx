import { IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import PropTypes from 'prop-types';
import {  useState, useRef, useEffect  } from "react";

export function Programacao({data,horarioDeInicio, apresentador, sessao, programacao}){
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const openDropDown  = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
  }}, [isOpen]);

  return(
    <section>
      <div className="cursor-pointer w-full bg-[#2A5D82] border border-[#2A5D82] rounded-xl flex text-white" onClick={openDropDown}>
        <div className="bg-[#003358] px-4 rounded-s-xl justify-center flex flex-col gap-2 items-center lg:text-[28px] md:text-2xl text-xl p-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <span className="text-center lg:text-xl md:text-xl text-lg"> {data}</span>
          <span className="text-center"> {horarioDeInicio} </span>
        </div>
        <div className="flex justify-between w-full items-center lg:px-5 px-3">
          <div className="flex flex-col gap-1 lg:text-2xl md:text-2xl text-">
            <span>{apresentador}</span>
            <span>{sessao}</span>
          </div>
          <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? (
              <IoRemoveCircleOutline className="lg:text-4xl text-3xl"/>
            ): (
              <IoAddCircleOutline className="lg:text-4xl text-3xl"/>
            )
            }
          </div>
        </div>
      </div>
      <div 
        ref={contentRef}
        className={`shadow-lg rounded-b-xl transition-all overflow-hidden origin-top`} 
        style={{ transition: 'max-height 0.5s ease-in-out' }}
        >
        <table className="m-2 p-10">
          <thead>
            <tr className="lg:text-2xl md:text-xl text-lg">
              <th className="border-black border px-8 py-4">Hórario</th>
              <th className="border-black border text-left pl-2 w-full">Apresentação</th>
            </tr>
          </thead>
            {programacao.map((programacao, index) => (
            <tbody key={index} className="lg:text-xl md:text-lg text-base font-semibold">
              <tr>
                <td 
                  className="border-black border text-center" 
                  dangerouslySetInnerHTML={{ __html: programacao.horarioApresentacao }}
                ></td>
                <td 
                  className="border-black border text-left p-2"
                  dangerouslySetInnerHTML={{ __html: programacao.temaApresentacao }}
                ></td>
              </tr>
            </tbody>
          ))}
          
        </table>
      </div>
    </section>
  )
}

Programacao.propTypes ={
  data: PropTypes.string.isRequired,
  horarioDeInicio: PropTypes.string.isRequired,
  apresentador: PropTypes.string.isRequired,
  sessao: PropTypes.string.isRequired,
  programacao: PropTypes.string.isRequired,
}