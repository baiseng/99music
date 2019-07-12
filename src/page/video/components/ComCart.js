import React from "react";
import { Card,Badge,WhiteSpace } from 'antd-mobile';

class ComCart extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return(
            <div>
                <WhiteSpace size="xs" />
                <Card full>
                    <Card.Body>
                        <div style={{width:'100%',height:'160px',position:'relative',background:'url(https://p1.music.126.net/U8BABYQtHiDyRWFi_8fJOg==/109951163954870698.jpg?imageView&quality=75) 0% 0% / 100% no-repeat' }}>
                            <span style={{position:'absolute',right:'10px',color:'white',border:'1px solid',borderRadius:'8px',padding:'2px',marginTop:'8px'}}>欧美电影</span>
                            <span style={{position:'absolute',bottom:'10px',color:'white'}}><i className={'iconfont icon-play'}/>24万</span>
                            <span style={{position:'absolute',right:'10px',bottom:'10px',color:'white'}}><i className={'iconfont icon-icranking'}/>03:00</span>
                            <span style={{position:'absolute',left:'50%',top:'50%',color:'white',display:'block'}}><i className={'iconfont icon-play1'} style={{position:'absolute',fontSize:'40px',transform:'translate(-20px,-20px)'}}/></span>
                        </div>
                        <div style={{lineHeight:'20px',padding:'10px 5px'}}>毒角sHoW- 中国球鞋科技征服老美，颜值再高不如技术牛X</div>
                    </Card.Body>
                    <div style={{height:'1px',backgroundColor:'rgba(170,170,170,0.24)'}}/>
                    <Card.Header
                        title="小小mo听音乐"
                        thumb="https://p2.music.126.net/XUT5PLbucHXO1HiBJb9ZLQ==/109951163536084042.jpg?param=50y50"
                        thumbStyle={{borderRadius:'50%',height:'30px'}}
                        extra={
                            <div >
                                <Badge  text={'3071'} style={{backgroundColor:'white',color:'black',transform:"translateX(-70%)"}}>
                                    <i className={'iconfont icon-thumbs-up'} style={{padding:'0 25px 0 0'}} />
                                </Badge>
                                <Badge  text={'1641'} style={{backgroundColor:'white',color:'black',transform:"translateX(-70%)"}}>
                                    <i className={'iconfont icon-icon-comment'} style={{padding:'0 25px'}}/>
                                </Badge>
                                <i className={'iconfont icon-2601caidan2'} style={{padding:'0 0 0 25px'}}/>
                            </div>
                        }
                    />
                </Card>
                <WhiteSpace size="xs" />
            </div>
        )
    }
}

export default ComCart;