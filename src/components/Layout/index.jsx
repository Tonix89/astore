import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./layout.style"

export default function Layout() {
    return (
        <>
            <Header/>
            <S.Main></S.Main>
            <Footer/>
        </>
    )
}