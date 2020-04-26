import React, { Component } from 'react'
import Coll from '../../components/Coll/coll'
import Header from '../../layouts/Header'
import './recommend.css'
import axios from '../../plugins/axios'
class recommend extends Component{
    state={
        coll:[],
        banner:[]
    }
  
    componentDidMount(){
        // console.log(this.state.coll)
        axios(
            {url:'api/goods/home',params:{_limit:4}}
        ).then(
            res=>{
                // console.log(res.data.data,'数据12312312')
                this.setState({
                    coll:res.data.data,
                    
                  })
                  
            },
            
        )
    }
    render(){
        let {coll}=this.state
        // console.log(coll,'coll')
        // console.log(coll,'IDIDIDI')
        return(
            <div id="home">
                <Header/>
                {
                    coll.map((item,index)=>(
                        <Coll 
                       
                        pathname='/particulars'
                        props={this.props}
                        data={item} 
                        index={index}
                        key={item._id} 
                        style={{width:'94%',margin:'0 auto'}} 
                        onClick={()=>{this.props.history.push({pathname:`/particulars/${item._id}`,search:`_id=${item._id}`})}}

                        />
                    ))
                }
                {/* <Coll data={this.state.coll}/> */}
               
                
            </div>
        )
    }
    // goGoods=()=>{
    //     this.props.history.push({pathname:'/particulars',data:item})
    //     console.log(item,'数据6666666666612312312')
    // }
}
export default recommend