import React, { Component } from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
// import Forum from '../pages/Forum/Forum'
import Home from '../pages/Home/Home'
import User from '../pages/User/user'
import App from './App'
import Footer from './Footer'
import Skill from '../pages/Skill/Skill'
import Life from '../pages/Life/Life'
import Login from '../pages/Login/Login'
import Reg from '../pages/Reg/Reg'
import Particulars from '../pages/Particulars/Particulars'
import dynamic from '../pages/dynamic/dynamic'
import framework from '../pages/framework/framework'
import leading from '../pages/leading/leading'
import procedure from '../pages/procedure/procedure'
import Loading from '../pages/loading/loading'
import PubSub from 'pubsub-js'


class defaults extends Component{
    state={
        showbottom:true,
        Loadings:false,
    }
  constructor(props){
        super();
        //订阅
        PubSub.subscribe('showLoading',(mess,data)=>{
            // console.log('123')
          this.setState({Loadings:data})
        })
    }
    static getDerivedStateFromProps(nextProps,nextStact){
        // console.log('getDerivedStactFromProps')
        let path = nextProps.location.pathname;
        if(/particulars|login|reg/.test(path)){
            return {showbottom:false}
        }else{
            return {showbottom:true}
        }
    }
    render(){
       let token = window.localStorage.getItem('token');
    //    console.log(!token,'tokendqqq')
        let {showbottom,Loadings}=this.state
        return(
            <div id="default">
                 {Loadings && <Loading/>}
                    <Switch>
                        {
                            token ? <Route exact path="/user" component={User} /> : <Route path="/login" component={Login}></Route>
                        }
                        <Route path="/forum" component={Skill}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/skill" component={Skill}></Route>
                        <Route path="/life" component={Life}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/reg" component={Reg}></Route>
                        <Route path="/dynamic" component={dynamic}></Route>
                        <Route path="/framework" component={framework}></Route>
                        <Route path="/leading" component={leading}></Route>
                        <Route path="/procedure" component={procedure}></Route>
                        <Route path="/particulars"  component={Particulars}></Route>
                        <Route path="/" component={App}></Route>

                        
                    </Switch>
                    
                    {showbottom ? <Footer/> : null} 
                
            </div>
        )
    }
}
export default defaults