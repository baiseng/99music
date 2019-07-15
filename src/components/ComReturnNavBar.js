import React from 'react';
import { NavBar, Icon } from 'antd-mobile';


class ComReturnNavBar extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
            style:{
                color:'black'
            },
            title:'标题',
            ...this.props
        }
    }
    render() {
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    style={this.state.style}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                ><span style={{color:this.state.style.color}}>{this.state.title}</span></NavBar>
            </div>
        )
    }
}

export default ComReturnNavBar