import { useNavigate } from "react-router-dom";
import {HeroSectionC} from "../Components/HeroSection";
import MainLayout from "../Layout/MainLayout";


export default function HomePage() {
    const navigate = useNavigate()

    const handleAddPostPage = () => {
        navigate('/addcommunitypost')
    }
    return (
        <MainLayout>
            <HeroSectionC/>
            <button onClick={handleAddPostPage}>Add New Post</button>
            Let test the page out
        </MainLayout>
    )
}