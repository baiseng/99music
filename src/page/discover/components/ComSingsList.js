import React from 'react';
import { Grid } from 'antd-mobile';
import axios from 'axios'


class ComSingsList extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
            result:[
                {
                    picUrl: 'http://p1.music.126.net/J-YFoc6-dmz8oBS0w0roog==/109951164190722103.jpg?param=140y140',
                    name: '一个人熬过一些苦 才能无所不能',
                },
                {
                    picUrl: 'http://p1.music.126.net/t5RZdj7MmtYdmjzxgU_kpQ==/109951164168176926.jpg?param=140y140',
                    name: '走心带感rap ๑华语乐坛说唱新势力',
                },
                {
                    picUrl: 'http://p1.music.126.net/a2b-wcVrNbB1Ktum8q-uyw==/7870304232586557.jpg?param=140y140',
                    name: '【戏腔专题】伶人入画，一生天涯',
                },
                {
                    picUrl: 'http://p2.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg?param=140y140',
                    name: '不要做被坏情绪支配的人',
                },
                {
                    picUrl: 'http://p1.music.126.net/LL943yz4fpJNBNFZcqA0jQ==/18917097556521701.jpg?param=140y140',
                    name: '未来的女朋友 你好',
                },
                {
                    picUrl: 'https://p1.music.126.net/uEIQPbKrQbGs-QpWwdlTrA==/109951164171717856.jpg?param=140y140',
                    name: '每日一丧||感谢你曾经来过 就算你是个过客',
                }
            ]
        }
    }
    componentWillMount() {
        axios.get('/personalized?limit=10').then(({data})=>{
            if (data.code===200){
                this.setState({
                    result:data.result
                })
            }
        })
    }

    render() {
        return (
            <div>
                <div className="sub-title" style={{height:'50px',lineHeight:'30px' ,padding:'20px 10px 0',backgroundColor:'white',fontSize:'20px'}}>推荐歌单</div>
                <Grid data={this.state.result}
                      columnNum={3}
                      hasLine={false}
                      itemStyle={{ height: '150px' }}
                      renderItem={dataItem => (
                          <div style={{ padding: '12.5px',height:'150px' }}>
                              <img src={dataItem.picUrl} style={{ width: '90px', height: '90px' }} alt="" />
                              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                  <span>{dataItem.name}</span>
                              </div>
                          </div>
                      )}
                />
            </div>
        );
    }
}

export default ComSingsList;
