//import config from 'config';
import API from './api';
import { authHeader } from '../helpers';
export const localbitcoinService = {
    getQuote,
    //getAll
};

function getQuote(data) {
    //const { username, password } = data;
    // const requestOptions = {
    //     method: 'POST',
    //     headers: authHeader(),
    //     body: JSON.stringify(data)
    // };
    // console.log(requestOptions)
    const api  = new API({ url:'api/quote/' });
    api.createEntity({ name: 'quote' });

    return api.endpoints.quote.create(data, authHeader()).then((response)=>{

        if(response.status===200){
            return response.json().then((data)=>{
                return Promise.resolve(data);
            });
        }

        return response.json()
            .then((err)=>{
                return Promise.reject(err);
            })
        

    })

}