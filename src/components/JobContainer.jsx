import './JobContainer.css'
import JobInfo from './JobInfo'
import Tag from './Tag'

export default function JobContainer(props) {
    const data = props.data

    function loadLanguagesTags() {
        if (data.languages.length > 0) return data.languages.map((language, index) => <Tag key={index} data={language} />)
    }

    function loadToolsTags() {
        if (data.tools.length > 0) return data.tools.map((tool, index) => <Tag key={index} data={tool} />)
    }

    return <div className='jobContainer'>
        <img src={data.logo} alt="" className='logo' />
        <div className="job-description-area">
            <div className="company-name-area">
                <div className='companyName'>{data.company}</div>
                <div className="newTag">{data.new && <p>NEW!</p>}</div>
                <div className="featuredTag">{data.featured && <p>FEATURED</p>}</div>
            </div>
            <div className='position'>{data.position}</div>
            <div className="job-info-area">
                <JobInfo data={data.postedAt} />
                <JobInfo data='·' strong />
                <JobInfo data={data.contract} />
                <JobInfo data='·' strong />
                <JobInfo data={data.location} />
            </div>
        </div>
        <div className="tags">
            <Tag data={data.role} />
            <Tag data={data.level} />
            {loadLanguagesTags()}
            {loadToolsTags()}
        </div>
    </div>
}