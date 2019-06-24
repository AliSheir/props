import React ,{Component} from 'react';
import '../App.css';


class Worker  extends Component{
  state = {
    workers :[ 
      {id :'1',  name : "Ali Hamza", age : 20, selray: 20000},   
      {id :'4',  name : "Mustafa", age : 21, selray: 16000}  , 
      {id:'5',  name : "Ahmad Raza", age : 24, selray: 18000},
      {id:'8',  name : "Numan", age : 25,  selray : 22000},
      {id:'12',  name : "Zehraan", age : 19, selray: 16500},
      {id:'13',  name : "Qasim", age : 23, selray: 14500},
    ],
  }
    render(){
     
        return(
            <div className='worker-container'>
              {
                this.state.workers.map(item => {
                  return(
                    <div  className='item-container'>
                      {item.name} <br/>
                     Age : {item.age} <br/>
                     pay :{item.selray}
                    </div>
                  )
                })
              }
            </div>
        )
    }
}

export default Worker;