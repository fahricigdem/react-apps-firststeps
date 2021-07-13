import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${({ primary }) => primary ? '#C44E35' : '#6897B4'};
    color:#E7E7E7;
    font-size:1.2rem;
    display: flex;
    justify-content: center;
    padding:5px 15px;
    margin: 5px;
    border-radius: 15px;
    flex-direction: column;
    border-color:grey;
    
    &:hover{
        background-color: ${({ primary }) => primary ? "rgb(255, 0, 0, 0.5)" : "rgb(0, 0, 255, 0.5)"};
    }
    
    .subtext {
        font-size: 12px;
    }
`

const Button = ({ text, primary }) => {
    return (
        <StyledButton primary={primary}>
            {text}
            <p className="subtext">sub text</p>
        </StyledButton>
    )
}

export default Button
