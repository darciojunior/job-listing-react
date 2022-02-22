import './JobContainer.css'
import logoImg from '../images/photosnap.svg'

export default function JobContainer(props) {
    let data = props.data

    function isNew() {
        if (data.new) return <p>NEW!</p>
    }

    function isFeatured() {
        if (data.featured) return <p>FEATURED</p>
    }

    function loadLanguagesTags() {
        if (data.languages.length > 0) return data.languages.map((language, index) => <div key={index} className='tag'>{language}</div>)
    }

    function loadToolsTags() {
        if (data.tools.length > 0) return data.tools.map((tool, index) => <div key={index} className='tag'>{tool}</div>)
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
                <div className='job-info'>{data.postedAt}</div>
                <div className="job-info"><strong>·</strong></div>
                <div className='job-info'>{data.contract}</div>
                <div className="job-info"><strong>·</strong></div>
                <div className='job-info'>{data.location}</div>
            </div>
        </div>
        <div className="tags">
            <div className='tag'>{data.role}</div>
            <div className='tag'>{data.level}</div>
            {loadLanguagesTags()}
            {loadToolsTags()}
        </div>
    </div>
}