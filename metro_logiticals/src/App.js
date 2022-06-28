import "./App.css";
import "./assets/css/style.css";

import { Routes, Route, Link } from "react-router-dom";

import MainRouter from "./components/routing/routers/MainRouter";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<MainRouter />} />
            </Routes>
        </div>
    );
}

export default App;
