import styled from "styled-components";
import Container from "./Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Box = styled.div`
    border-top: 5px solid #1c1917;
    background-color: #000;

    a{
        font-size: 20px;
        color: #a8a29e;
        font-weight: 500;
    }
`;

const Footer = () => {
    return (
        <Box>
            <Container className="py-8 grid">
                <div className="col-6">
                    <h1 className="m-0">SOUND TRACK</h1>
                    <p className="m-0 text-color text-base">by Recove Labs</p>
                    <p className="mt-5 text-color-secondary">© 2024 SOUND TRACK by Recove Labs.<br />All rights reserved.</p>
                </div>
                <div className="col-6">
                    <h1 className="text-5xl m-0">We represent the present with music.</h1>
                    <div className="grid mt-6">
                        <div className="col-6 flex flex flex-column gap-3">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/about">Carbon neutral</Link>
                            <Link to="/contact-us">Contact Us</Link>
                        </div>
                        <div className="col-6 flex flex flex-column gap-3">
                            <a href="/" className="flex gap-2">X <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" className="text-sm" /></a>
                            <a href="/" className="flex gap-2">Discord <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" className="text-sm" /></a>
                            <a href="/" className="flex gap-2">Collections <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" className="text-sm" /></a>
                            <a href="/" className="flex gap-2">Resources <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" className="text-sm" /></a>
                        </div>
                    </div>
                </div>
            </Container>
        </Box>
        
    );
};

export default Footer;