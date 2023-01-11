import axios from "axios";
import { Component } from "react";
import userApi from "../../api/user";

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    callApiGetUserInfo = async (username) => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb25ncGh1b25nIiwiaWF0IjoxNjY5NDc0MzIwLCJleHAiOjE2Njk0ODE1MjB9.SGsWddyB8i6UGR_zwYpH-FtFOsrTe6qRYBIVIDHZvfo';
        // Level 1
        // try {
        //     const response = await axios.get('/accounts/' + username, {
        //         headers: {
        //             'Content-Type': 'Application/json',
        //             'Authorization': 'Bearer ' + token
        //         }
        //     });
        //     console.log(response);
        //     console.log(response.data);
        // }catch (error) {
        //     console.log(error)
        //     console.log(error.response)
        // }

        //Level 2
        // const result = await axios.get('/accounts/' + username, {
        //     headers: {
        //         'Content-Type': 'Application/json',
        //         'Authorization': 'Bearer ' + token
        //     }
        // }).then(data => console.log(data))
        // .catch(err => console.log(err));
        
        // Level 3
        const [error, result] = await this.handleRequest(axios.get('/accounts/' + username, {
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + token
            }
        }));
        console.log(error);
        console.log(result);
    }

    async callApiGetUserInfo(username) {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb25ncGh1b25nIiwiaWF0IjoxNjY5NDc0MzIwLCJleHAiOjE2Njk0ODE1MjB9.SGsWddyB8i6UGR_zwYpH-FtFOsrTe6qRYBIVIDHZvfo';
        const [error, result] = await this.handleRequest(axios.get('/api/accounts/' + username, {
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + token
            }
        }))
        console.log(error);
        console.log(result.data);
    }

    componentDidMount() {
        // (async () => {
        //     const [error, result] = await this.handleRequest(userApi.getUserInfo('congphuong'));
        //     console.log(error);
        //     console.log(result);
        // })();
        this.callApiGetUserInfo('congphuong');
    }

    handleRequest = promise => {
        return promise.then(data => [undefined, data])
            .catch(err => [err, undefined])
    }

    render() {
        return (
            <div className="">
                <h2>User info component</h2>
            </div>
        )
    }
}

export default UserInfo;