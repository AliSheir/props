import React ,{Component} from 'react';
import './App.css';
import {BrowserRouter , Route } from "react-router-dom";
import Worker from './components/Worker';
import Header from './components/Header';
import Drinks from './components/Drinks';
import Foods from './components/Foods';
import Phones from './components/Phones';
import Books from './components/Books';


class App extends Component{
 
  render(){
    

return(
<BrowserRouter>

  <Header />
  <Route path="/Books" component={Books} /> 
  <Route path="/Foods" component={Foods} /> 
<Route path="/Drinks" component={Drinks} /> 
<Route path="/Phones" component={Phones} /> 
<Route path="/Worker" component={Worker} /> 






  </BrowserRouter>

 )

  }
}


export default App;