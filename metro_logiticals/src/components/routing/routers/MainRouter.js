import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import AppRouter from "./AppRouter";

function MainRouter() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<AppRouter />} />
            </Routes>
        </div>
    );
}

export default MainRouter;
