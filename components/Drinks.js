import React ,{Component} from 'react';
import '../App.css';


class Drinks  extends Component{
    state = { 
  
        Bottals :[
          {name : "Coke" , price : " 30"},
          {name : "Sprite" , price : " 30"},
          {name : "String" , price : " 35"},
          {name : "7 Up" , price : " 30"},
          {name : "Moonster" , price : " 60"},
          {name : "Red Bhull" , price : " 190"},
          {name : "Peach Malt " , price : " 45"},
          {name : "Lemon Mart" , price : " 55"},
          {name : "Rorar" , price : " 40"},
          {name : "Bigg Apple" , price : " 60"},
        ],
      }
     
    render(){
        return(
            <div className='drink-container'>
               {
                   this.state.Bottals.map(item => {
                       return(
                           <div  className='item-drink-container'>
                               {item.name} <br/>
                             RS-  {item.price}
                           </div>
                       )
                   })
               }
            </div>
        )
    }
}

export default Drinks;