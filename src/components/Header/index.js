import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';


function Header() {


    const [burgerStatus, setBurgerStatus] = useState(false);

    const sections = ["Home", "About Us", "MemberShip", "RoadMap", "Team", "FAQ"]


    return (
        <Container>
            <DoubleContainer>

                <a>
                    <img width="80%" src="/images/Logo alpha_3.png" />
                </a>
                <Menu>
                    {sections && sections.map((section, index) => (
                        <a key={index} href="#">{section}</a>
                    ))}
                </Menu>
                <RightMenu>
                    {/* <a href="#">Shop</a>
                <a href="#">Tesla Account</a> */}
                    <CustomMenu onClick={() => setBurgerStatus(true)} />
                </RightMenu>
                <BurgerNav shutter={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() => setBurgerStatus(false)} />
                    </CloseWrapper>
                    {sections && sections.map((section, index) => (
                        <li>
                            <a key={index} href="#">{section}</a>
                        </li>
                    ))}

                </BurgerNav>
            </DoubleContainer>
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    padding: 20px 20px;
    background-color: rgba(17,4,24,0.3);
    // width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`
const DoubleContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    // width: 100vw;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex :1;
    justify-content: flex-end;
    
    a {
        font-width: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        color: white;
    }
    @media(max-width: 768px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    color: white;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: #270b3f;
    color: white;
    right: 0;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${(props) => props.shutter ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        width: 100%;
        padding: 15px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
        a {
            font-weight: 600;
            color: white;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`