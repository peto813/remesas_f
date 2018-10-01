import { localbitcoinsConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';


export const localbitcoinActions = {
	getQuote
};


function getQuote(data) {
    return dispatch => {
        var username = data.username
        dispatch(request({ username }));

        userService.login(data)
            .then(
                user => { 
                    dispatch(success(user));
                    //console.log(user)

                    //history.push('/dashboard');
                }
                // error => {
                //     console.log(error)
                //     dispatch(failure(error));
                //     dispatch(alertActions.error(error));
                    
                // }
            ).catch( (error)=> {
                //console.log(error);
                dispatch(failure(error));
                dispatch(alertActions.error(error));
                alert(error);

            });
    };

    function request(user) { return { type: localbitcoinsConstants.LOGIN_REQUEST, user } }//THESE SET THE STORAGE
    function success(user) { return { type: localbitcoinsConstants.LOGIN_SUCCESS, user } }//THESE SET THE STORAGE
    function failure(error) { return { type: localbitcoinsConstants.LOGIN_FAILURE, error } }//THESE SET THE STORAGE

}



