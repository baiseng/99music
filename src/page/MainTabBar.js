import React from 'react';

import { TabBar } from 'antd-mobile';

import DiscoverMain from "./discover/DiscoverMain";
import VideoMain from './video/VideoMain'
import MyMain from "./my/MyMain";
import FriendMain from "./friend/FriendMain";
import AccountMain from "./account/AccountMain";

let tabs=[
    {title:'发现',key:'discover',iconfont:'iconfont icon-discover_music',tab:'discoverTab',page:(<DiscoverMain/>)},
    {title:'视频',key:'video',iconfont:'iconfont icon-video',tab:'videoTab',page:(<VideoMain/>)},
    {title:'我的',key:'my',iconfont:'iconfont icon-music',tab:'myTab',page:(<MyMain/>)},
    {title:'朋友',key:'friend',iconfont:'iconfont icon-friends',tab:'friendTab',page:(<FriendMain/>)},
    {title:'账号',key:'account',iconfont:'iconfont icon-me',tab:'accountTab',page:(<AccountMain/>)}
];

class MainTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'discoverTab',
            hidden: false,
            fullScreen: true,
        };
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="red"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    prerenderingSiblingsNumber={0}>
                    {tabs.map((v)=>{
                        return(
                            <TabBar.Item
                                title={v.title}
                                key={v.key}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                }}>
                                    <i className={v.iconfont}/>
                                </div>
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',}}>
                                    <i className={v.iconfont} style={{color:'red'}}/>
                                </div>
                                }
                                selected={this.state.selectedTab === v.tab}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: v.tab,
                                    });
                                }}
                                data-seed="logId"
                            >
                                <div>
                                    {v.page}
                                </div>
                            </TabBar.Item>
                        )
                    })}
                </TabBar>
            </div>
        );
    }
}

export default MainTabBar


