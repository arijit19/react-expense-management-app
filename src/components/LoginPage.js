import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import  { SetAuthAction } from '../Redux/Actions/AuthActions.js'
import {StartLoginAction} from '../firebase/Actions/LoginAction.js'

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick = async function() {
        const res = await this.props.startLoginAction();
        console.log(res.user.uid);
        
        if(res !== null) {
            this.props.setAuthAction({UID: res.user.uid});
            this.props.history.push('/dashboard');
        }  
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLoginClick}>Login</button>
            </div>
        )        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        startLoginAction: ()=> dispatch(StartLoginAction()),
        setAuthAction: (data)=> dispatch(SetAuthAction(data))
    }
}

export default connect(undefined,mapDispatchToProps)(withRouter(LoginPage));