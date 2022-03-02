import './FilterTag.css'
import iconRemove from '../images/icon-remove.svg'
import { useContext } from 'react'
import { FiltersContext } from '../App'

export default function FilterTag(props) {

    const useFilterContext = useContext(FiltersContext)

    function removeTagFromFilter() {
        useFilterContext.setFilterTags(useFilterContext.filterTags.filter(tag => tag !== props.data))
    }

    return <div className="filterTag">
        <div className="filterTagName">{props.data}</div>
        <div className="iconRemove" onClick={removeTagFromFilter}><img src={iconRemove} alt="" /></div>
    </div>
}