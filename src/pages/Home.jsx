import React from "react"
import Intro from "../components/Intro"
import Featured from "../components/Featured"
import Quotes from "../components/Quotes"
import Category from "../components/Category"

export default function Home() {
    document.title = "Home"
    return (
        <>
            <Intro />
            <Category />
            <Featured />
            <Quotes />
        </>
    );
}