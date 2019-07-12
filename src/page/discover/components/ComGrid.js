import React from 'react';
import { Grid } from 'antd-mobile';

const data=[
    {
        icon: 'iconfont icon-calendar',
        text: `每日推荐`,
    },
    {
        icon: 'iconfont icon-sheet1',
        text: `歌单`,
    },
    {
        icon: 'iconfont icon-icranking',
        text: `排行榜`,
    },
    {
        icon: 'iconfont icon-radio1',
        text: `电台`,
    },
    {
        icon: 'iconfont icon-live',
        text: `直播`,
    }
];


const GridExample = () => (
    <div>
        <Grid data={data}
              hasLine={false}
              columnNum={5}
              style={{height:'100px'}}
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
