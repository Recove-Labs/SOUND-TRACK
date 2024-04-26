import styled from "styled-components";

import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Box = styled.div`
    background-color: #292524;
    border-radius: 24px;
    color: #000;
    max-height: 75vh;
    overflow: hidden;
    position: relative;

    .contents{
        position: absolute;
        padding: 7rem;
        display: flex;
        flex-direction: column;
        background-color: #00000055;
        width: 100%;
        height: 100%;
        color: #fff;
    }

    img{
        width: 100%;
        user-select: none;
    }

    input{
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 12px;
        outline: none;
        border: none;
        &:focus{
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`;

const ContactUs = () => {
    return (
        <>
            <Header />
            <Container style={{height: "80vh"}} className="my-7">
                <Box>
                    <div className="contents">
                        <h1 className="m-0 text-5xl">Contact Us</h1>
                        <IconField>
                            <InputIcon style={{transform:"translateY(-50%)", margin:"0"}}><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></InputIcon>
                            <InputText placeholder="Enter your email" />
                        </IconField>
                    </div>
                    <img src="./images/space.png" alt="space" />
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default ContactUs;