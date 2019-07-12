import React from 'react';
import { Grid } from 'antd-mobile';

const data=[
    {
        icon: 'iconfont icon-calendar',
        text: `私人FM`,
    },
    {
        icon: 'iconfont icon-sheet1',
        text: `最新电音`,
    },
    {
        icon: 'iconfont icon-icranking',
        text: `Sati空间`,
    },
    {
        icon: 'iconfont icon-radio1',
        text: `私藏推荐`,
    },
    {
        icon: 'iconfont icon-live',
        text: `因乐交友`,
    },
    {
        icon: 'iconfont icon-live',
        text: `亲子频道`,
    },
    {
        icon: 'iconfont icon-live',
        text: `古典专区`,
    },
    {
        icon: 'iconfont icon-live',
        text: `跑步FM`,
    },
    {
        icon: 'iconfont icon-live',
        text: `小冰电台`,
    },
    {
        icon: 'iconfont icon-live',
        text: `爵士电台`,
    },
    {
        icon: 'iconfont icon-live',
        text: `驾驶模式`,
    }

];


const GridExample = () => (
    <div>
        <Grid data={data}
              hasLine={false}
              columnNum={5}
              isCarousel={true}
              carouselMaxRow={1}
              square={false}
              renderItem={dataItem => (
                  <div style={{ margin: '5px' ,height:'50px'}}>
                      <div style={{borderRadius:'50%', backgroundColor:'red' ,margin:'0 auto',height:'40px',width:'40px'}}>
                        <i className={dataItem.icon} style={{fontSize:'25px',color:'white',lineHeight:'40px'}}/>
                      </div>
                      <div style={{ color: '#888', fontSize: '10px', marginTop: '2px' }}>
                          <span>{dataItem.text}</span>
                      </div>
                  </div>
              )}
        />
    </div>
);

export default GridExample;
