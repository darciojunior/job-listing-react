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


    return <div className='jobContainer'>
        {data.logo}
        <img src={logoImg} alt="" className='logo'/>
        <p>{data.company}</p>
        {isNew()}
        {isFeatured()}
        <p>{data.position}</p>
        <p>{data.postedAt}</p>
        <p>{data.contract}</p>
        <p>{data.location}</p>
        <p>{data.role}</p>
        <p>{data.level}</p>
        <p>{data.languages}</p>
        <p>{data.tools}</p>
    </div>
}