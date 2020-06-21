import {firebase} from '../firebase.js';

export const StartLogoutAction = ()=> {
    return  async function(){
       try {
          return await firebase.auth().signOut();
       } catch (error) {
            console.log(error); 
            return null;
       }
    }
}