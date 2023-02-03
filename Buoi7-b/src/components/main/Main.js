import DemoLifeCycle from "../demolifecycle/DemoLifeCycle";
import TableComponent from "../fragment/TableComponent";
import ContainerComponent from "../sharedata/ContainerComponent";
//import PostClassComponent from '../demolifecycle/PostClassComponent';

const Main = props => {

    return(
        <div className='main'>
            <TableComponent />
            <br></br>
            <br></br>
            <hr></hr>
            <h1>Ro27-Buoi5</h1>
            <ContainerComponent />
            <br></br>
            <br></br>
            <hr></hr>
            <h1>Ro27-Buoi6</h1>
            <DemoLifeCycle />
            {/* <PostClassComponent /> */}
        </div>
    )
}

export default Main;