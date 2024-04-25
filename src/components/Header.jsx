import Container from "./Container";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageStyle = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 100%;
    padding: 2rem 0;
    background-color: #0a0a0a;
    color: #fff;

    .cta{
        color: #fff;
        padding: 0.85rem 1.7rem;
        border-radius: 7px;
        transition: 0.5s;
        background: linear-gradient(45deg, #7c3aed, #ec4899);
    }
`;

const Header = () => {
    return (
        <PageStyle>
            <Container className="flex justify-content-between align-items-center">
                <Link to="/" className="text-color font-bold text-3xl">
                    SOUND TRACK <span className="text-color text-base">by Recove Labs</span>
                </Link>
                <div className="flex gap-6 align-items-center">
                    <Link to="/" className="text-color text-xl">Home</Link>
                    <Link to="/about" className="text-color text-xl">About</Link>
                    <Link to="/ecosystem" className="text-color text-xl">Ecosystem</Link>
                    <Link to="/collections" className="cta text-xl">Collections</Link>
                </div>
            </Container>
        </PageStyle>
    );
};

export default Header;