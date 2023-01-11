import fetcher from "../fetcher"

const getUserInfo = async username => {
    // try {
    //     const response = await fetcher.get('/accounts1/' + username);
    //     console.log(response);
    //     if (response.data)
    //         return response.data;
    //     else return response.error;
    // }catch(error) {
    //     console.log(error)
    //     console.log(error.message)
    //     return new Error(error);
    // }

    // const [error, result] = await handleRequest(fetcher.get('/accounts1/' + username));
    // console.log(error)
    // console.log(result)

    return fetcher.get('/accounts/' + username);
}



const userApi = {
    getUserInfo
}

export default userApi;