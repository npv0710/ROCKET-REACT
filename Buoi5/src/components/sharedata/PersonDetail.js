import { persons } from "../../data";

const PersonDetail = props => {
    console.log(props);
    const { id } = props.match.params;
    console.log('id of the person: ' + id);
    const person = persons.filter(p => p.id == id)[0];
    console.log(person)
    return (
        <div style={{border: '1px solid green', cursor: 'pointer'}}>
            {
                person && (
                    <>
                        <h1>Full Name: {person.firstName + ' ' + person.lastName}</h1>
                        <h2>Id: {person.id}</h2>
                        <p>Age: {person.age}</p>
                    </>
                )
            }
        </div>
    )
}

{/* persons.map(person => {
    if (person.id == id)
        return(
            <>
                <h1>Full Name: {person.firstName + ' ' + person.lastName}</h1>
                <h2>Id: {person.id}</h2>
                <p>Age: {person.age}</p>
            </>
        )
}) */}

export default PersonDetail;