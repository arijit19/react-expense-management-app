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
            <div className='box-layout'>
                <div className='box-layout__box'>
                    <h1 className='box-layout__title'>Expense Tracker</h1>
                    <p>Its time to keep your expense on track...</p>
                    <button onClick={this.handleLoginClick} className='button'>Login with Google</button>
                </div>
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