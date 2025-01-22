import FeedInsta from "../components/FeedInsta";
import Hero from "../components/Hero";
import HeroQuemSomos from "../components/HeroQuemSomos";
import HeroWashes2025 from "../components/HeroWashesAnoAtual";

function Home() {
    return (
        <div className="">
            <Hero />
            <HeroQuemSomos />
            <HeroWashes2025 />
            <FeedInsta />
        </div>
    );
};

export default Home;