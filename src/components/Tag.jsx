import { useContext } from 'react'
import { FiltersContext } from '../App'
import './Tag.css'

export default function Tag(props) {

    const useFilterContext = useContext(FiltersContext)

    function addTagToFilter() {
        if (!useFilterContext.filterTags.includes(props.data)) useFilterContext.setFilterTags(oldList => [...oldList, props.data])
    }

    return <div className='tag' onClick={addTagToFilter}>{props.data}</div>
}