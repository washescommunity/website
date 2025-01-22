import CustomizedTimeline from "../components/CustomizedTimeline";

const QuemSomos = () => {
  return (
    <section>
      <div className="w-full lg:h-[700px]  h-[450px] flex flex-col items-center justify-center relative overflow-hidden">
        <img
          className="lg:w-[950px] w-[512px] absolute lg:top-[-25%] lg:left-[52%] md:top-[-25%] md:left-[52%] top-[-15%] left-[23%] opacity-15"
          src="./assets/imgs/logo_washes.svg"
          alt="Logo"
        />
        <div className="flex flex-col items-center justify-center mx-5 gap-16 lg:gap-32">
          <div className="max-w-screen-xl w-full flex flex-col items-center justify-between mx-5 text-center">
            <h2 className="text-2xl mb-3 text-gray-500 font-semibold lg:hidden">
              WASHES
            </h2>
            <h1 className="text-2xl font-bold text-zinc-800 mx-5 lg:text-6xl">
              Um ambiente para a{" "}
              <span className="text-[#E72B78]">comunidade brasileira</span>{" "}
              discutir <span className="text-[#E72B78]">desafios</span> que
              influenciam o{" "}
              <span className="text-[#E72B78]">desenvolvimento e uso </span> de
              software, além de fomentar{" "}
              <span className="text-[#E72B78]">
                {" "}
                colaborações com a indústria
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden w-full h-1 flex-row gap-3 justify-evenly mt-8">
        <div className="w-full h-1 bg-[#E72B78]"></div>
        <div className="w-full h-1 bg-[#36BCEE]"></div>
        <div className="w-full h-1 bg-[#66C75C]"></div>
      </div>

      <div className="container mx-auto my-10 flex flex-col gap-7 justify-center items-center lg:flex-row lg:gap-20">
        <div className="flex flex-col items-center text-left mx-5 gap-7 lg:gap-8 lg:items-start lg:text-left">
          <h1 className="text-[28px] lg:text-[32px] font-semibold text-[#0D6080]">
            Sobre
          </h1>
          <p className="text-lg font-light text-[#2F2F2F] lg:text-[26px] leading-9">
            O Workshop sobre{" "}
            <strong className="font-bold">
              Aspectos Sociais, Humanos e Econômicos de Software (WASHES)
            </strong>{" "}
            foca na interação entre algumas questões críticas que exercem
            influência sobre a engenharia e qualidade de software.
          </p>
          <p className="text-lg font-light text-[#2F2F2F] lg:text-[26px] leading-9">
            <strong className="font-bold">Fatores humanos</strong> e{" "}
            <strong className="font-bold">aspectos sociais</strong> em qualidade
            de software têm sido discutidos por pesquisadores e profissionais da
            indústria, dado que métodos, técnicas e ferramentas afetam (e são
            afetados) pelos stakeholders e suas interações, impactando as
            atividades do desenvolvimento de software.
          </p>
          <p className="text-lg font-light text-[#2F2F2F] lg:text-[26px] leading-9">
            Da mesma forma, o software é uma{" "}
            <strong className="font-bold">
              fonte de valor para os negócios de diversas organizações
            </strong>
            , sejam elas fornecedoras ou adquirentes, representando um elemento
            crucial para o seu sucesso econômico. Este workshop aborda aspectos
            que impactam diretamente várias áreas da computação, como engenharia
            de software, ecossistemas de software, negócios, gestão de projetos,
            informática médica, computação aplicada à educação e ações sociais,
            entre outros.
          </p>
        </div>
      </div>

      <div className="container mx-auto my-10 flex flex-col gap-7 lg:gap-20 px-5">
        <h1 className="text-[28px] lg:text-[32px] font-semibold text-[#0D6080]">
          Nossa história
        </h1>
        <div className="text-left gap-7 lg:gap-8 lg:items-start lg:text-left">
          <CustomizedTimeline />
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
