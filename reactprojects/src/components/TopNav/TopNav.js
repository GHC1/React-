import React, { Component } from 'react'
import styles from './TopNav.module.css'
// import {NavLink} from 'react-router-dom'
class TopNav extends Component{
    static defaultProps = {
        onClick:{}
    }
    render(){
        let {onClick}= this.props
        
        return(

            <div className={styles.divone}>
               <p onClick={onClick}>《 </p>
            </div>
        )
    }
}
export default TopNav