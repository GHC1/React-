import React, { Component } from 'react'
import styles from './Button.module.css' 
import {NavLink} from 'react-router-dom'
import PropType, { string, object } from 'prop-types'
class Button extends Component{
    static defaultProps={
        value :'按 钮',
        style:'',
        
    }
    static PropType ={
        value:string,
        style:object
    }
    render(){
        let {value,style,onClick} = this.props
        return(
            <div className={styles.Button} style={style} onClick={onClick}>
                <button>{value}</button>
            </div>
        )
    }
}
export default Button