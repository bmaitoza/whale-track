import styled from 'styled-components';
import React, { useState } from 'react';

const HomeSectionWrapper = styled.section`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.bgImage});
    background-position: ${props => props.imagePosition};
    background-size: cover;
    background-attachment: fixed;
`;

const LandingTextWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10%;
`;

const HeadingText = styled.p`
    text-decoration: none;
    color: black;
    font-size: ${props => props.headingSize}; /* Use props to set the font size for the subheading */
    font-family: arial, sans-serif;
    font-weight: bold;
`;

const SubheadingText = styled.p`
    text-decoration: none;
    color: black;
    font-size: ${props => props.subheadingSize}; /* Use props to set the font size for the subheading */
    font-family: arial, sans-serif;
`;

const ImageWrapper = styled.img`
    width: 25%;
    height: auto;
    margin: 0%
`;

const Button = styled.button`
    padding: 10px 20px;
    color: ${({ isHovered }) => (isHovered ? 'grey' : 'black')};
    background-color: ${({ isHovered }) => (isHovered ? 'black' : 'transparent')};
    font-size: 1.2rem;
    font-weight: bold;
    border: solid;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
`;

const LandingPage = ({ width, bgImage, heading, subheading1, height, headingSize, subheadingSize, imagePosition, showButton, logoImage, showLogo }) => {

    return (
        <HomeSectionWrapper bgImage={bgImage} height={height} imagePosition={imagePosition} width={width}>
            <LandingTextWrapper>
            <HeadingText headingSize={headingSize}>{heading}</HeadingText>
                <br />
                <SubheadingText subheadingSize={subheadingSize}>{subheading1}</SubheadingText>
                <br />
                {showLogo && <ImageWrapper src={logoImage} />}
                {showButton && (
                    <>
                        <Button>Login</Button>
                    </>
                )}
            </LandingTextWrapper>
        </HomeSectionWrapper>
    );
};

export default LandingPage;