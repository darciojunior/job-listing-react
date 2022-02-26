import './JobContainer.css'
import logoImg from '../images/photosnap.svg'
import JobInfo from './JobInfo'
import Tag from './Tag'

export default function JobContainer(props) {
    const data = props.data
    const setFilter = {tagsList: props.filterUseState.filterTags, setFilterTags: props.filterUseState.setFilterTags}

    function isNew() {
        if (data.new) return <p>NEW!</p>
    }

    function isFeatured() {
        if (data.featured) return <p>FEATURED</p>
    }

    function loadLanguagesTags() {
        if (data.languages.length > 0) return data.languages.map((language, index) => <Tag key={index} data={language} filterUseState={setFilter} />)
    }

    function loadToolsTags() {
        if (data.tools.length > 0) return data.tools.map((tool, index) => <Tag key={index} data={tool} filterUseState={setFilter} />)
    }

    return <div className='jobContainer'>
        <img src={logoImg} alt="" className='logo' />
        <div className="job-description-area">
            <div className="company-name-area">
                <div className='companyName'>{data.company}</div>
                <div className="newTag">{isNew()}</div>
                <div className="featuredTag">{isFeatured()}</div>
            </div>
            <div className='position'>{data.position}</div>
            <div className="job-info-area">
                <JobInfo data={data.postedAt} />
                <JobInfo data='·' strong={true} />
                <JobInfo data={data.contract} />
                <JobInfo data='·' strong={true} />
                <JobInfo data={data.location} />
            </div>
        </div>
        <div className="tags">
            <Tag data={data.role} filterUseState={setFilter} />
            <Tag data={data.level} filterUseState={setFilter} />
            {loadLanguagesTags()}
            {loadToolsTags()}
        </div>
    </div>
}