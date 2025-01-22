import { useState, useRef, useEffect  } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import {listaTopicos} from "./listaTopicosDeInteresse"
import PropTypes from 'prop-types';

export function TopicoDeInteresse({anoAtual}) {

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const openDropDown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
  }}, [isOpen]);

  return (
    <section className="mt-10">
      <div className="container px-5 mx-auto flex flex-col gap-5">
        <h1 className="text-[28px] lg:text-[32px] font-bold text-[#2f2f2f]">Tópicos de Interesse</h1>
        <p className="lg:text-2xl text-lg  text-[#2f2f2f] text-justify">
          {/* Descrição sobre os tópicos do WASHES  */}
          Os tópicos do WASHES envolvem trabalhos de pesquisa diretamente relacionados aos aspectos sociais, humanos e econômicos de software e suas interseções e influências nas mais diversas áreas da Computação, não sendo restrito aos tópicos a seguir:
        </p>

        <div className="flex flex-col items-center">
          <div className="cursor-pointer transition-all" onClick={openDropDown}>
            <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
              <RiArrowDownWideFill size={35} />
            </div>
          </div>

          <div
            ref={contentRef}
            className="transition-all duration-500 ease-in-out overflow-hidden max-h-0 pt-3"
            style={{ transition: 'max-height 0.5s ease-in-out' }}
          >
            {listaTopicos(anoAtual)}
          </div>
        </div>
      </div>
    </section>
  );
}

TopicoDeInteresse.propTypes = {
  anoAtual: PropTypes.string.isRequired,
}