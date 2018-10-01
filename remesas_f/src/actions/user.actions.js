import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    getAll
};
//history.push('/dashboard', { some: 'state' })
function login(data) {
    return dispatch => {
        var username = data.username
        dispatch(request({ username }));

        userService.login(data)
            .then(
                user => { 
                    dispatch(success(user));
                    //console.log(user)

                    history.push('/dashboard');
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

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => { 
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}