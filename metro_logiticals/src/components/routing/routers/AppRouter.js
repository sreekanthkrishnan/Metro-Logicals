import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "../../includes/general/Header";
import SideBar from "../../includes/general/SideBar";
import MainDashboard from "../../screens/authendicated_dashboards/MainDashboard";

function AppRouter() {
    return (
        <Container>
            {" "}
            <Header />
            <SideBar />
            <Routes>
                <Route path="/" element={<MainDashboard />} />
            </Routes>
        </Container>
    );
}

export default AppRouter;
const Container = styled.div`
    position: relative;
    padding-top: 70px;
    padding-left: 70px;
`;
