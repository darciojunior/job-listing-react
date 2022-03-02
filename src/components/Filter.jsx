import { useContext } from 'react'
import { FiltersContext } from '../App'
import './Filter.css'
import FilterTag from './FilterTag'

export default function Filter(props) {

    const useFilterContext = useContext(FiltersContext)

    function clearFilter() {
        useFilterContext.setFilterTags([])
    }

    return <div className={`filter${useFilterContext.filterTags.length === 0 ? " invisible" : ""}`}>
        <div className="tags">
            {useFilterContext.filterTags.map((tagName, index) => <FilterTag key={index} data={tagName} />)}
        </div>
        <button className="clearFilter" onClick={clearFilter}>
            Clear
        </button>
    </div>
}