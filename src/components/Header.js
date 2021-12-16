import React from "react"
import logo from "../assets/enge_logo_menor.png"
import { LogoImg, HeaderContainer } from "./styled"

export default function Header() {
    return(
        <HeaderContainer>
            <LogoImg src={logo} alt="Logo Engebio" ></LogoImg>
        </HeaderContainer>
    )
}