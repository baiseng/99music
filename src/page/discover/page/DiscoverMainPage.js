import React from "react";
import ComMainNavBar from '../../../components/ComMainNavBar'
import ComCarousel from '../components/ComCarousel'
import ComGrid from '../components/ComGrid'
import ComSingsList from '../components/ComSingsList'

class DiscoverMainPage extends React.Component {
    render() {
        return (
            <div>
                <ComMainNavBar/>
                <ComCarousel/>
                <ComGrid/>
                <ComSingsList/>
            </div>
        )
    }
}

export default DiscoverMainPage