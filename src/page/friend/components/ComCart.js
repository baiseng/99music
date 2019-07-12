import React from "react";
import { Card,WhiteSpace,List } from 'antd-mobile';
const Item = List.Item;
const Brief=Item.Brief;

class ComCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgList:[
                'https://p1.music.126.net/IQqoQLNE58CqCEdEEC1F6Q==/109951164202874385.jpg?param=110y110&quality=100',
                'https://p1.music.126.net/OSn4R1nqCEeWNL3_QmNeHQ==/109951164202879215.jpg?param=110y110&quality=100',
                'https://p1.music.126.net/pyc1qnxJ-i_4vL0mvI7w2A==/109951164202874424.jpg?param=110y110&quality=100',
                'https://p1.music.126.net/XAj4AiX8jxHPEC0WUJ6ZLw==/109951164202881648.jpg?param=110y110&quality=100',
                'https://p1.music.126.net/bQS72jfQNgGINOMM1mgGDA==/109951164202874901.jpg?param=110y110&quality=100',
                'https://p1.music.126.net/zmEP8hdd11fhXJD2XXf7rw==/109951164202875449.jpg?param=110y110&quality=100'
            ],
            singsList:[
                {content:'You Are a Lover',icon:'https://p2.music.126.net/Q4slNnbLEC4p9h9p7J-EmA==/109951163110340964.jpg?param=40y40',subtitle:'The Unbending Trees'},
            ]
        }
    }
    render() {
        return(
            <div>
                <WhiteSpace size="xs" />
                <Card full>
                    <Card.Header
                        style={{height:'50px',paddingTop:'30px'}}
                        title="空气很颓废"
                        thumb="https://p1.music.126.net/5d0bC1ujUd0Ll2YxxAWeJw==/109951163549015945.jpg?param=45y45"
                        thumbStyle={{borderRadius:'50%',height:'30px'}}
                        extra={
                            <div >
                                <div style={{float:'left'}}>分享单曲:</div>
                                <div style={{float:'right',background:'red',color:'white',padding:'3px 6px',borderRadius:'12px'}}><span className={'iconfont icon-add'}>关注</span></div>
                            </div>
                        }
                    />
                    <Card.Body style={{padding:'0 10px'}}>
                        <div style={{lineHeight:'20px',padding:'10px'}}>#你最喜欢的迪士尼歌曲是哪一首# 万里赴戎机 关山度若飞</div>
                        <div>
                            {this.state.imgList.map((v,i)=>{
                                return(
                                    <img key={i} src={v} alt={''} style={{padding:'3px'}}/>
                                )
                            })}
                        </div>
                        <div>
                            <List style={{clear:"both"}}>
                                {this.state.singsList.map((v,i)=>{
                                    return (
                                        <Item style={{height:'70px',background:'rgba(18,52,86,0.06)',borderRadius:'10px'}}
                                            key={i}
                                            thumb={(<img style={{width:'50px',height:'50px',borderRadius:'5px'}} src={v.icon} alt={'img'}/>)}
                                            onClick={() => {}}
                                            extra={(
                                                <div style={{background:'#ff7166',width:'40px' ,height:'40px',float:'right',borderRadius:'50%',position:'relative'}}>
                                                    <i className={'iconfont icon-play1'} style={{fontSize:'30px',color:'rgba(255,255,255,0.76)',position:'absolute',left:'8px',top:'-2px'}}/>
                                                </div>
                                            )}
                                        >{v.content}<Brief>{v.subtitle}</Brief></Item>
                                    )
                                })}
                            </List>
                        </div>
                    </Card.Body>
                </Card>
                <WhiteSpace size="xs" />
            </div>
        )
    }
}

export default ComCart;