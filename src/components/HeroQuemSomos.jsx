import { Link } from 'react-router-dom';

function HeroQuemSomos() {
    return (
        <>
            <section id="heroQuemSomos" className="container mx-auto w-full flex flex-col items-center justify-center mt-10 mb-8 lg:my-24 lg:flex-row px-5">
                <div className="flex flex-col gap-7 justify-center items-center lg:flex-row">
                    <div className="flex flex-col items-center text-center mx-5 gap-7 lg:gap-8 lg:items-start lg:text-left">
                        <h1 className="text-[28px] lg:text-[32px] font-semibold text-[#0D6080]">QUEM SOMOS?</h1>
                        <p className="text-lg font-light text-[#2F2F2F] lg:text-[26px] leading-9">
                            O WASHES é um workshop que aborda a interação entre fatores <strong className="font-bold">humanos</strong>, <strong className="font-bold">sociais</strong> e <strong className="font-bold">econômicos</strong> na <strong className="font-bold">Engenharia de Software</strong>, promovendo discussões sobre seu impacto no desenvolvimento e uso de software, bem como colaborações com a indústria.
                        </p>
                        <Link
                            to="/quem-somos" 
                            className="px-4 py-2 flex justify-center bg-[#36BCEE] hover:bg-white
                            text-base text-white hover:text-[#36BCEE] hover:outline hover:outline-1 cursor-pointer
                            rounded transition-colors duration-300 lg:px-5 lg:py-3 lg:text-2xl"
                        >
                            Saiba mais!
                        </Link>
                    </div>
                    <section className='flex justify-center'>
                        <img src="./assets/banners/banner-hero-home-quemSomos.png" alt="" 
                            className="lg:max-w-md md:max-w-sm px-5"
                        />
                    </section>
                    {/* Ajustando o tamanho e estilo da section para diferentes tamanhos de tela */}
                </div>
            </section>
            {/* Divisor de cores visível apenas em telas pequenas */}
            <div className="flex lg:hidden w-full h-1 flex-row gap-3 justify-evenly">
                <div className="w-full h-1 bg-[#E72B78]"></div>
                <div className="w-full h-1 bg-[#36BCEE]"></div>
                <div className="w-full h-1 bg-[#66C75C]"></div>
            </div>
        </>
    );
}

export default HeroQuemSomos;
