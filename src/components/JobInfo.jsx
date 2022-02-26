import "./JobInfo.css"

export default function JobInfo(props) {
    if (props.strong) return <div className='job-info'><strong>{props.data}</strong></div>
    else return <div className='job-info'>{props.data}</div>
}