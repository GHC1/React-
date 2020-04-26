import React, { Component } from 'react'
import styles from './Login.module.css' 
import Linput from '../../components/LInput/Linput'
import {NavLink} from 'react-router-dom'
import Button from '../../components/Button/Button'
import TopNav from '../../components/TopNav/TopNav'
import axios from '../../plugins/axios'

class Reg extends Component{
    state={
        value:'',
        valpass:'',
        msg:''
    }
    render(){
        let {value,valpass,msg} = this.state

        return(
            <div className={styles.Login}>
                <TopNav onClick={()=>{this.props.history.go(-1)}}/>
                <div className={styles.divone}>
                    <NavLink to='/login' activeClassName={styles.active}>登录</NavLink>
                    <NavLink to='/reg' activeClassName={styles.activet} className={styles.spanto}>注册</NavLink>
                </div>
                <nav>
                <Linput onChange={this.onChange} value={value} name='value'/>
                    <Linput 
                    type='password' 
                    IClass='iconfont icon-suo' 
                    placeholder='密码'
                    onChange={this.onChange} 
                    value={valpass} 
                    name='valpass'
                    />
                </nav>
                <p className={styles.msg}>{msg}</p>
                
                <Button value='注 册' style={{'margin-top':'1rem'}} onClick={this.Reging}/>
                
            </div>
        )
    }
    onChange=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
          })
    }
    Reging=()=>{

        // console.log(this.state.value,'用户名')
        axios(
            {
                url:'api/reg',
                method:'post',
                data:{
                    username:this.state.value,
                    password:this.state.valpass
                }
            }
        ).then(
            res=>{
                // console.log(res.data)
                this.setState({
                    msg:res.data.msg
                })
            },
            this.props.history.push({pathname:'/login'})
        ).catch(
            err=>console.log(err)
        )
    }
}
export default Reg