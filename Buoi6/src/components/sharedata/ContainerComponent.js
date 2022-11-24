import PersonList from "./PersionList";

const ContainerComponent = props => {
    const persons = [
        {
            id: 1, 
            firstName: 'Nguyen Quang',
            lastName: 'Hai',
            age: 25
        },
        {
            id: 2, 
            firstName: 'Nguyen Tua',
            lastName: 'Anh',
            age: 27
        },
        {
            id: 1, 
            firstName: 'Doan Van',
            lastName: 'Hậu',
            age: 23
        }
    ]
    return (
        <div>
            <PersonList persons={persons}/>
        </div>
    )
}

export default ContainerComponent;