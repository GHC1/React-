import React, { Component } from 'react'
import './Footer.css'
import {NavLink} from 'react-router-dom'
class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <ul>
                    <li>
                        <NavLink activeClassName="customColors" to='/home'>
                            <i className="iconfont icon-shouye"></i>
                            <p>首页</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="customColors" to='/forum'>
                            <i className="iconfont icon-xuexi"></i>
                            <p>论坛</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="customColors" to='user'>
                            <i className="iconfont icon-wode"></i>
                            <p>我的</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Footer