import {firebase} from '../../firebase/firebase.js';

const AuthSelector = async function(){
    let val = false;
    await firebase.auth().onAuthStateChanged((user)=>{
        if(user)
            val = true;
        else
            val = false
    })
    return val;
}

export default AuthSelector;