import React, { Component } from 'react'
import './input.css'
import propType, { string } from 'prop-types'
class Inp extends Component{
    /*
        placeholder:文本框提示信息   string
        style：样式    object
        magShow:是否显示扫描   i_show：显示  ，i_none：不显示
    */
    //默认值
    static defaultProps = {
        placeholder:'搜索博文/帖子/用户',
        style:{},
        magShow:'i_show',
        name:'',
    }
    static propType={
        placeholder:string,
        style:propType.object,
        magShow:string,
        type:string,
        value:string,
        onChange:propType.func.isRequired,
        name:string
    }
    render(){
        let {style,placeholder,value,onChange,name} = this.props
        return(
        <div id="top" style={style}>
            <div id="inp">
                <button className="but iconfont icon-sousuo1" onClick={this.onClick}></button>
                <input placeholder={placeholder} name={name} value={value} onChange={onChange}></input>
            </div>  
            {/* <i className="iconfont icon-saomiao" className="{magShow}"></i>     */}
        </div>
        )
    }
    onClick=()=>{
        if(this.props.value){
            // this.props.history.push({pathname:`${this.props.location.pathname}`})
        }else{
            alert('请输入内容')
        }
    }
}
export default Inp