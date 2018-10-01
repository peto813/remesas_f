//import config from 'config';
import API from './api';
export const userService = {
    login,
    logout,
    //getAll
};

function login(data) {
    //const { username, password } = data;
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };
    const api  = new API({ url:'rest-auth/login/' });
    api.createEntity({ name: 'login' });

    return api.endpoints.login.create(data).then((response)=>{


        if(response.status===200){
            return response.json().then((user)=>{
            if (user.key) {
                console.log(user)
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
                return Promise.resolve(user);
            });
        }else {

            return response.json()
                .then((err)=>{
                    return Promise.reject(err['non_field_errors'][0]);
                })
        }

    })

}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 window.location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }