import React ,{Component} from 'react';
import '../App.css';


class Phones  extends Component{
    state={
        Phones:[
            {name: "Samsung Mobiles"},
            {name: "Huawei Mobiles"},
            {name: "Oppo Mobiles"},
            {name: "Honor Mobiles"},
            {name: "Vivo Mobiles"},
            {name: "Nokia Mobiles"},
            {name: "MI Mobiles"},
            {name: "Q Mobiles"},
        ]
    }
    render(){
        return(
            <div className='phone-container'>
                {
                    this.state.Phones.map(item => {
                   return(
                       <div  className='item-container'>
                           {item.name}
                       </div>
                   )
                    })
                }

            </div>
        )
    }
}

export default Phones;