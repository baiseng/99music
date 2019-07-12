import React from "react";
import ComNavBar from '../../components/ComNavBar'
import ComMy from "./components/ComMy";
class AccountMain extends React.Component {
    render() {
        return (
            <div>
                <ComNavBar/>
                <ComMy/>
            </div>
        )
    }
}

export default AccountMain