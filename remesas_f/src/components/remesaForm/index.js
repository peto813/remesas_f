import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./Login.css";
//import loginRestService from "./restService";

import { localbitcoinService } from '../../services/';
import { connect } from 'react-redux';

class RemesaFormComp extends Component {
  constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
          monedaOrigen: '',
          cantidad: "",
          monedaDestino: '',
          margen: 0,
          currencies :[],
          quote :'',
          submitted :false
        };
         this.handleSubmit = this.handleSubmit.bind(this);
         this.formattedQuote = this.formattedQuote.bind(this);
         //this.validateForm = this.validateForm.bind(this);
  }

  formattedQuote(){
    if (this.state.quote) {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: this.state.monedaDestino}).format(this.state.quote);

    }
    return '';
  }

  validateForm() {
    return this.state.monedaOrigen && this.state.monedaDestino && this.state.cantidad;
    //return this.state.cantidad;
  }

  componentDidMount(){
    //this.state.currencies =JSON.parse(localStorage.getItem('user')).currencies;
    this.setState({currencies:JSON.parse(localStorage.getItem('user')).currencies})
  } 



  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }




  // handleSubmit = event => {

  //   event.preventDefault();
  //   var dataClone = Object.assign(this.state,{currencies:undefined, submitted:undefined});
  //   localbitcoinService.getQuote(dataClone)
  //     .then(function(data){
  //       console.log(data)
  //       this.setState({quote:data.quote});



  //     })
  //     .catch( (error)=> {
  //       console.log(error)
  //     })

  // }

    handleSubmit(e) {
        e.preventDefault();
        //this.setState({ submitted: true });//sets the components state to submitted true
        console.log(this.state)
        this.setState({ submitted: true },  (e) =>{
            //console.log(this.state.submitted);
            //const { username, password } = this.state;
            const dataClone = Object.assign({}, this.state);
            delete dataClone['currencies'];
            delete dataClone['submitted'];
            localbitcoinService.getQuote(dataClone)
              .then((data)=>{
                console.log(this.state.margen)
                console.log(dataClone)
                this.setState({ 
                  quote:data.quote,
                  submitted:false 
              });
                // new Intl.NumberFormat('de-DE', { style: 'currency', currency: this.state.monedaDestino}).format(data.quote)
              })
              .catch( (error)=> {
                this.setState({submitted:false})
                alert(error)
              })
            //this.setState({ quote: 333 })
            //const { dispatch } = this.props;
            //console.log(this.state)
        // if (username && password) {
        //     dispatch(userActions.login(this.state));
        //  }
        });
        // const { username, password } = this.state;
        // const { dispatch } = this.props;
        // console.log(this.props);
        // console.log(this.state);
        // if (username && password) {
        //     dispatch(userActions.login(this.state));
        // }
    }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="cantidad" bsSize="large">
            <ControlLabel srOnly>Cantidad</ControlLabel>
            <FormControl
              value={this.state.cantidad}
              onChange={this.handleChange}
              type="number"
              placeholder="Cantidad"

            />
          </FormGroup>
          <FormGroup controlId="monedaOrigen" bsSize="large">
            <ControlLabel srOnly>Moneda origen</ControlLabel>
            <FormControl value={this.state.monedaOrigen} onChange={this.handleChange} componentClass="select" placeholder="select">
                <option value="">Moneda Origen</option>
                {
                   this.state.currencies.map((option, index) => {
                      return (<option key={option} value={option}>{option}</option>)
                   })
                }
            </FormControl>
          </FormGroup>





          <FormGroup controlId="monedaDestino" bsSize="large">
            <ControlLabel srOnly>Moneda Destino</ControlLabel>
            <FormControl onChange={this.handleChange} value={this.state.monedaDestino} componentClass="select" placeholder="select">
              <option value="">Moneda Destino</option>
                {
                   this.state.currencies.map((option, index) => {
                    // var disableElem;
                    //   if (this.state.monedaOrigen && this.state.monedaDestino && (this.state.monedaOrigen===this.state.monedaDestino)){
                    //     disableElem = true;
                    //   }
                    //   disableElem = false;
                      return (<option disabled={this.state.monedaOrigen===option} key={option} value={option}>{option}</option>)
                   })
                }
            </FormControl>
          </FormGroup>




          <FormGroup controlId="margen" bsSize="large">
            <ControlLabel>Margen Estimado (%)</ControlLabel>
            <FormControl
              value={this.state.margen}
              onChange={this.handleChange}
              type="number"
              placeholder="Margen aspirado"
            />
          </FormGroup>
          <h4>Recomendado: {this.formattedQuote()}</h4>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm() || this.state.submitted}
            type="submit"
            bsStyle="primary">
            Calcular
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
const RemesaForm = connect(mapStateToProps)(RemesaFormComp);//this connects the above class to the dispatcher
export default RemesaForm; 