import React from "react";
import { Flex } from 'antd-mobile';
import ComCart from "../components/ComCart";

const pubList=[
    {icon:'iconfont icon-edit',text:'发动态'},
    {icon:'iconfont icon-video1',text:'发布视频'}
];

class Dynamics extends React.Component {
    render() {
        return (
            <div>
                <Flex style={{padding:'10px',background:'white'}}>
                    {pubList.map((v,i)=>{
                        return (
                            <Flex.Item key={i}>
                                <div style={{textAlign: 'center',height: '30px',lineHeight: '30px',width: '100%'}}>
                                    <i className={v.icon} style={{padding:'0 10px'}}/>{v.text}
                                </div>
                            </Flex.Item>
                        )
                    })}
                </Flex>
                <ComCart/>
                <ComCart/>
            </div>
        )
    }
}

export default Dynamics;

