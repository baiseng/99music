import React from "react";

import Player from 'griffith'

//待废弃，不能用


class MyPlayer extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            isPlay: false,
            imgUrl: 'https://p2.music.126.net/YkBNUTCKaniRy-gqr5X03g==/109951163571880576.jpg',
            sources: {
                hd: {
                    bitrate: 1,
                    duration: 22221,
                    format: '',
                    height: 100,
                    width: 100,
                    size: 111,
                    play_url: 'http://vodkgeyttp9.vod.126.net/vodkgeyttp8/fgHI1Qsz_1015576_hd.mp4?wsSecret=a62205f58952fc63c15d2e43b26d7cea&wsTime=1563023971&ext=tithYvd%2FfesIZe2adCthNu7aCGXWQDExkhQl3Uf98cRwh%2BE64BnYFPJKCSRp6Bq%2FOd4F%2FVq8Mcg9tZFXPePxBI2tR1F0V1SkB09M5if0vXCPdpljmJJUJiLga2U%2FQCXE0I6A89t6KxEW6%2BH2lEBiEufl1%2Fykra8ooawQ3T%2BiQPLMhqlBhEnUm44BwmrvYvkXeu8QwcDiVchx6fgXVice1Isc%2FSzA1iX7Ok2HexaM1Pm7V99idl5cHk1axIMbhdtf',
                }
            }

        }
    }

    show() {
        if (this.state.isPlay) {
            return (
                <Player id={'1'} cover={this.state.imgUrl} duration={22222} sources={this.state.sources}
                        error={null}/>
            );
        }else{
            return (
                <img src={this.state.imgUrl} style={{width: '100%'}} alt={''} onClick={this.setState({isPlay: true})}/>
            );
        }

    }

    render() {
        return (
            <div>
                {this.show()}
            </div>
        )
    }
}

export default MyPlayer