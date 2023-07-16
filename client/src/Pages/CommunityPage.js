import { useNavigate } from "react-router-dom";
import {HeroSectionC} from "../Components/HeroSection";
import MainLayout from "../Layout/MainLayout";
import ListCommunityPost from "../Features/CommunityPostsList";
import AddCommunitypost from '../Features/AddCommunityPost';
import {SpotlightNews} from "../Components/SpotLight";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../Style/page.css'

export default function CommunityPage() {
    // const navigate = useNavigate()

    // const handleAddPostPage = () => {
    //     navigate('/addcommunitypost')
    // }
    const [show, setShow] = useState(false);

    return (
        <MainLayout>
            <HeroSectionC/>
            <div className="community-content">

                <div className="forum">
                    <button  onClick={() => setShow(true)}>Add New Post</button>
                    <Modal show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">Add new post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><AddCommunitypost/></Modal.Body>
                        <Modal.Footer>
                        test
                        </Modal.Footer>
                    </Modal>
                    <div className="communityRight">
                        <ListCommunityPost/>
                        <SpotlightNews/>
                    </div>
                    
                </div>
                
            </div>
            
        </MainLayout>
    )
}

//<AddCommunitypost/>