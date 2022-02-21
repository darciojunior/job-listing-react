import './Header.css'
import React from "react"
import headerBG from '../images/bg-header-desktop.svg'

export default function Header() {
    return <header className="header">
        <img src={headerBG} className="headerBG" alt="" />
    </header>
}