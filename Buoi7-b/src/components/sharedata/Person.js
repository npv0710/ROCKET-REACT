const Person = props => {
    //console.log(props)
    return(
        <div
            style={{
                border: '1px solid lightgray',
                cursor: 'pointer',
                padding: '10px'
            }}
        >
            <h3>Full Name: {props.firstName + ' ' + props.lastName}</h3>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Person;