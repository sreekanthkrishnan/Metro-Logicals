import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SideBar() {
    return (
        <Container>
            <Top>
                <Logo>
                    <LogoLink to="#">
                        <img
                            src={require("../../../assets/images/company-logo.webp")}
                            alt="Logo"
                        />
                    </LogoLink>
                </Logo>
            </Top>
            <Center>
                <Menu to="#">
                    <i className="fa-solid fa-earth-americas"></i>
                </Menu>
                <Menu to="#">
                    <i className="fa-solid fa-wallet"></i>
                </Menu>
                <Menu to="#">
                    <i className="fa-solid fa-user-group"></i>
                </Menu>
                <Menu to="#">
                    <i className="fa-solid fa-toolbox"></i>
                </Menu>
            </Center>
            <Bottom>
                <Menu to="#">
                    <i className="fa-solid fa-gear"></i>
                </Menu>
            </Bottom>
        </Container>
    );
}

export default SideBar;
const Container = styled.div`
    width: 70px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #141c26;
    z-index: 999;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const Top = styled.div``;
const Center = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Bottom = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
`;
const LogoLink = styled(Link)`
    display: block;
    width: 40px;
    height: 40px;
    img {
        display: block;
        height: 100%;
        object-fit: cover;
    }
`;
const Menu = styled(Link)`
    width: 100%;
    padding: 20px 0;
    display: block;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    position: relative;
    i {
        font-size: 20px;
        color: #7f90a6;
        transition: all 0.3s;
        text-align: center;
    }
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: -1px;
        background-color: #fff;
        display: block;
        width: 5px;
        height: 0;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    &:hover {
        background-color: #020810;
        ::after {
            height: 100%;
        }
        i {
            color: #fff;
        }
    }
`;
