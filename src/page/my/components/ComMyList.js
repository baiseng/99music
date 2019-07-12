import React from "react";
import { List } from 'antd-mobile';
const Item = List.Item;

class ComMyList extends React.Component {
    constructor(prop){
        super(prop);
        this.state={
            data:[
                {content:'本地音乐',icon:'icon-music',extra:'0'},
                {content:'最近播放',icon:'icon-disk',extra:'8'},
                {content:'我的电台',icon:'icon-radio2',extra:'5'},
                {content:'我的收藏',icon:'icon-collect',extra:'专辑/歌手/视频/专栏/主题'}
            ]
        }
    }

    render() {
        return (<div>
            <List>
                {this.state.data.map((v,i)=>{
                    return (
                        <Item
                            style={{height:'55px'}}
                            key={i}
                            thumb={(<i className={'iconfont '+v.icon} style={{fontSize:'20px'}}/>)}
                            arrow="horizontal"
                            extra={v.extra}
                            onClick={() => {}}
                        >{v.content}</Item>
                    )
                })}

            </List>
        </div>);
    }
}

export  default ComMyList