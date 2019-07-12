import React from "react";
import ComNavBar from '../../components/ComNavBar'
import ComCarousel from './components/ComCarousel'
import ComGrid from './components/ComGrid'
import ComSingsList from './components/ComSingsList'

class DiscoverMain extends React.Component {
    render() {
        return (
            <div>
                <ComNavBar/>
                <ComCarousel/>
                <ComGrid/>
                <ComSingsList/>
                <ComSingsList/>
            </div>
        )
    }
}

export default DiscoverMain