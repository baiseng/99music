import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'

class ComCarousel extends React.Component {
    state = {
        banners:[
            {pic: "http://p1.music.126.net/FO8UwGJgs2o0v792EX7DfA==/109951164209688558.jpg"},
            {pic: "http://p1.music.126.net/8LQ4HkqJ0BA81kodH6VSag==/109951164205411978.jpg"},
            {pic: "http://p1.music.126.net/6BkO331aD8pMoSpqjPOyPg==/109951164206298674.jpg"},
        ],
        imgHeight: 176,
    };
    componentWillMount() {
        axios.get('/banner?type=2').then(({data})=>{
            if (data.code === 200) {
                this.setState({
                    banners:data.banners
                })
            }
        })
    }
    render() {
        return (
            <WingBlank>
                <Carousel autoplay={true}
                    infinite
                    beforeChange={(from, to) => {}}
                    afterChange={index => {}}>
                    {this.state.banners.map((v,i) => (
                        <a key={i}
                            href="https://music.163.com/#"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
                            <img
                                src={v.pic}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}/>
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default ComCarousel;