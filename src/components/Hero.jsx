import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-scroll";

function Hero() {
    return (
        <>
            <section className="w-full h-96 flex gap-2 flex-row items-center justify-center lg:h-dvh lg:bg-banner-hero lg:bg-no-repeat lg:bg-cover lg:bg-center
            sm:bg-banner-hero sm:bg-no-repeat sm:bg-cover sm:bg-center relative overflow-hidden">
                <img className="w-[512px] sm:hidden absolute top-[-10%] left-[25%] opacity-15" src="/assets/imgs/logo_washes.svg" alt="" />
                <div className="flex flex-col items-center justify-center mx-5 gap-16 lg:gap-32">
                    <div className="max-w-screen-xl w-full flex flex-col items-center justify-between mx-5 text-center">
                        <h2 className="text-2xl mb-3 text-gray-600 font-semibold lg:hidden">
                            WASHES
                        </h2>
                        <h1 className="text-2xl font-bold text-zinc-800 mx-5 lg:text-6xl">
                            Workshop sobre Aspectos Sociais, Humanos e Econômicos de Software
                        </h1>
                        <h2 className="hidden lg:flex text-2xl mt-3 text-gray-500 font-semibold lg:text-6xl lg:mt-12">
                            WASHES
                        </h2>
                    </div>

                    <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400">
                        <Link
                            to="heroQuemSomos"
                            smooth={true}
                            duration={2000}
                            className="text font-semibold text-white hover:cursor-pointer"
                        >
                            <IoIosArrowRoundDown size={32} />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="flex sm:hidden w-full h-1 flex-row gap-3 justify-evenly mt-8">
                <div className="w-full h-1 bg-[#E72B78]"></div>
                <div className="w-full h-1 bg-[#36BCEE]"></div>
                <div className="w-full h-1 bg-[#66C75C]"></div>
            </div>
        </>
    );
}

export default Hero;
