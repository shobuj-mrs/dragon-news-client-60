import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCurosel from '../BrandCurosel/BrandCurosel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2 rounded' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button className='mb-2 rounded' variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>

            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 rounded'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded'><FaYoutube /> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded'><FaTwitch /> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCurosel></BrandCurosel>
            </div>

        </div>
    );
};

export default RightSideNav;