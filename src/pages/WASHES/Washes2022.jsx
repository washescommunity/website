import { useState, useRef, useEffect } from "react";
import Card from "../../components/Card";
import { SlArrowDown } from "react-icons/sl";
import { BannerWASHES } from "../../components/BannerWASHES";
import { TopicoDeInteresse } from "../../components/topicoDeInteresse";
import { ChamadaDeTrabalhos } from "../../components/ChamadaDeTrabalhos";
import { Programacao } from "../../components/Programacao";
import { dadosChamadaDeTrabalho } from "../../data/dadosChamadaDeTrabalhos";
import { dadosProgramacao } from "../../data/dadosProgramacao";
import { dadosComiteDiretivo } from "../../data/dadosComiteDiretivo";
import { dadosCoordenadores } from "../../data/dadosCoordenadores";
import { dadosComitePrograma } from "../../data/dadosComitePrograma";

const Washes2022 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Controle do dropdown
  const [anoAtual] = useState(2022); // Controle do ano atual
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Alterna entre abrir e fechar
  };

  useEffect(() => {
    if (isDropdownOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isDropdownOpen]);

  const programacaoDoAno = dadosProgramacao[anoAtual] || []; // Filtra a programação do ano atual
  const coordenadoresDoAno = dadosCoordenadores[anoAtual] || []; // Filtra os coordenadores do ano atual
  const comiteDiretivo = dadosComiteDiretivo[anoAtual] || []; // Filtra os membros do comitê diretivo do ano atual
  const chamadaDeTrabalhosDoAno = dadosChamadaDeTrabalho[anoAtual] || []; // Filtra as chamadas de trabalho do ano atual
  const comiteProgramaDoAno = dadosComitePrograma[anoAtual] || []; // Filtra os membros do comitê de programa do ano atual

  return (
    <section>
      <BannerWASHES
        anoAtual={anoAtual}
        creditosDaImagem="Foto de Caroline Cagnin no Pexels"
      />

      <div className="container px-5 mx-auto text-[#2f2f2f] flex flex-col lg:gap-5 gap-2 my-20">
        <h1 className="font-bold text-[28px] lg:text-[32px]">Programação</h1>
        {programacaoDoAno.length > 0 ? (
          programacaoDoAno.map((dados, index) => (
            <Programacao
              key={index}
              data={dados.data}
              horarioDeInicio={dados.horarioDeInicio}
              apresentador={dados.apresentador}
              sessao={dados.sessao}
              programacao={dados.programacao}
            />
            ))) : (
                <h1 className="lg:text-3xl text-2xl"> Em breve </h1>
            )}
      </div>

      <TopicoDeInteresse 
        anoAtual={anoAtual}
      />

      <div className="container px-5 my-16 mx-auto py-2 flex flex-col gap-5 text-[#2f2f2f]">
        <h1 className="font-bold text-[28px] lg:text-[32px]">Chamada de Trabalhos</h1>
        {chamadaDeTrabalhosDoAno.map((dados, index) => (
          <ChamadaDeTrabalhos
            key={index}
            titulo={dados.titulo}
            conteudo={dados.conteudo}
          />
        ))}
      </div>

      <div className="container mx-auto py-10">
        {/* Membros Permanentes */}
        <h1 className="text-center text-[28px] lg:text-[32px] font-bold mb-8">Comitê Diretivo - Membros Permanentes</h1>
        <div className="flex flex-wrap justify-around gap-4 mb-10">
          {comiteDiretivo.map((member, index) => (
            <Card
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              university={member.university}
              memberType={member.memberType}
              linkedinUrl={member.linkedinUrl}
              lattesUrl={member.lattesUrl}
            />
          ))}
        </div>

        {/* Coordenação por Ano */}
        <h2 className="text-center text-[28px] lg:text-[32px] font-bold mb-8">
        Comitê Diretivo - Coordenação {anoAtual}
        </h2>
        <div className="flex flex-wrap justify-center gap-20 mb-10">
          {coordenadoresDoAno.map((coordinator, index) => (
            <Card
              key={index}
              imgSrc={coordinator.imgSrc}
              name={coordinator.name}
              university={coordinator.university}
              memberType={coordinator.memberType}
              linkedinUrl={coordinator.linkedinUrl}
              lattesUrl={coordinator.lattesUrl}
            />
          ))}
        </div>

        {/* Dropdown Comitê de Programa */}
        <div className="mt-8 text-center">
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <h2 className="text-[28px] lg:text-[32px] font-bold mx-2">Comitê de Programa</h2>
            <div
              className={`transition-transform duration-500 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <SlArrowDown />
            </div>
          </div>

          {/* Transição suave do conteúdo do dropdown */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden`}
          >
            <div
              ref={contentRef}
              style={{ transition: "max-height 0.5s ease-in-out" }}
            >
              {/* Layout que quebra em duas colunas */}
              <div className="flex flex-col md:flex-row justify-between px-4 py-4 space-y-8 md:space-y-0 md:space-x-8">
                {Object.entries(comiteProgramaDoAno).map(([region, members], index) => (
                  <div key={index} className="w-full md:w-1/2">
                    <h3 className="font-bold mb-4 text-lg">{region}</h3>
                    <ul className="space-y-2">
                      {members.map((member, idx) => (
                        <li key={idx}>
                          {member.name} - {member.university}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Washes2022;