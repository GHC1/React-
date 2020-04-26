import React, { Component } from 'react'
import Input from '../components/Input/input'
import {NavLink} from 'react-router-dom'
import './Header.css'
class Header extends Component{
    state={
        val:''
    }
    onChange=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
          })
    }
    render(){
        let {val} = this.state
        return(
            <div id="header">
                <Input magShow="i_show"
                 onChange={this.onChange} 
                 value={val} 
                 name='val'
                 props={this.props}
                />
                <ul className="nav">
                    <NavLink to='/recommend' activeClassName='active'>
                        <li className="one">推荐</li>
                    </NavLink>
                    <NavLink to='dynamic'>
                        <li>动态</li>
                    </NavLink>
                    <NavLink to='/procedure'>
                        <li>程序人生</li>
                    </NavLink>
                    <NavLink to='/leading'>
                        <li>前端</li>
                    </NavLink>
                    <NavLink to='/framework'>
                        <li>架构</li>
                    </NavLink>
                    
                </ul>
                
            </div>
        )
    }
}
export default Header