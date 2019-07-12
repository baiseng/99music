import React from 'react';
import { Grid } from 'antd-mobile';

const data=[
    {
        icon: 'http://p1.music.126.net/J-YFoc6-dmz8oBS0w0roog==/109951164190722103.jpg?param=140y140',
        text: '一个人熬过一些苦 才能无所不能',
    },
    {
        icon: 'http://p1.music.126.net/t5RZdj7MmtYdmjzxgU_kpQ==/109951164168176926.jpg?param=140y140',
        text: '\n' +
            '走心带感rap ๑华语乐坛说唱新势力',
    },
    {
        icon: 'http://p1.music.126.net/a2b-wcVrNbB1Ktum8q-uyw==/7870304232586557.jpg?param=140y140',
        text: '【戏腔专题】伶人入画，一生天涯',
    },
    {
        icon: 'http://p2.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg?param=140y140',
        text: '不要做被坏情绪支配的人',
    },
    {
        icon: 'http://p1.music.126.net/LL943yz4fpJNBNFZcqA0jQ==/18917097556521701.jpg?param=140y140',
        text: '未来的女朋友 你好',
    },
    {
        icon: 'https://p1.music.126.net/uEIQPbKrQbGs-QpWwdlTrA==/109951164171717856.jpg?param=140y140',
        text: '每日一丧||感谢你曾经来过 就算你是个过客',
    }
];


const ComSingsList = () => (
    <div>
        <div className="sub-title" style={{height:'50px',lineHeight:'30px' ,padding:'20px 10px 0',backgroundColor:'white',fontSize:'20px'}}>推荐歌单</div>
        <Grid data={data}
              columnNum={3}
              hasLine={false}
              itemStyle={{ height: '150px' }}
              renderItem={dataItem => (
                  <div style={{ padding: '12.5px',height:'150px' }}>
                      <img src={dataItem.icon} style={{ width: '90px', height: '90px' }} alt="" />
                      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                          <span>{dataItem.text}</span>
                      </div>
                  </div>
              )}
        />

    </div>
);

export default ComSingsList;
