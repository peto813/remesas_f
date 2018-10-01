import React, { Component } from 'react';
import { Table } from "react-bootstrap";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class TransactionsList extends Component {


  render() {
    return (
      
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Cantidad o.</th>
            <th>Cantidad d.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

// function mapStateToProps(state) {//this function is used as an argument to the connetor 
//     const { loggingIn } = state.authentication;
//     //console.log('loginform index js')
//     return {
//         loggingIn
//     };
// }
//const NavbarComponent = connect(mapStateToProps)(NavComponent);//this connects the above class to the dispatcher

export default TransactionsList;
