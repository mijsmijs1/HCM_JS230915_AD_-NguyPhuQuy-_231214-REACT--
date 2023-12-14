import {Route, Routes, BrowserRouter} from "react-router-dom";
import Homepage from "../pages/Homepage.jsx";
export default function RouterIndex() {
return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    </Routes>
    </BrowserRouter>
)
}