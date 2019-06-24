import React ,{Component} from 'react';
import '../App.css';

class Books extends Component{
    state={
        Books:[
            {name : "General Knowledge ", price : "550 " },
            {name : " History of Pakistan ", price : "640 " },
            {name : "Politic Books ", price : " 350" },
            {name : "Information Technology ", price : "670 " },
            {name : "Artificial Intelligence ", price : "900 " },
            {name : "Computer science ", price : "500 " },
        ],

    }
    render(){
      
        return(
            <div className='book-container'>
                {
                    this.state.Books.map(item =>{
                        return(
                            <div className='item-book-container'>
                              {item.name} <br/>
                              RS - {item.price}
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Books;