import React from "react";
import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 7rem;
    background: linear-gradient(45deg, #ec4899DD, #7c3aedDD);
    border-radius: 24px;
    margin-bottom: 5rem;
    
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

const Newsletter = () => {
    return (
        <Box>
            <p className="m-0 text-lg text-color">We're updating new music every month.</p>
            <h1 className="mt-1 mb-0 text-7xl">Get our newsletter</h1>
            <h1 className="mt-0 mb-5 text-xl text-color">Stay in the know and pre-empt the music!</h1>
            <IconField>
                <InputIcon style={{transform:"translateY(-50%)", margin:"0"}}><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></InputIcon>
                <InputText placeholder="Enter your email" />
            </IconField>
        </Box>
    );
};

export default Newsletter;