import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    width: 100%;
    height: 90px;

`;

const MainList = styled.div`
    height: 90px;
    float: center;
`;

const NavLinks = styled.ul`
    width: 95%; 
    height: 100%;
    display: flex;
    justify-content: space-evenly; // Distribute items evenly along the main axis 
    align-items: center;
    list-style-type: none;
`;

const NavItem = styled.li`
    a {
        text-decoration: none;
        color: grey;
        font-size: 1.4rem;
        font-weight: bold;
        font-family: tahoma, sans-serif;
        &:hover {
            color: ${({ affix }) => (affix ? 'grey' : 'black')};
        }
    }
`;

const LogoImage = styled.img`
    width: 7vw;
    height: auto;`
// Functional component for the navbar
const Navbar = () => {
    // State variables for controlling the affix behavior
    const [affix, setAffix] = useState(false);

    // Function to handle scrolling and update the affix state
    const handleScroll = () => {
        if (window.scrollY > 150) {
            setAffix(true);
        } else {
            setAffix(false);
        }
    };

    // Effect hook to add and remove scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavbarWrapper affix={affix}>
            <div className="container">
                <MainList>
                    <NavLinks>
                        <NavItem>
                            <a href="/"><LogoImage src={'whale-logo.jpg'} alt = "Home" /></a>
                        </NavItem>
                        <NavItem>
                            <a href="login">Sign In</a>
                        </NavItem>
                        <NavItem>
                            <a href="whale-track">Whale Tracker</a>
                        </NavItem>       
                    </NavLinks>
                </MainList>
            </div>
        </NavbarWrapper>
    );
};


export default Navbar;



