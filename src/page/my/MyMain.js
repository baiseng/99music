import React from "react";
import ComMainNavBar from '../../components/ComMainNavBar'
import ComGrid from './components/ComGrid'
import ComMyList from "./components/ComMyList";
import ComSingsSet from "./components/ComSingsSet";
class MyMain extends React.Component {
    render() {
        return (
            <div>
                <ComMainNavBar/>
                <ComGrid/>
                <div>
                    <ComMyList/>
                    <ComSingsSet/>
                </div>
            </div>
        )
    }
}

export default MyMain