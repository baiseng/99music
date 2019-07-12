import React from "react";
import ComNavBar from '../../components/ComNavBar'
import { Tabs } from 'antd-mobile';
import Recommend from './page/Recommend'
import LookLive from './page/LookLive'
import Scene from './page/Scene'
import CoverUp from './page/CoverUp'
import Square from './page/Square'
import MV from './page/MV'
import Dance from './page/Dance'
import ACGMusic from './page/ACGMusic'
import Adorable from './page/Adorable'
import Life from './page/Life'
import FansMade from './page/FansMade'

class VideoMain extends React.Component {
    tabs = [
        { title: '推荐'},
        { title: 'LOOK直播'},
        { title: '现场'},
        { title: '翻唱' },
        { title: '广场' },
        { title: 'MV' },
        { title: '舞蹈' },
        { title: 'ACG音乐'},
        { title: '萌宠' },
        { title: '生活' },
        { title: '最佳饭制' }
    ];
    render() {
        return (
            <div>
                <ComNavBar/>
                <div>
                    <Tabs tabs={this.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                        <Recommend/>
                        <LookLive/>
                        <Scene/>
                        <CoverUp/>
                        <Square/>
                        <MV/>
                        <Dance/>
                        <ACGMusic/>
                        <Adorable/>
                        <Life/>
                        <FansMade/>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default VideoMain