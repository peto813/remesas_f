import API from '../../services/api';

class loginRestService {

	login(data){
		const api  = new API({ url:'rest-auth/login/' });
		api.createEntity({ name: 'login' });
		return api.endpoints.login.create(data).then(function(response){
			if(response.status===200){
				return response.json();
			}else {
		      throw response.json();
		  	}
		})
	}
}

export default loginRestService;