import { Link } from "react-router-dom";

const Person = props => {
    console.log(props);

    return (
        <Link to={`${props.match.url + '/' + props.id}`}>
            <div style={{border: '1px solid green', cursor: 'pointer'}}>
                <h1>Full Name: {props.firstName + ' ' + props.lastName}</h1>
                <p>Age: {props.age}</p>
            </div>
        </Link>
    )
}

export default Person;