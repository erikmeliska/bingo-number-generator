const Ball = (props) => {
    let letter
    let done = (props.numbers?.includes(props.number)) ? "done":""

    for (const [key, value] of Object.entries(props.bingoSet)) {
        if (value.includes(props.number)) {
            letter = key.toUpperCase()
        }
      }

    return (
        <div className={`item ${letter} ${done}`}>
            <div className="letter">{letter}</div>
            {props.number}
        </div>
    )
}

export default Ball