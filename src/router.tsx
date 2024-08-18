import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const IndexPages = lazy(() => import("./views/IndexPages"))
const Favorites = lazy(() => import("./views/Favorites"))
import Layout from "./layouts/Layout";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={
                        <Suspense fallback="Cargando...">
                            <IndexPages />
                        </Suspense>
                    } index />
                    <Route path="/favoritos" element={
                        <Suspense fallback="Cargando...">
                            <Favorites />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}