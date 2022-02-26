import './Tag.css'

export default function Tag(props) {
    function addTagToFilter() {
        if (!props.filterUseState.tagsList.includes(props.data)) props.filterUseState.setFilterTags(oldList => [...oldList, props.data])
    }

    return <div className='tag' onClick={addTagToFilter}>{props.data}</div>
}