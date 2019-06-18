import React , {Component} from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component{
  state = [
    {name : "ali", age : 20, class : 13,},
    {name : "hamza", age : 23, class : 13,},
    {name : "sher", age : 22, class : 13,},
    {name : "umer", age : 20, class : 13,},
    {name : "hassan", age : 25, class : 13,},
  ]
render(){
var number = 125;
return <div>
{<Header />}
<h1>ali sher</h1> <br/>
{number}
{this.state.map(function(item){

return <div>
<div className='a'>  your name is {item.name} </div> <br/>
<div className='b'>your age is { item.age} </div> <br/>
<div className='c'> your class is {item.class} </div> <br/>
</div>

}
  )}


</div>


}



}

export default App;