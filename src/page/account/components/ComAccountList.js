import React from "react";
import {List, WhiteSpace, Switch} from 'antd-mobile';

const Item = List.Item;

class ComAccountList extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            checked: false,
            dataList:[
                [
                    {content: '口袋铃声', icon: 'icon-Bell'},
                    {content: '我的订单', icon: 'icon-sheet1'}
                ],
                [
                    {content: '设置', icon: 'icon-setting'},
                    {content: '夜间模式', icon: 'icon-Star-Night'},
                    {content: '定时模式', icon: 'icon-clocko'},
                    {content: '音乐闹钟', icon: 'icon-clock'}
                ],
                [
                    {content: '在线听歌免流量', icon: 'icon-radio2'},
                    {content: '优惠券', icon: 'icon-ticket'}
                ],
                [
                    {content: '加入网易音乐人', icon: 'icon-discover_music'},
                    {content: '我要直播', icon: 'icon-video1'},
                    {content: '分享网易云音乐', icon: 'icon-Share'},
                    {content: '关于', icon: 'icon-about_line'}
                ]
            ]
        };
    }

    render() {
        return (<div>
            {this.state.dataList.map((v, i) => {
                return (
                    <div key={i}>
                        <WhiteSpace size={'md'}/>
                        <List>
                            {v.map((v, j) => {
                                return (
                                    <Item
                                        style={{height: '55px'}}
                                        key={j}
                                        thumb={(<i className={'iconfont ' + v.icon} style={{fontSize: '20px'}}/>)}
                                        arrow="horizontal"
                                        extra={(i===1&&j===1)?(
                                            <Switch
                                                checked={this.state.checked}
                                                onChange={() => {
                                                    this.setState({
                                                        checked: !this.state.checked,
                                                    });
                                                }}
                                            />
                                        ):''}
                                        onClick={() => {
                                        }}
                                    >{v.content}</Item>
                                )
                            })}
                        </List>
                    </div>
                )
            })}
        </div>);
    }
}

export default ComAccountList