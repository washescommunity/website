import { Link } from 'react-router-dom';
import { dadosEdicaoAtual } from '../data/dadosEdicaoAtual';

function HeroWashesAnoAtual() {
    return (
        <>
            <section id="heroQuemSomos" className="container mx-auto flex flex-col mt-8 mb-8 lg:my-24 lg:flex-row px-5">
                <div className="flex flex-col items-center lg:flex-row gap-7">
                    <div>
                        <img className="lg:max-w-md md:max-w-sm" src="./assets/banners/banner-hero-home-washes2024.png" alt="Ilustração de pessoas trabalhando com dados e gráficos" />
                        <div className='text-right pr-2'>
                            <p className="lg:text-7xl text-5xl text-[#6C757D] opacity-50 font-medium">WASHES</p>
                            <p className="lg:text-7xl text-5xl text-[#6C757D] opacity-50 font-light italic">{dadosEdicaoAtual.anoAtualDoEvento}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center mx-5 gap-7 lg:gap-8 lg:items-start lg:text-left">
                    <h1 className="text-[28px] lg:text-[32px] font-semibold text-[#0D6080]">WASHES {dadosEdicaoAtual.anoAtualDoEvento} </h1>
                    <p className="text-lg font-light text-[#2F2F2F] lg:text-[26px] leading-9 lg:text-justify">
                        O WASHES {dadosEdicaoAtual.anoAtualDoEvento}  será realizado no formato presencial nos dias {dadosEdicaoAtual.dataDaRealizacaoDoWASHES}  (datas sujeitas à mudanças). {dadosEdicaoAtual.edicaoDoCongresso}
                        </p>
                        <Link
                            to={`/washes-${dadosEdicaoAtual.anoAtualDoEvento}`}
                            className="px-4 py-2 flex justify-center bg-[#74C76B] hover:bg-white
                            text-base text-white hover:text-[#74C76B] hover:outline hover:outline-1 cursor-pointer
                            rounded transition-colors duration-300 lg:px-5 lg:py-3 lg:text-2xl"
                        >
                            Saiba mais sobre o WASHES {dadosEdicaoAtual.anoAtualDoEvento}!
                        </Link>
                    </div>
                </div>
            </section>
            <div className="flex lg:hidden w-full h-1 flex-row gap-3 justify-evenly">
                <div className="w-full h-1 bg-[#E72B78]"></div>
                <div className="w-full h-1 bg-[#36BCEE]"></div>
                <div className="w-full h-1 bg-[#66C75C]"></div>
            </div>
        </>
    );
}

export default HeroWashesAnoAtual;
