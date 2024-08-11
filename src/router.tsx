import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPages from "./views/IndexPages";
import Favorites from "./views/Favorites";
import Layout from "./layouts/Layout";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPages />} index />
                    <Route path="/favoritos" element={<Favorites />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}