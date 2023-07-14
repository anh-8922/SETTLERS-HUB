import { useNavigate } from "react-router-dom";
import {HeroSectionC} from "../Components/HeroSection";
import MainLayout from "../Layout/MainLayout";
import ListCommunityPost from "../Features/CommunityPostsList";
import AddCommunitypost from '../Features/AddCommunityPost';
import {SpotlightNews} from "../Components/SpotLight";

import '../Style/page.css'

export default function HomePage() {
    const navigate = useNavigate()

    const handleAddPostPage = () => {
        navigate('/addcommunitypost')
    }
    return (
        <MainLayout>
            <HeroSectionC/>
            <div className="community-content">

                <div className="forum">
                    <button onClick={handleAddPostPage}>Add New Post</button>
                    <div className="communityRight">
                        <ListCommunityPost/>
                        <SpotlightNews/>
                    </div>
                    
                </div>
                
            </div>
            <AddCommunitypost/>
        </MainLayout>
    )
}