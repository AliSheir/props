import React ,{Component} from 'react';
import '../App.css';


class Foods  extends Component{
    state={
        Foods:[
            {name : 'Sugar ' , price : ' 70'},
            {name : 'Milk ' , price : '75'},
            {name : 'Bread ' , price : '50'},
            {name : 'Cake ' , price : '250'},
            {name : 'Bargar ' , price : '70'},
            {name : 'Pizza ' , price : '370'},
            {name : 'Meet ' , price : '660'},
            {name : 'Chikan ' , price : '240'},
        ],
    }
    render(){
        return(
            <div className='food-container'>
               {
                   this.state.Foods.map(item => {
                       return(
                           <div  className='item-container'>
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

export default Foods;
