import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,Switch
} from 'react-router-dom'
import DiscoverMain from "./discover/DiscoverMain";
import VideoMain from "./video/VideoMain";
import MyMain from "./my/MyMain";
import FriendMain from "./friend/FriendMain";
import AccountMain from "./account/AccountMain";
import SongSheet from "./common/SongSheet";


let tabs=[
    {title:'发现',iconfont:'iconfont icon-discover_music',pathname:'/discover'},
    {title:'视频',iconfont:'iconfont icon-video',pathname:'/video'},
    {title:'我的',iconfont:'iconfont icon-music',pathname:'/my'},
    {title:'朋友',iconfont:'iconfont icon-friends',pathname:'/friend'},
    {title:'账号',iconfont:'iconfont icon-me',pathname:'/account'},
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: tabs.findIndex((v)=>{
                return v.pathname===window.location.pathname
            })
        };
    }

    render() {
        return (
            <div className="App" >
                <Router>

                    {/*一级路由页面*/}
                    <div style={{marginBottom:'80px'}}>
                        <Switch>
                            <Route path={'/'} exact component={DiscoverMain} />
                            <Route path={'/discover'} exact component={DiscoverMain} />
                            <Route path={'/video'} exact component={VideoMain} />
                            <Route path={'/my'} exact component={MyMain} />
                            <Route path={'/friend'} exact component={FriendMain} />
                            <Route path={'/account'} exact component={AccountMain} />
                            <Route path={'/songSheet'} exact component={SongSheet} />
                        </Switch>
                    </div>

                    {/* 底部导航栏 */}
                    <div style={{position:"fixed",bottom:'0',width:'100%',zIndex:'100',maxWidth:'600px'}}>
                        {tabs.map((v,i)=>{
                            return(
                                <NavLink to={{pathname:v.pathname}} key={i}  >
                                    <div style={{width:'20%',height:'80px',display:'inline-block',boxSizing:'borderBox',textAlign:'center',background:'rgba(238,238,238,0.98)',color:this.state.index===i?"red":'#949494'}} onClick={()=>{
                                        this.setState({
                                            index:i
                                        });
                                    }}>
                                        <p className={v.iconfont} style={{fontSize:'26px',margin:'10px'}}/>
                                        <p>{v.title}</p>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;