const Info = (props) => {
    return (
        <div className={props.className}>
            <div className="heading">{props.heading}</div>
            <div className="content">{(!props.content.includes("Infinity"))?props.content:""}</div>
        </div>
    )
}

export default Info