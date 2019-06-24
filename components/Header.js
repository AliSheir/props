import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Header extends Component{
    render(){
        return(
            <div className='head'>
                <h1>HB Super Market</h1>
                <div className='link-container'>
                <Link className='links' to='Books'> Books</Link>
                <Link className='links' to='Foods'> Foods</Link>
                <Link className='links' to='Drinks'> Drinks</Link>
                <Link className='links' to='Phones'> Phones</Link>
                <Link className='links' to='Worker'> Workers</Link>
                </div>
            </div>
        )
    }
}


export default Header;