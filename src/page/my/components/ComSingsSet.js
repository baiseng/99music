import React from "react";
import { List} from 'antd-mobile';
const Item = List.Item;
const Brief=Item.Brief;

class ComSingsSet extends React.Component {
    constructor(prop){
        super(prop);
        this.state={
            data:[
                {content:'我喜欢的音乐',icon:'https://p2.music.126.net/Q4slNnbLEC4p9h9p7J-EmA==/109951163110340964.jpg?param=40y40',subtitle:'140首'},
                {content:'是否还会红着脸',icon:'https://p2.music.126.net/a2b-wcVrNbB1Ktum8q-uyw==/7870304232586557.jpg?param=140y140',subtitle:'17首'},
            ],
            data1:[
                {content:'那位小姐姐',icon:'https://p2.music.126.net/Uea1qJMVzWpeXxlNY5ofLg==/109951164202461888.jpg?param=140y140',subtitle:'532首，by 众人推'},
            ],

        }
    }

    render() {
        return (<div>
            <div style={{background:'white',width:'100%',height:'50px',lineHeight:'50px',fontSize:'18px',paddingLeft:'20px',marginTop:'10px',boxSizing:"border-box"}}>
                <div style={{float:'left'}}>我创建的歌单(2)</div>
                <div style={{float:'right'}}><i/></div>
            </div>
            <List style={{clear:"both"}}>
                {this.state.data.map((v,i)=>{
                    return (
                        <Item
                            style={{height:'70px'}}
                            key={i}
                            thumb={(<img style={{width:'50px',height:'50px',borderRadius:'5px'}} src={v.icon} alt={'img'}/>)}
                            arrow="horizontal"
                            onClick={() => {}}
                        >{v.content}<Brief>{v.subtitle}</Brief></Item>
                    )
                })}
            </List>
            <div style={{background:'white',width:'100%',height:'50px',lineHeight:'50px',fontSize:'18px',paddingLeft:'20px',marginTop:'10px',boxSizing:"border-box"}}>
                <div style={{float:'left'}}>我收藏的歌单(1)</div>
                <div style={{float:'right'}}><i/></div>
            </div>
            <List style={{clear:"both"}}>
                {this.state.data1.map((v,i)=>{
                    return (
                        <Item
                            style={{height:'70px'}}
                            key={i}
                            thumb={(<img style={{width:'50px',height:'50px',borderRadius:'5px'}} src={v.icon} alt={'img'}/>)}
                            arrow="horizontal"
                            onClick={() => {}}
                        >{v.content}<Brief>{v.subtitle}</Brief></Item>
                    )
                })}
            </List>
        </div>);
    }
}

export  default ComSingsSet