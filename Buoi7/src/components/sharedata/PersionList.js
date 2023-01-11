import Person from "./Person";

function PersonList (props) {
    return(
        <div>
            {
                props.persons.map((person, index) => {
                    return (
                        <Person 
                            key={index}
                            id={person.id}
                            firstName={person.firstName}
                            lastName={person.lastName}
                            age={person.age}
                            match={props.match}
                        />
                    )
                })
            }
        </div>
    )
}

export default PersonList;