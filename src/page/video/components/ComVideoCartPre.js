import React from "react";
import {Card, Badge, WhiteSpace} from 'antd-mobile';


class ComVideoCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoData:this.props.videoData,
            // videoData:{
            //     coverUrl: "https://p2.music.126.net/D6tQMPNLw0I2cTlYVCqDNA==/109951163574333736.jpg",
            //     title: "全程高能，打打打打打打打打打打Bass，过瘾就完了",
            //     durationms: 228414,
            //     praisedCount: 1327,
            //     commentCount: 131,
            //     creator:{
            //         avatarUrl: "http://p1.music.126.net/Vk8Vgidl-GTgG5lbuAktlg==/19002859462875980.jpg",
            //         nickname: "音贫_"
            //     }
            // }
        };

    }
    componentWillMount() {
    }

    parseTime(ms){
        let s=ms/1000;
        return Math.floor(s/60)+':'+Math.floor(s%60);
    }

    render() {
        return (
            <div>
                <WhiteSpace size="xs"/>
                <Card full>
                    <Card.Body>
                        <div style={{
                            width: '100%',
                            position: 'relative',
                        }}>
                            <img src={this.state.videoData.coverUrl} style={{width:'100%'}} alt={''}/>
                            <span style={{
                                position: 'absolute',
                                right: '10px',
                                color: 'white',
                                border: '1px solid',
                                borderRadius: '8px',
                                padding: '2px',
                                marginTop: '8px'
                            }}>欧美电影</span>
                            <span style={{position: 'absolute', bottom: '10px',left:'10px', color: 'white'}}><i
                                className={'iconfont icon-play'}/>24万</span>
                            <span style={{position: 'absolute', right: '10px', bottom: '10px', color: 'white'}}><i
                                className={'iconfont icon-icranking'}/>{this.parseTime(this.state.videoData.durationms)}</span>
                            <span style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                color: 'white',
                                display: 'block'
                            }}><i className={'iconfont icon-play1'} style={{
                                position: 'absolute',
                                fontSize: '40px',
                                transform: 'translate(-20px,-20px)'
                            }}/></span>
                        </div>
                        <div style={{lineHeight: '20px', padding: '10px 5px'}}>{this.state.videoData.title}</div>
                    </Card.Body>
                    <div style={{height: '1px', backgroundColor: 'rgba(170,170,170,0.24)'}}/>
                    <Card.Header
                        title={this.state.videoData.creator.nickname}
                        thumb={this.state.videoData.creator.avatarUrl}
                        thumbStyle={{borderRadius: '50%', height: '30px'}}
                        extra={
                            <div>
                                <Badge text={(
                                    <span>{this.state.videoData.praisedCount}</span>
                                )} style={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    transform: "translateX(-70%)"
                                }}>
                                    <i className={'iconfont icon-thumbs-up'} style={{padding: '0 25px 0 0'}}/>
                                </Badge>
                                <Badge text={(
                                    <span>{this.state.videoData.commentCount}</span>
                                )} style={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    transform: "translateX(-70%)"
                                }}>
                                    <i className={'iconfont icon-icon-comment'} style={{padding: '0 25px'}}/>
                                </Badge>
                                <i className={'iconfont icon-2601caidan2'} style={{padding: '0 0 0 25px'}}/>
                            </div>
                        }
                    />
                </Card>
                <WhiteSpace size="xs"/>
            </div>
        )
    }
}

export default ComVideoCart;