import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <Container>
            <LeftSection>
                <Title>Dashboard</Title>
            </LeftSection>
            <RightSection>
                <SearchSection>
                    <SearchIcon>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </SearchIcon>{" "}
                    <input type="text" placeholder="Search" />
                </SearchSection>
                <Menu to="#">
                    <i className="fa-solid fa-message"></i>
                </Menu>
                <Menu to="#">
                    <i className="fa-solid fa-bell"></i>
                </Menu>
                <ProfileSection to="#">
                    <ProfilePic>
                        <img
                            src={require("../../../assets/images/profile-pic.jpeg")}
                            alt="Profile pic"
                        />
                    </ProfilePic>
                    <Right>
                        <ProfileName>Sreekanth Krishnan</ProfileName>
                        <ProfileEmail>
                            sreekanthkrishnan215@gmail.com
                        </ProfileEmail>
                    </Right>
                </ProfileSection>
            </RightSection>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #f6f7f8;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    padding-left: 90px;
`;
const LeftSection = styled.div``;
const RightSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const Title = styled.h2`
    font-size: 22px;
`;
const SearchSection = styled.div`
    border: 1px solid #dde0e1;
    width: 200px;
    height: 35px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 50px;
    i {
        color: #dde0e1;
        font-size: 16px;
    }
    input {
        width: 100%;
        height: 100%;
        display: block;
        color: #797b7b;
        font-weight: 600;
        ::placeholder {
            font-weight: 600;
            color: #dde0e1;
        }
    }
`;
const Menu = styled(Link)`
    margin-right: 30px;
    i {
        color: #546375;
        font-size: 20px;
    }
`;
const ProfileSection = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`;
const SearchIcon = styled.span`
    margin: 0 10px;
    display: block;
`;
const ProfilePic = styled.span`
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    img {
        display: block;
        width: 100%;
    }
`;
const Right = styled.div`
    max-width: 150px;
`;
const ProfileName = styled.h3`
    font-size: 14px;
    font-weight: 600;
    color: #1d2024;
`;
const ProfileEmail = styled.p`
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #353b44;
    font-weight: 400;
`;
