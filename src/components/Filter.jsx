import './Filter.css'
import FilterTag from './FilterTag'

export default function Filter(props) {

    const setFilter = { tagsList: props.filterUseState.tagsList, setFilterTags: props.filterUseState.setFilterTags }

    function clearFilter() {
        props.filterUseState.setFilterTags([])
    }

    return <div className={`filter ${props.filterUseState.tagsList.length === 0 ? "invisible" : ""}`}>
        <div className="tags">
            {props.filterUseState.tagsList.map((tagName, index) => <FilterTag key={index} data={tagName} filterUseState={setFilter} />)}
        </div>
        <button className="clearFilter" onClick={clearFilter}>
            Clear
        </button>
    </div>
}