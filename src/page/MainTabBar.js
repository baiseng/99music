import React from 'react';

import { TabBar } from 'antd-mobile';

import DiscoverMain from "./discover/DiscoverMain";
import VideoMain from './video/VideoMain'
import MyMain from "./my/MyMain";
import FriendMain from "./friend/FriendMain";
import AccountMain from "./account/AccountMain";

class MainTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'accountTab',
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
                >
                    <TabBar.Item
                        title="发现"
                        key="discover"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                        }}
                                   >
                            <i className={'iconfont icon-discover_music'}/>
                        </div>
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',}}
                        >
                            <i className={'iconfont icon-discover_music'} style={{color:'red'}}/>
                        </div>
                        }
                        selected={this.state.selectedTab === 'discoverTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'discoverTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        <div>
                            <DiscoverMain/>
                        </div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px'}}
                        >
                            <i className={'iconfont icon-video'}/>
                        </div>
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',}}
                        >
                            <i className={'iconfont icon-video'} style={{color:'red'}}/>
                        </div>
                        }
                        title="视频"
                        key="video"
                        selected={this.state.selectedTab === 'videoTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'videoTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <VideoMain></VideoMain>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px'}}
                        >
                            <i className={'iconfont icon-music'}/>
                        </div>
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',}}
                        >
                            <i className={'iconfont icon-music'} style={{color:'red'}}/>
                        </div>
                        }
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'myTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'myTab',
                            });
                        }}
                    >
                        <MyMain/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px'}}
                        >
                            <i className={'iconfont icon-friends'}/>
                        </div>
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',}}
                        >
                            <i className={'iconfont icon-friends'} style={{color:'red'}}/>
                        </div>
                        }
                        title="朋友"
                        key="friend"
                        selected={this.state.selectedTab === 'friendTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'friendTab',
                            });
                        }}
                    >
                        <FriendMain/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px'}}
                        >
                            <i className={'iconfont icon-me'}/>
                        </div>
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',}}
                        >
                            <i className={'iconfont icon-me'} style={{color:'red'}}/>
                        </div>
                        }
                        title="账号"
                        key="account"
                        selected={this.state.selectedTab === 'accountTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'accountTab',
                            });
                        }}
                    >
                        <AccountMain/>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default MainTabBar


