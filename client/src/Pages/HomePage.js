import HeroSectionA from "../Components/HeroSection";
import SpotLight from "../Components/SpotLight";
import LondonGuide from "../Components/Guide";
import NewsLetter from "../Components/NewsLetter";
import MainLayout from "../Layout/MainLayout";


export default function HomePage() {
    return (
        <MainLayout>
            <HeroSectionA/>
            <SpotLight/>
            <LondonGuide/>
            <NewsLetter/>
        </MainLayout>
    )
}