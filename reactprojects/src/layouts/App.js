import React, { Component } from 'react'
import Footer from './Footer'
import Home from '../pages/Home/Home'
import '../assets/iconfont/iconfont.css'
import './App.css'

class App extends Component{
    render(){
        return(
            <div id="app">
                
                <Home history={this.props.history}/>
                <Footer history={this.props.history}/>
                <i className="iconfont.icon-yonghu"></i>
            </div>
        )
    }
}
export default App