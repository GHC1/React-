import React, { Component } from 'react'
import styles from './Particulars.module.css' 
import TopNav from '../../components/TopNav/TopNav'
import axios from '../../plugins/axios'
import qs from 'query-string'
// import {NavLink} from 'react-router-dom'
import {string } from 'prop-types'
class Particulars extends Component{
    state={
        Jdata:[],
       _id:''
    }
  
    constructor(props){
        super(props);
        const _id = qs.parse(props.location.search)
        console.log(_id._id,'IDIDID')

        axios(
            {url:`/api/goods/home/${_id._id}`}
        ).then(
            res=>{
                this.setState({
                    Jdata:res.data.data,
                  })
                  console.log(this.state.Jdata,'数据Partcu')
            }
        )
    }
   
   render(){
  
    let {Jdata}=this.state
    // let{data}=this.props
    // console.log(Jdata,'详情数据')
       return(
           <div className={styles.divone}>
               <TopNav onClick={()=>{this.props.history.go(-1)}}/>
               <nav className={styles.navone}>
                    <img src='../images/DefaultAvatar.gif'/>
                    <div>
                        <p className={styles.p1}>{Jdata.nikename}</p>
                        <p className={styles.p2}>{Jdata.time}</p>
                    </div>
                    
                </nav>
               <nav className={styles.Navtow}>
                   <p className={styles.p1}>{Jdata.title}</p>
                   <p className={styles.p2}>
                       {Jdata.detaile}
                    </p>
               </nav>
               <nav></nav>
           </div>
       )
   }
}
export default Particulars