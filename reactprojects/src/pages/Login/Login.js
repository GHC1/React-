import React, { Component } from 'react'
import styles from './Login.module.css' 
import Linput from '../../components/LInput/Linput'
import {NavLink} from 'react-router-dom'
import Button from '../../components/Button/Button'
import TopNav from '../../components/TopNav/TopNav'
import axios from '../../plugins/axios'
class Login extends Component{
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
                <Button value='登 录' style={{'margin-top':'1rem'}} onClick={this.Logining}/>
            </div>
        )
    }
    onChange=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
          })
    }
    Logining=()=>{
            // alert()
            console.log(this.state.valpass,'valpass')
        axios(
                {
                    url:'/api/login',
                    method:'post',
                    data:{
                        username:this.state.value,
                        password:this.state.valpass
                        }
                }
        ).then(
            res=>{
                // console.log(res.data,'登录成功')
                // console.log(res.data,'登录成功')
                this.setState({
                    msg:res.data.msg
                })
                if(res.data.err===0){
                    window.localStorage.setItem('token',res.data.token)
                    console.log(res.data.token,'登录中的token')
                    alert()
                    this.props.history.push({pathname:'/user'})
                }
              
                // console.log(res.data.token,'token登录')
            }
        ).catch(
            err=>console.log(err)
        )
    }
}
export default Login