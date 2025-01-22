import { dadosTopicoDeInteresse } from '../data/dadosTopicosDeInteresse';


export function listaTopicos (anoAtual) {

  const topicoDeInteresseDoAno = dadosTopicoDeInteresse[anoAtual] || []; 

  return(
    <section>
      <ul className="list-disc list-inside">
        {topicoDeInteresseDoAno.map((topicos , index) => (
          <li
            key={index}
            className="lg:text-xl md:text-lg text-base text-[#2f2f2f] mb-3 font-semibold lg:text-left text-justify"
          >
            {topicos}
          </li>
        ))}
      </ul>
    </section>
  )
}