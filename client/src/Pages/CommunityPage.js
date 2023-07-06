import { useNavigate } from "react-router-dom";
import {HeroSectionC} from "../Components/HeroSection";
import MainLayout from "../Layout/MainLayout";
import ListCommunityPost from "../Features/CommunityPostsList";
import AddCommunitypost from '../Features/AddCommunityPost';

export default function HomePage() {
    const navigate = useNavigate()

    const handleAddPostPage = () => {
        navigate('/addcommunitypost')
    }
    return (
        <MainLayout>
            <HeroSectionC/>
            <button onClick={handleAddPostPage}>Add New Post</button>
            <ListCommunityPost/>
            <AddCommunitypost/>
        </MainLayout>
    )
}