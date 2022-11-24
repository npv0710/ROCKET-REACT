import './ListGroups.scss'

const ListGroups = (props) => {
    return(
        <div className="list-groups">
            <div className='row'>
                <div className='navbar'>
                    <ul className='menu'>
                        <li>
                            <Link to='/'>Link Item 1</Link>
                        </li>
                        <li>
                            <Link to='/'>Link Item 2</Link>
                        </li>
                        <li>
                            <Link to='/'>Link Item 3</Link>
                        </li>
                    </ul>
                    <div className='logout'>
                        Logout
                        <span>NPV</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListGroups