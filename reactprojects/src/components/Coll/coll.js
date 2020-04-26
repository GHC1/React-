import React, { Component } from 'react'
import styles from './coll.module.css'
import propsType, { object, string } from 'prop-types'
class Coll extends Component{

    static defaultProps={
        style:{},
        data:[],
        pathname:''
    }
    static propsType={
        style:propsType.object,
        data:({
            _id:string,
            title:string,
            intro:string,
            detaile:string,
            time:string,
            nikename:string,
        })
    }
    to=()=>{
        
    }
    render(){
        let {style,onClick,data,history,pathname} = this.props
        // console.log(data,'data11111111111111')
        return(
            <li className={styles.coll} style={style} onClick={onClick}>
            {/* // <li className={styles.coll} style={style} onClick={()=>{history.push({pathname:`${pathname}/${data._id}`})}}> */}
                <p className={styles.theme}>{data.title}</p>
                <p className={styles.sub}>{data.detaile}</p>
                <div className={styles.divt}>
                    <span className={styles.spo}>昵称：{data.nikename}</span>
                    <span className={styles.spt}>浏览量:123</span>
                    <span className={styles.sph}>评论:23</span>
                </div>
            </li>
        )
    }
}
export default Coll