import './Header.css'
import React from "react"
import headerBG from '../images/bg-header-desktop.svg'
import Filter from './Filter'

export default function Header(props) {

    const setFilter = {tagsList: props.filterUseState.filterTags, setFilterTags: props.filterUseState.setFilterTags}

    return <header className="header">
        <img src={headerBG} className="headerBG" alt="" />
        <Filter filterUseState={setFilter}/>
    </header>
}