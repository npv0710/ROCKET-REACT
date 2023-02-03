import Column1 from "./Column1";
import Column2 from "./Column2";

const TableComponent = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>Nguyen Quang Hai</td>
                    <td>quanghai</td>
                </tr> */}
                <tr>
                    <Column1 />
                </tr>
                <tr>
                    <Column1 />
                    <Column2 />
                </tr>
            </tbody>
        </table>
    )
}

export default TableComponent;