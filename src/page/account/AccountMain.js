import React from "react";
import ComNavBar from '../../components/ComNavBar'
import ComAccountHead from "./components/ComAccountHead";
import ComAccountList from "./components/ComAccountList";
class AccountMain extends React.Component {
    render() {
        return (
            <div>
                <ComNavBar/>
                <ComAccountHead/>
                <ComAccountList/>
            </div>
        )
    }
}

export default AccountMain