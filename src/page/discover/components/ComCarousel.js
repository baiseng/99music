import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class ComCarousel extends React.Component {
    state = {
        data: [
            'http://p1.music.126.net/8LQ4HkqJ0BA81kodH6VSag==/109951164205411978.jpg',
            'http://p1.music.126.net/eX6Rt0uAqjKXSt0aw9Rjwg==/109951164205894624.jpg',
            'http://p1.music.126.net/6BkO331aD8pMoSpqjPOyPg==/109951164206298674.jpg'
        ],
        imgHeight: 176,
    };
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [
                    'http://p1.music.126.net/8LQ4HkqJ0BA81kodH6VSag==/109951164205411978.jpg',
                    'http://p1.music.126.net/eX6Rt0uAqjKXSt0aw9Rjwg==/109951164205894624.jpg',
                    'http://p1.music.126.net/6BkO331aD8pMoSpqjPOyPg==/109951164206298674.jpg'
                ]
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => {}}
                    afterChange={index => {}}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="https://music.163.com/#"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default ComCarousel;