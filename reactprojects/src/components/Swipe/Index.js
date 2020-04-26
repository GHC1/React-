import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

//引入轮播组件Css
import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS
import { Carousel} from 'antd-mobile';

class Swipe extends Component {
    state = {
      imgHeight: 176,
      data:[]
    }
    static defaultProps={
        data: ['1', '2', '3'],
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render(){
        let {style,data} = this.props
        console.log(data,'banner数据')
        return (
        <div className="App" style={style}>
           <Carousel
            autoplay={true}//自动播放
            infinite//循环播放
          >
          {data.map((val,index) => (
             
            <img
                src={'http://47.105.55.7:3001/'+ data[index].banner}
                // onClick={
                //     ()=>{
                //         this.props.history.push({pathname:`/particulars/${data[index]._id}`,search:`_id=${data[index]._id}`})
                //     }
                // }
                key={index}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
                }}
            />
            ))}
            
              
          </Carousel>
        </div>
      );
    }
    
  }
  
  export default Swipe;





