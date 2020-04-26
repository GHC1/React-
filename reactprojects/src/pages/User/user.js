import React, { Component } from 'react'
import styles from './user.module.css'
import {NavLink} from 'react-router-dom'
import axios from '../../plugins/axios'

class User extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        axios(
            {url:'/api/user'}
        ).then(
            res=>{
                // console.log(res.data.data,'用户数据')
                
                this.setState(
                    {
                        data:res.data.data
                    }
                )
                // console.log(this.state.data,'用户静态数据')

            }
        )
    }
    //注销事件
    logout=()=>{
        window.localStorage.removeItem('token')
        this.props.history.push({pathname:'/login'})
    }
    render(){
        let {data} =this.state
        // console.log(data,'111111111111111111111')
        return(
            <div className={styles.user}>
               {/* <h3>用户界面</h3> */}
               <div className={styles.onediv}>
                    <nav>
                        <img src={'http://47.105.55.7:3001/'+data.icon}/>
                    <NavLink to='/login'>
                        <div>
                            <p className={styles.p1}>{data.nikename}</p>
                            <p className={styles.p2}>登录同步更对信息</p>
                            
                        </div>
                    </NavLink>
                    </nav>
                    <span> <button className={styles.logou} onClick={this.logout}>注销</button> </span>
               </div>


               {/* 二 */}
               <ul className={styles.oneul}>
                   <li>
                       <p className={styles.ulp1}>{data.follow}</p>
                       <p className={styles.ulp2}>关注</p>
                   </li>
                   <li>
                       <p className={styles.ulp1}>{data.fans}</p>
                       <p className={styles.ulp2}>粉丝</p>
                   </li>
                   <li>
                       <p className={styles.ulp1}>{data.follow}</p>
                       <p className={styles.ulp2}>访问</p>
                   </li>
                   <li>
                       <p className={styles.ulp1}>{data.follow}</p>
                       <p className={styles.ulp2}>排名</p>
                   </li>
               </ul>
               {/* 三 */}
               <div className={styles.divth}>
                   <nav className={styles.navone}>
                       <p>
                           <i className="iconfont icon-xieboke"></i>
                           <span>博客</span>
                       </p>
                       <p>
                           <i className="iconfont icon-liulanqi"></i>
                           <span>Blink</span>
                       </p>
                       <p>
                           <i className="iconfont icon-tiezi"></i>
                           <span>帖子</span>
                       </p>
                       <p>
                           <i className="iconfont icon-w_shipinke"></i>
                           <span>视频课</span>
                       </p>
                       <p>
                           <i className="iconfont icon-tiku"></i>
                           <span>图文课</span>
                       </p>
                   </nav>
                   <nav className={styles.navone}>
                       <p>
                           <i className="iconfont icon-shujia"></i>
                           <span>书架</span>
                       </p>
                       <p>
                           <i className="iconfont icon-shoucangjia"></i>
                           <span>收藏夹</span>
                       </p>
                       <p>
                           <i className="iconfont icon-zuji"></i>
                           <span>足迹</span>
                       </p>
                       <p>
                           <i className="iconfont icon-xunzhang"></i>
                           <span>勋章墙</span>
                       </p>
                       <p>
                           <i className="iconfont icon-fufeizhuanqu"></i>
                           <span>付费专栏</span>
                       </p>
                   </nav>
               </div>

               {/* 四 */}
               <div className={styles.fourdiv}>
                    <p>
                       <i className="iconfont icon-xiaoxi"></i>
                       <span>消息</span>
                   </p>
                   <p>
                       <i className="iconfont icon-qiandao_"></i>
                       <span>签到</span>
                   </p>
                   <p>
                       <i className="iconfont icon-youhuijuan"></i>
                       <span>优惠劵</span>
                   </p>
                   <p>
                       <i className="iconfont icon-tiku"></i>
                       <span>面试题</span>
                   </p>
                   <p>
                       <i className="iconfont icon-choujiang"></i>
                       <span>抽奖</span>
                   </p>
               </div>

               {/* 五 */}
               <div className={styles.divfive}>
                   <p>
                       <i className="iconfont icon-suo"></i>
                       <span>我的私密文章</span>
                   </p>
                   <p>
                       <i className="iconfont icon-qushixingtai"></i>
                       <span>粉丝趋势</span>
                   </p>
               </div>

               {/* 六 */}
               <div className={styles.divsix}>
                   <p>
                       <i className="iconfont icon-qunfengyijianfankui"></i>
                       <span>产品反馈</span>
                   </p>
                   <p>
                       <i className="iconfont icon-shezhi"></i>
                       <span>设置</span>
                   </p>
               </div>

            </div>
        )
    }
    // GoLogin(){
    //     this.props.history.push({pathname:'/login'})
    // }
}
export default User