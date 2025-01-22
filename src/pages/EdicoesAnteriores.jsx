import  { CardEdicoesAnteriores }from "../components/CardEdicoesAnteriores";
import  { dadosEdicoesAnteriores } from "../data/dadosEdicoesAnteriores"

const EdicoesAnteriores = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-row flex-wrap px-4 justify-evenly">
      {dadosEdicoesAnteriores.map((dadosEventos, index) => (
        <CardEdicoesAnteriores
          key={index}
          imagem={dadosEventos.imagem}
          creditosDaImagem={dadosEventos.creditosDaImagem}
          edicao={dadosEventos.edicao}
          local={dadosEventos.local}
          anoDaEdicao={dadosEventos.anoDaEdicao}
          linkWebsite={dadosEventos.linkWebsite}
          linkAnalEvento={dadosEventos.linkAnalEvento}
        />
      ))}
    </div>
  );
};

export default EdicoesAnteriores;
