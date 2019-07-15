import React from "react";
import {Card, Badge, WhiteSpace} from 'antd-mobile';
import Player from 'griffith'


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
            //     urlInfo: {
            //         id: "FA79D13E620FEF7FAE109FCBE24D4CD4",
            //         url: "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/fgHI1Qsz_1015576_hd.mp4?wsSecret=a62205f58952fc63c15d2e43b26d7cea&wsTime=1563023971&ext=tithYvd%2FfesIZe2adCthNu7aCGXWQDExkhQl3Uf98cRwh%2BE64BnYFPJKCSRp6Bq%2FOd4F%2FVq8Mcg9tZFXPePxBI2tR1F0V1SkB09M5if0vXCPdpljmJJUJiLga2U%2FQCXE0I6A89t6KxEW6%2BH2lEBiEufl1%2Fykra8ooawQ3T%2BiQPLMhqlBhEnUm44BwmrvYvkXeu8QwcDiVchx6fgXVice1Isc%2FSzA1iX7Ok2HexaM1Pm7V99idl5cHk1axIMbhdtf",
            //         size: 109052073,
            //         validityTime: 1200,
            //         needPay: false,
            //         payInfo: null,
            //         r: 480
            //     },
            // }
            imgUrl: 'https://p2.music.126.net/YkBNUTCKaniRy-gqr5X03g==/109951163571880576.jpg',
            sources: {
                hd: {
                    bitrate: 1,
                    duration: 22221,
                    format: '',
                    height: 100,
                    width: 100,
                    size:this.props.videoData.urlInfo.size,
                    play_url: this.props.videoData.urlInfo.url,
                }
            }
        };

    }
    componentWillMount() {
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
                            <Player id={this.state.videoData.coverUrl} cover={this.state.videoData.coverUrl} duration={this.state.videoData.durationms} sources={this.state.sources}
                                    error={null}/>
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