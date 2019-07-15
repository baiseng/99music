import React from 'react'
import {Grid, WhiteSpace,List} from 'antd-mobile';
import ComReturnNavBar from "../../components/ComReturnNavBar";
import axios from 'axios'

const Item=List.Item;
const Brief=Item.Brief;

const mData=[
    {
        icon: 'iconfont icon-icon-comment',
        text: 0,
    },
    {
        icon: 'iconfont icon-share',
        text: 0,
    },
    {
        icon: 'iconfont icon-download',
        text: `下载`,
    },
    {
        icon: 'iconfont icon-cc-check-circle',
        text: `多选`,
    }
];


class SongSheet extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
            playlist:{
                id: 2880791583,
                name:'听歌识人：哪一首故事，是你的故事',
                coverImgUrl: "http://p1.music.126.net/2XWY_6zJ9vAsnXIRCYQeiw==/109951164208685267.jpg",
                description:'那个与你心有灵犀一起听歌的人你遇见了吗？ 你们安静地不说话，无声地用音乐交流。 要是遇见那样一个人，该多好啊。 想把那些我爱过的歌都变成我们共同的经历，那样的话，每次我们一听到那首歌就会想起对方啦。 封面图源网络',
                playCount:'1347598',
                creator:{
                    nickname:'网易云音乐',
                    avatarUrl: "http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg"
                },
                ordered:true,
                commentCount:332,
                shareCount:77,
                trackCount:40,
                subscribed:false,
                subscribedCount:18137,
                tracks:[
                    {
                        id: 571338279,
                        name: "往后余生",
                        alia: [
                            "原唱：马良"
                        ],
                        ar: [
                            {
                                id: 14312549,
                                name: "王贰浪",
                            }
                        ],
                        al: {
                            id: 39591091,
                            name: "往后余生",
                            picUrl: "http://p2.music.126.net/hTiVEeQTUSsc-YGF3o6ItQ==/109951163337847600.jpg",
                        },
                    },
                ]

            }
        }
    }
    componentWillMount() {

        axios.get('/playlist/detail?id=2880791583').then(({data})=>{
            if (data.code===200){
                this.setState({
                    playlist:data.playlist
                });
                if (this.state.playlist) {
                    mData[0].text=this.state.playlist.commentCount;
                    mData[1].text=this.state.playlist.shareCount;
                }
            }
        });
    }

    render() {
        return(
            <div>

                {/* 上半部分阴影处理 */}
                <div style={{position:"relative",overflow:"hidden"}}>
                    <div style={{backgroundImage:'url('+this.state.playlist.coverImgUrl+')',backgroundSize:'100% 100%',filter:'blur(30px)',height:'304px'}}/>
                    <div style={{position:"absolute",left:0,top:0,background:'rgba(0,0,0,0.2)'}}>

                        {/*  tittle  标题部分  */}
                        <ComReturnNavBar style={{background:'rgba(0,0,0,0)',color:'white'}} title={'歌单'}/>

                        {/*  userHead  创建歌单者信息 */}
                        <div style={{margin:'10px 0'}}>
                            <div style={{float:"left",width:'42%',padding:'10px',position:"relative"}}>
                                <img src={this.state.playlist.coverImgUrl} style={{width:'100%'}} alt={''}/>
                                <span className={'iconfont icon-play'} style={{position:"absolute",right:'15px',fontSize:'14px'}}>{Math.floor(this.state.playlist.playCount/10000)+'万'}</span>
                            </div>
                            <div style={{float:'right',width:'58%',padding:'10px'}}>
                                <p style={{fontSize:'20px',margin:'0'}}>{this.state.playlist.name}</p>
                                <div style={{padding:'10px 0'}}>
                                    <div style={{display:'inline-block',height:'30px'}}>
                                        <img src={this.state.playlist.creator.avatarUrl} style={{height:'30px',borderRadius:'50%',verticalAlign:'middle'}} alt={''}/>
                                    </div>
                                    <span style={{display:'inline-block',lineHeight:'30px',paddingLeft:'10px'}}>{this.state.playlist.creator.nickname}<i style={{paddingLeft:'5px'}} className={'iconfont icon-right'}/></span>
                                </div>
                                <div>
                                    <div style={{margin:0,fontSize:'14px',display:"inline-block", float:"left",width:'80%'}}>{this.state.playlist.description.slice(0,20)}</div>
                                    <div className={'iconfont icon-right'} style={{display:"inline-block" ,float:"right",width:'20%',lineHeight:'32px',paddingLeft:'10px'}}/>
                                </div>
                            </div>
                        </div>
                        <div style={{clear:"both"}}/>

                        {/*  aboutCount  点赞与分享数量 */}
                        <div className={'zlTouMing'} >
                            <Grid data={mData}
                                  hasLine={false}
                                  columnNum={4}
                                  style={{height:'90px'}}
                                  square={false}
                                  renderItem={(dataItem,i) =>(
                                      <div style={{ margin: '5px' ,height:'50px'}}>
                                          <div style={{margin:'0 auto',height:'40px',width:'40px'}}>
                                              <i className={dataItem.icon} style={{fontSize:'25px',color:'white',lineHeight:'40px'}}/>
                                          </div>
                                          <div style={{ color: 'white', fontSize: '10px', marginTop: '2px' }}>
                                              <span>{i===0?this.state.playlist.commentCount:(i===1?this.state.playlist.shareCount:dataItem.text)}</span>
                                          </div>
                                      </div>
                                  )}
                            />
                        </div>
                    </div>
                </div>

                {/*  songList  */}
                <div>
                    {this.state.playlist.tracks.map((v,i)=>{
                        return (
                            <div key={v.id}>
                                <WhiteSpace size={'md'}/>
                                <Item
                                    thumb={
                                        (<div>{i+1}</div>)
                                    }
                                    multipleLine
                                    extra={(
                                        <div style={{color:'#888',width:'70px',float:'right'}}>
                                            <i className={'iconfont icon-video'} style={{padding:'5px 10px',fontSize:'24px'}}/>
                                            <i className={'iconfont icon-2601caidan2'} style={{padding:'5px 0 5px 10px', fontSize:'26px'}}/>
                                        </div>
                                    )}
                                    onClick={() => {}}
                                >
                                    {v.name}<span>{v.alia.length>0?'('+v.alia+')':''}</span>
                                    <Brief>
                                        {['VIP','独家','SQ'].map((v,i)=>
                                            <div key={i} style={{display:"inline-block",color:"red", border:'1px solid red',borderRadius:'4px',height:'15px',fontSize:'12px',lineHeight:'15px',padding:'0 4px',transform:'scale(0.8)'}}>{v}</div>
                                        )}
                                        {v.ar.map((vv)=>vv.name)+'-'+v.al.name}
                                    </Brief>
                                </Item>
                            </div>
                        )
                    })}
                </div>


            </div>
        )
    }
}

export default SongSheet;