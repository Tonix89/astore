import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./layout.style";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <S.Main>
                <Outlet />
            </S.Main>
            <Footer />
        </>
    )
}