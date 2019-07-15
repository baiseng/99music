import React from "react";
import ComMainNavBar from '../../components/ComMainNavBar'
import ComAccountHead from "./components/ComAccountHead";
import ComAccountList from "./components/ComAccountList";
class AccountMain extends React.Component {
    render() {
        return (
            <div>
                <ComMainNavBar/>
                <ComAccountHead/>
                <ComAccountList/>
            </div>
        )
    }
}

export default AccountMain