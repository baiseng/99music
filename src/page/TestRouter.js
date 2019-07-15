import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom'
import DiscoverMain from "./discover/DiscoverMain";
import VideoMain from "./video/VideoMain";
import MyMain from "./my/MyMain";
import FriendMain from "./friend/FriendMain";
import AccountMain from "./account/AccountMain";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <div className="App" >
                <Router>

                    <NavLink to={{pathname:'/discover'}} >发现</NavLink>
                    <NavLink to={{pathname:'/video'}}>视频</NavLink>
                    <NavLink to={{pathname:'/my'}} >我的</NavLink>
                    <NavLink to={{pathname:'/friend'}} >朋友</NavLink>
                    <NavLink to={{pathname:'/account'}} >账号</NavLink>

                    {/*一级路由页面*/}
                    <Route path={'/discover'} exact component={DiscoverMain} />
                    <Route path={'/video'} exact component={VideoMain} />
                    <Route path={'/my'} exact component={MyMain} />
                    <Route path={'/friend'} exact component={FriendMain} />
                    <Route path={'/account'} exact component={AccountMain} />
                </Router>
            </div>
        );
    }
}

export default App;