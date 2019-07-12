import React from "react";
import ComNavBar from '../../components/ComNavBar'
import { Tabs } from 'antd-mobile';
import Dynamics from "./page/Dynamics";

class FriendMain extends React.Component {
    tabs = [
        { title: '动态'},
        { title: '附近'},
    ];
    render() {
        return (
            <div>
                <ComNavBar/>
                <div>
                    <Tabs tabs={this.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                        <Dynamics/>
                        <div>看啥呢</div>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default FriendMain;