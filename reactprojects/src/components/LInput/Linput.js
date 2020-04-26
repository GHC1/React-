import React, { Component } from 'react'
import styles from './Linput.module.css' 
import PropType, { string, object } from 'prop-types'
class Linput extends Component{
    // 默认值
    static defaultProps = {
        IClass:'iconfont icon-yonghu',
        placeholder:'用户名 / 邮箱 / 手机号',
        type:'text',
        style:{},
        value:'',
        name:''
        // onChange
    }
    static PropType={
        IClass:string,
        placeholder:string,
        type:string,
        style:object,
        value:string,
        onChange:PropType.func.isRequired,
        name:string
    }
    render(){
        
        let {IClass,placeholder,type,style,value,onChange,name} = this.props
        return(
            <div className={styles.Linputunder} style={style}>
                <i className={IClass}></i>
                <input placeholder={placeholder} name={name} type={type} value={value} onChange={onChange}/>
            </div>
        )
    }
}
export default Linput