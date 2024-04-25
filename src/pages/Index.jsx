import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

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

const LinkButton = styled.div`
    color: ${props => props.color ? props.color : "#ec4899"};
    font-weight: bold;
    font-size: 20px;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    span{
       margin-top: 0.2rem;
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

const Post = styled.a`
    border-radius: 8px;
    padding: 2rem 2.5rem;
    background-color: rgba(255, 255, 255, .08);
    border: 1px solid rgba(255, 255, 255, .12);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: #fff;
`;

const BoxGray = styled.div`
    background-color: #18181b;
    padding: 7rem 0;
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

            <BoxGray>
                <Container className="py-8 text-center">
                    <h1 className="m-0 text-7xl">Creating a Blue Planet</h1>
                    <p className="text-2xl w-8 mx-auto">We are a project to record the past, to create the future. In order for our project to be organic, we need to create a sustainable planet, and for this we plant one tree for every music sold from us.</p>
                    <Link>
                        <LinkButton color="#10b981">
                            <span>Read More</span>
                            <FontAwesomeIcon className="text-lg" icon="fa-solid fa-arrow-right" />
                        </LinkButton>
                    </Link>
                </Container>
            </BoxGray>

            <Container className="py-8">
                <div className="flex align-items-center justify-content-between mb-3">
                    <h1 className="text-5xl">Resources</h1>
                    <Link className="text-2xl text-bold text-blue-500" to="/">View all<FontAwesomeIcon className="ml-2" icon="fa-solid fa-angle-right" /></Link>
                </div>

                <div className="grid mb-8">
                    <Post className="block col">
                        <h1 className="m-0 flex justify-content-between align-items-center">Why use music to express <FontAwesomeIcon className="text-3xl" icon="fa-solid fa-circle-right" /></h1>
                        <p className="text-bold text-xl mb-2 text-color-secondary">Everything has a sound except the passage of time, so why not represent the passage of time as a sound as well?</p>
                    </Post>  

                    <Post className="block col">
                        <h1 className="m-0 flex justify-content-between align-items-center">Creating a Blue Planet <FontAwesomeIcon className="text-3xl" icon="fa-solid fa-circle-right" /></h1>
                        <p className="text-bold text-xl mb-2 text-color-secondary">Why do people only care about using resources, but not about their carbon footprint? We wanted to solve this.</p>
                    </Post>

                    <Post className="block col">
                        <h1 className="m-0 flex justify-content-between align-items-center">About our project <FontAwesomeIcon className="text-3xl" icon="fa-solid fa-circle-right" /></h1>
                        <p className="text-bold text-xl mb-2 text-color-secondary">Our project is to help people care more about the environment and reduce carbon emissions through profit.</p>
                    </Post>
                </div>
            </Container>
            <Container className="pb-8">
                <Newsletter />
            </Container>
            <Footer />
        </>
    )
};

export default Index;