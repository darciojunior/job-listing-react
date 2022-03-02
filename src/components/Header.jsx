import './Header.css'
import React from "react"
import headerBG from '../images/bg-header-desktop.svg'
import Filter from './Filter'

export default function Header(props) {

    return <header className="header">
        <img src={headerBG} className="headerBG" alt="" />
        <Filter />
    </header>
}