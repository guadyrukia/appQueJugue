import { Routes, Route } from "react-router-dom";
import { Home } from "../views/Home/Home";

export const Paths = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}