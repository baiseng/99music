import React from 'react'
import {List} from 'antd-mobile'
const Item=List.Item;
const Brief =Item.Brief;
class ComAccountHead extends React.Component{
    render() {
        return(
            <div>
                <div>
                    <Item
                        thumb={
                            (<div >
                                <img style={{width:'40px',height:'40px'}} src={'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=542172031,1958995614&fm=26&gp=0.jpg'} alt={''}/>
                            </div>)
                        }
                        multipleLine
                        extra={(
                            <div style={{background:'red',color:'white',width:'70px',borderRadius:'20px',float:'right',paddingRight:'10px '}}>
                                <i className={'iconfont icon-money'}>签到</i>
                            </div>
                        )}
                        onClick={() => {}}
                    >
                        照猫画虎 <Brief>没有签名跟咸鱼有何区别</Brief>
                    </Item>
                </div>
                <div style={{background:'white'}}>
                    <div style={{width:'25%',height:'70px',display:'inline-block',boxSizing:'borderBox',textAlign:'center'}}><p style={{}}>23</p><p style={{color:'#888'}}>动态</p></div>
                    <div style={{width:'25%',height:'70px',display:'inline-block',boxSizing:'borderBox',textAlign:'center'}}><p style={{}}>46</p><p style={{color:'#888'}}>关注</p></div>
                    <div style={{width:'25%',height:'70px',display:'inline-block',boxSizing:'borderBox',textAlign:'center'}}><p style={{}}>3553</p><p style={{color:'#888'}}>粉丝</p></div>
                    <div style={{width:'25%',height:'70px',display:'inline-block',boxSizing:'borderBox',textAlign:'center'}}><p style={{}}><i className={'iconfont icon-edit1'}/></p><p style={{color:'#888'}}>编辑资料</p></div>
                </div>
                <div style={{background:'white'}}>
                    <div style={{width:'25%',height:'100px',display:'inline-block',boxSizing:'borderBox',textAlign:'center'}}><p style={{}}><i className={'iconfont icon-message'} style={{color:'red',fontSize:'26px'}}/></p><p style={{}}>消息</p></div>
                    <div style={{width:'25%',height:'100px',display:'inline-block',boxSizing:'borderBox',textAlign:'center'}}><p style={{}}><i className={'iconfont icon-mall'} style={{color:'red',fontSize:'26px'}}/></p><p style={{}}>商城</p></div>
                    <div style={{width:'25%',height:'100px',display:'inline-block',boxSizing:'borderBox',textAlign:'center'}}><p style={{}}><i className={'iconfont icon-ticket'} style={{color:'red',fontSize:'26px'}}/></p><p style={{}}>演出</p></div>
                    <div style={{width:'25%',height:'100px',display:'inline-block',boxSizing:'borderBox',textAlign:'center'}}><p style={{}}><i className={'iconfont icon-icon_skin'} style={{color:'red',fontSize:'26px'}}/></p><p style={{}}>个性换肤</p></div>
                </div>
            </div>
        )
    }
}

export default ComAccountHead