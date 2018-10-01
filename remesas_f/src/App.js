import React, { Component } from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomePage/Loadable';
import NavbarComponent from './components/NavBar/index';
import DashboardContainer from './containers/DashboardPage/index';
import Error from './components/Error/error';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import { history } from './helpers';
//import { alertActions } from './actions';
import './App.css';
library.add(faUser)

console.log(localStorage.getItem('user'))
class App extends Component {

    // constructor(props) {
    //     super(props);

    //     const { dispatch } = this.props;
    //     history.listen((location, action) => {
    //         // clear alert on location change
    //         console.log(location)
    //         dispatch(alertActions.clear());
    //     });
    // }


  render() {
    return (

      <Router history={history}>
      <div>
        <NavbarComponent history={history}></NavbarComponent>
      
      
       <Switch> 
          <Route exact path="/" history={history} component={HomeContainer} />
          <PrivateRoute exact path="/dashboard" component={DashboardContainer} />
          <Route component={Error} />
       </Switch> 
       </div>
      </Router>
    );
  }
}

export default App;
