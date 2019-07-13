import React from "react";
import ComNavBar from '../../components/ComNavBar'
import { Tabs } from 'antd-mobile';
import Dynamics from "./page/Dynamics";
import Nearby from "./page/Nearby";

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
                        <Nearby/>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default FriendMain;