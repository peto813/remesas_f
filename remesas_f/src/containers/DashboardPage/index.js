import React, { Component } from 'react';
import  TransactionsList   from '../../components/transactionsList/index';
import  RemesaFormComp   from '../../components/remesaForm/index';

class DashboardContainer extends Component {
  render() {
    return (
    	<div>
     	
      	<RemesaFormComp></RemesaFormComp>  		
    	</div>

    );
  }
}

export default DashboardContainer;
