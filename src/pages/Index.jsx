import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Join = styled.div`
    display: inline-block;
    color: #fff;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 100px;
    transition: 0.5s;
    background: linear-gradient(45deg, #ec4899, #7c3aed);
    font-size: 16px;
    a{
        color: #fff;
    }
`;

const HeroTitle = styled.div`
    font-size: 5.5rem;
    font-weight: 900;
    background: linear-gradient(45deg, #ec4899, #7c3aed);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
`;

const Post = styled.div`
    border-radius: 8px;
    padding: 2rem 2.5rem;
    background-color: rgba(255, 255, 255, .08);
    border: 1px solid rgba(255, 255, 255, .12);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

const Index = () => {
    return(
        <>
            <Header />
            <Container style={{height: "80vh"}} className="text-bold flex justify-content-center align-items-center">
                <div className="text-center">
                    <Link to="/">
                    </Link>
                    <HeroTitle>We represent</HeroTitle>
                    <HeroTitle>the present with music.</HeroTitle>
                    <h1 className="mt-2 mb-8">Monopolize one music release per month.</h1>
                    <Join>View collections</Join>
                </div>
            </Container>
            <Container className="py-8">
                <div className="flex align-items-center justify-content-between mb-3">
                    <h1 className="text-5xl">Resources</h1>
                    <Link className="text-2xl text-bold text-blue-500" to="/">View all<FontAwesomeIcon className="ml-2" icon="fa-solid fa-angle-right" /></Link>
                </div>

                <div className="grid mb-8">
                    <Post className="col">
                        <h1 className="m-0 flex justify-content-between align-items-center">Build <FontAwesomeIcon className="text-3xl" icon="fa-solid fa-circle-right" /></h1>
                        <p className="text-bold text-xl mb-2 text-color-secondary">Scale on the most widely used Ethereum scaling ecosystem for faster and more powerful dApps.</p>
                    </Post>
                    <Post className="col">
                        <h1 className="m-0 flex justify-content-between align-items-center">Stake <FontAwesomeIcon className="text-3xl" icon="fa-solid fa-circle-right" /></h1>
                        <p className="text-bold text-xl mb-2 text-color-secondary">Scale on the most widely used Ethereum scaling ecosystem for faster and more powerful dApps.</p>
                    </Post>
                    <Post className="col">
                        <h1 className="m-0 flex justify-content-between align-items-center">Use Polygon <FontAwesomeIcon className="text-3xl" icon="fa-solid fa-circle-right" /></h1>
                        <p className="text-bold text-xl mb-2 text-color-secondary">Scale on the most widely used Ethereum scaling ecosystem for faster and more powerful dApps.</p>
                    </Post>
                </div>

            </Container>
            <Footer />
        </>
    )
};

export default Index;