import {firebase} from '../firebase.js'

export const StartLoginAction = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return async function(){
        try {
            return await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            console.log(error); 
            return null;
        }
    }
}