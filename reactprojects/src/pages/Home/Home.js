import React, { Component } from 'react'
import UcSwipe from '../../components/Swipe/Index'
import Coll from '../../components/Coll/coll'
import Header from '../../layouts/Header'
import './Home.css'
import axios from '../../plugins/axios'
class Home extends Component{
    state={
        coll:[],
        banner:[]
    }
  
    componentDidMount(){
        // console.log(this.state.coll)
        axios(
            {url:'api/goods/home',params:{_limit:6}}
        ).then(
            res=>{
                this.setState({
                    coll:res.data.data,
                  })
            },
            
        )

        axios(
            {url:'api/goods/banner'}
        ).then(
            res=>{
                this.setState({
                    banner:res.data.data,
                })
                // console.log(res.data.data,'轮播图数据')
                // console.log(this.state.banner,'数据')
            }
        )
    }
    render(){
        let {coll,banner}=this.state
        console.log(banner,'shujv')
        // console.log(coll,'coll')
        // console.log(coll,'IDIDIDI')
        return(
            <div id="home">
                <Header/>
                <UcSwipe style={{'marginTop':'1rem'}} data={banner} history={this.props.history}/>
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
export default Home