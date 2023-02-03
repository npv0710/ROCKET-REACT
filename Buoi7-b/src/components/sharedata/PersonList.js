import Person from "./Person";

function PersonList (props) {
    console.log(props.persons);

    /**
     * Array.map() function
     */
    props.persons.map((person, index, array) => {
        console.log(person.id + '; index: ' + index);
    })

    return(
        <div>
            {
                props.persons.map((person, index) => {
                    return (
                        <Person
                            //key={index}
                            key={person.id}
                            firstName={person.firstName}
                            lastName={person.lastName}
                            age={person.age}
                        />
                    )
                })
            }
            {/* <Person 
                firstName={props.persons[0].firstName}
                lastName={props.persons[0].lastName}
                age={props.persons[0].age}
            /> */}
        </div>
    )
}

export default PersonList;