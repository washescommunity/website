import { FaInstagram,  FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function FeedInsta() {
    return (
        <>
            <section className="w-full h-fit py-3.5 px-5 flex flex-col items-center justify-center gap-2 lg:px-2 lg:mt-24 mt-10 mb-10">
                <p className="text-[28px] lg:text-[32px] text-center text-[#003358]">
                    Acompanhe-nos nas{" "}
                    <span className="font-bold">Redes Sociais!</span>
                </p>
                <div className="container w-full flex flex-wrap gap-4 justify-evenly text-[#2f2f2f] font-bold sm:text-xl text-lg lg:m-14 md:m-7 m-10">
                    <a href="https://x.com/washescommunity" 
                        target="_blank" 
                        className="lg:border-none border border-[#2f2f2f3b] flex items-center justify-center gap-2 lg:hover:bg-[#dadadabe] py-2 px-4 sm:w-auto w-full rounded-full duration-300 transition ease-in-out hover:-translate-y-1 hover:scale-100 "> <FaXTwitter size={25}/> <p>@WASHESCOMMUNITY</p></a>
                    <a href="https://www.instagram.com/washescommunity" 
                        target="_blank" 
                        className="lg:border-none border border-[#2f2f2f3b] flex items-center justify-center gap-2 lg:hover:bg-[#dadadabe] py-2 px-4 sm:w-auto w-full rounded-full duration-300 transition ease-in-out hover:-translate-y-1 hover:scale-100"> <FaInstagram size={25}/> <p> @WASHESCOMMUNITY</p></a>
                    <a href="https://www.linkedin.com/in/washescommunity/" 
                        target="_blank" 
                        className="lg:border-none border border-[#2f2f2f3b] flex items-center justify-center gap-2 lg:hover:bg-[#dadadabe] py-2 px-4 sm:w-auto w-full rounded-full duration-300 transition ease-in-out hover:-translate-y-1 hover:scale-100"> <FaLinkedinIn size={25}/> <p> @WASHESCOMMUNITY</p></a>                    
                </div>
                <div className="w-full h-fit flex flex-row gap-2 lg:h-96">
                    <div
                    className="w-full h-32 bg-feed-insta-1 bg-no-repeat bg-cover bg-center rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:w-1/2 lg:h-96 lg:rounded-2xl"
                    />
                    <div className="w-full h-32 bg-feed-insta-2 bg-no-repeat bg-cover bg-center rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:w-1/2 lg:h-96 lg:rounded-2xl"
                    />
                </div>

                <div className="w-full h-44 bg-feed-insta-3 bg-no-repeat bg-cover bg-center rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:hidden"/>

                <div className="w-full h-fit flex flex-row gap-2 lg:h-96">
                    <div className="hidden bg-feed-insta-3 bg-no-repeat bg-cover bg-center rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:block lg:w-1/3 lg:h-96"
                    />
                    <div className="w-1/2 h-52 bg-feed-insta-4 bg-no-repeat bg-cover bg-center rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:w-1/3 lg:h-96 lg:rounded-2xl"
                    />
                    <div className="w-1/2 h-52 bg-feed-insta-5 bg-no-repeat bg-cover bg-center rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:w-1/3 lg:h-96 lg:rounded-2xl"
                    />
                </div>
            </section>
        </>
    );
}

export default FeedInsta;