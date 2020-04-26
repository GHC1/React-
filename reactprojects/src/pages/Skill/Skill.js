import React, { Component } from 'react'
import SmNav from '../../components/SmNav/SmNav'
import Coll from '../../components/Coll/coll'
import Inp from '../../components/Input/input'
import axios from '../../plugins/axios'

class Skill extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        axios(
            {url:'api/goods/home'}
        ).then(
            res=>{
                this.setState({
                    data:res.data.data,
                  })
                //   console.log(res.data.data)
                // console.log(this.state.data,'静态数据')
            },
            
        )
    }
    render(){
        let {data} = this.state
        return(
            <div id="skill">
                <SmNav/>
                <Inp placeholder='搜索技术贴' magShow='i_none'/>
               {/* <h3>技术区</h3> */}
               {
                    data.map((item,index)=>(                   
                    <Coll 
                    style={{margin:"0 1rem 0 1rem"}} 
                    key={item._id}
                    index={index}
                    data={item}
                    onClick={()=>{this.props.history.push({pathname:`/particulars/${item._id}`,search:`_id=${item._id}`})}}
                    />
                   ))
               }
               
            </div>
        )
    }
}
export default Skill