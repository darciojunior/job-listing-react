import './FilterTag.css'
import iconRemove from '../images/icon-remove.svg'

export default function FilterTag(props) {
    function removeTagFromFilter() {
        props.filterUseState.setFilterTags(props.filterUseState.tagsList.filter(tag => tag !== props.data))
    }

    return <div className="filterTag">
        <div className="filterTagName">{props.data}</div>
        <div className="iconRemove" onClick={removeTagFromFilter}><img src={iconRemove} alt="" /></div>
    </div>
}