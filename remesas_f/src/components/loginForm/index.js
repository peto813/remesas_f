import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
//import loginRestService from "./restService";

import { userActions } from '../../actions/';
import { connect } from 'react-redux';

class LoginPage extends Component {
  constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
          username: "",
          password: "",
          submitted: false
        };
         this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length >= 8;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

    handleSubmit(e) {
        e.preventDefault();

        //this.setState({ submitted: true });//sets the components state to submitted true

        this.setState({ submitted: true }, function (e) {
            //console.log(this.state.submitted);
            const { username, password } = this.state;
            const { dispatch } = this.props;
            //console.log(this.state)
        if (username && password) {
            dispatch(userActions.login(this.state));
         }
        });
        // const { username, password } = this.state;
        // const { dispatch } = this.props;
        // console.log(this.props);
        // console.log(this.state);
        // if (username && password) {
        //     dispatch(userActions.login(this.state));
        // }
    }


  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.restService.login(this.state)
  //   .then((res)=>{
  //       console.log(res)
  //   })
  //   .catch( (error)=> {
  //       error.then((e)=>{
  //         console.log(e.non_field_errors[0]);
  //       })
  //   })
  // }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Usuario</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Clave</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }


  // componentDidMount(){
  //     this.restService = new loginRestService();
  // }
}

function mapStateToProps(state) {//this function is used as an argument to the connetor 
    const { loggingIn } = state.authentication;
    //console.log('loginform index js')
    return {
        loggingIn
    };
}
const Login = connect(mapStateToProps)(LoginPage);//this connects the above class to the dispatcher
export default Login; 