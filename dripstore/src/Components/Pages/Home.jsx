import React from "react";
import Header from "../Header/Header"
import Conteudo from "../Conteudo/Conteudo"
import Footer from "../Footer/Footer"
import CardList from "./CardList"

export default function Home() {
    return (
        <>
            <Header></Header>
            <Conteudo></Conteudo>
            <Footer />

            <CardList></CardList>
        </>
    )
}
