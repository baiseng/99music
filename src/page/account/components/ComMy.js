import React from 'react'
import {List} from 'antd-mobile'
const Item=List.Item;
const Brief =Item.Brief;
class ComMy extends React.Component{
    render() {
        return(
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
        )
    }
}

export default ComMy