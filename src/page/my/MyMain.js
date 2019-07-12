import React from "react";
import ComNavBar from '../../components/ComNavBar'
import ComGrid from './components/ComGrid'
import ComMyList from "./components/ComMyList";
import ComSingsSet from "./components/ComSingsSet";
class MyMain extends React.Component {
    render() {
        return (
            <div>
                <ComNavBar/>
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