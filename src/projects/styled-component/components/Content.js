import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

// const Title = styled.h1`
//     color: #aaecf0;
//     animation: 2s ${rotate} linear infinite;
// `

const Title = styled.h1`
    color: #1B7AB4;
    animation: 3s ${fadeIn} ease-in;
    
`

const SubTitle = styled(Title)`
    font-size: 12px;
    align-self: center;
    
`;

const ParagraphTitle = styled(SubTitle)`
    color: grey;
    animation: 3s ${rotate} ease-in;
`;

const ReversedTitle = props =>
    <ParagraphTitle {...props} children={props.children.split('').reverse()} />


const Section = styled.div`
    background-color: #aac9f0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border:  1px solid black;
    border-radius: 15px;
    margin:10px;
    padding:10px;
`



const Content = ({ nu }) => {
    return (
        <Section>
            <Title>🔆 Section {nu} 🐣</Title>
            <SubTitle>I am a subtitle</SubTitle>
            <Button text='me first' primary />
            <Button text='me second' />
            <Icon border='solid 6px red' statusColor={'steady'} />
            <Icon status='in-progress' />
            <ParagraphTitle>🔆</ParagraphTitle>
            <ParagraphTitle as={ReversedTitle} >I am a paragraph title</ParagraphTitle>
        </Section>
    )
}

export default Content
