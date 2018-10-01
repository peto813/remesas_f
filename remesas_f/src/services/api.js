import 'whatwg-fetch';
const baseUrl = "http://localhost:8000";


class API {

  constructor({ url }){
    this.url = `${baseUrl}/${url}`
    this.endpoints = {}
  }


  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      // console.log(response)
      // response.json().then(function(resp){
      //   console.log(resp)
      // })
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }


  parseJSON(response) {
    return response.json()
  }

  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */
  createEntity(entity) {
    this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity)
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this))
  }
  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {A entity Object} entity
   */
    requestOptions(method, params, headers){
      if (headers) {
        return  {method:method, headers: headers ,body: JSON.stringify(params)}
      }
      return  {method:method, headers: {'Content-Type': 'application/json'},body: JSON.stringify(params)}
    }



  createBasicCRUDEndpoints( {name} ) {
    var endpoints = {};
    //const resourceURL = `${this.url}`;
    //alert(this.url);
    //endpoints.create = (params) => 
      //fetch(this.url, {method: 'POST',headers: {'Content-Type': 'application/json'},data: JSON.stringify({username: params.username, password: params.password,})})//.then(function(resp){console.log(resp)})

    endpoints.create = (params, headers) =>{return fetch(this.url, this.requestOptions('POST', params, headers))}


      
    

    // endpoints.getAll = ({ query }={}) => axios.get(resourceURL, { params: { query } })

    // endpoints.getOne = ({ id }) =>  axios.get(`${resourceURL}/${id}`)

    // endpoints.create = (toCreate) =>  axios.post(resourceURL, toCreate)

    // endpoints.update = (toUpdate) => axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate)

    // endpoints.patch  = ({id}, toPatch) => axios.patch(`${resourceURL}/${id}`, toPatch)

    // endpoints.delete = ({ id }) => axios.delete(`${resourceURL}/${id}`)

    return endpoints

  }

}

export default API

