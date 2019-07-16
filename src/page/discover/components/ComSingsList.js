import React from 'react';
import { Grid } from 'antd-mobile';
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class ComSingsList extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
            result:[
                // {
                //     id:2829018936,
                //     picUrl: 'http://p1.music.126.net/J-YFoc6-dmz8oBS0w0roog==/109951164190722103.jpg?param=140y140',
                //     name: '一个人熬过一些苦 才能无所不能',
                // }
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

    goSongSheet(id){
        this.props.history.push("/songSheet", {id});
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
                          <div style={{ padding: '12.5px',height:'150px' }} onClick={()=>{
                              console.log(dataItem.id);
                              this.goSongSheet(dataItem.id)
                          }}>
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

export default withRouter(ComSingsList);
