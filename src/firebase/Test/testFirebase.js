import expenses from '../Test/fixtures/Expense';
import {defaultfilters} from '../Test/fixtures/Filters';
import * as firebase from 'firebase';
import 'firebase/firebase-database';

const firebaseConfig = {
    apiKey: "AIzaSyA4ksjfsZnJpsXeqH3ub_RDZ0KNJ8TdsP0",
    authDomain: "expensetracker-edd29.firebaseapp.com",
    databaseURL: "https://expensetracker-edd29.firebaseio.com",
    projectId: "expensetracker-edd29",
    storageBucket: "expensetracker-edd29.appspot.com",
    messagingSenderId: "364134773012",
    appId: "1:364134773012:web:e5eb3eaf4e13db98af1201"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
//   firebase.database().ref().set({
//     expenses: 0,
//     filters: 0
// });
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const onExpensesValueChange = database.ref('expenses').on('value',(snapshot)=>{
    console.log(snapshot.val());
});

setTimeout(() => {
    database.ref('expenses/2').update({
        amount: 4000
    })
}, 4000);

setTimeout(() => {
    database.ref('expenses').off('value',onExpensesValueChange);
}, 8000);

setTimeout(() => {
    database.ref('expenses/2').update({
        amount: 5000
    })
}, 14000);
// expenses.map((expense)=> database.ref('expenses').push(expense));
// database.ref('filters').set({
//     startDate: 0,
//     endDate: 0,
//     text: '',
//     sortBy: 'date'
// });

// database.ref('expeneses/-M9seZmWe2dtGarEjAYI').remove();

// async function temp() {
//     try{
//         firebase.initializeApp(firebaseConfig);
//         // console.log("Start Data Saving"); 
//         // await firebase.database().ref().set({
//         //     expenses: expenses,
//         //     filters: defaultfilters
//         // });
//         // console.log("Data Saved"); 
//         // // await firebase.database().ref('filters').remove();
//         // // console.log("REMOVE Filters");
//         // await firebase.database().ref('filters').update({
//         //     text: "Rent"
//         // })
//         // const snapshot = await firebase.database().ref('filters').once('value');
//         // console.log(snapshot.val());
//         const database = firebase.database();
        // const onExpensesValueChange = database.ref('expenses').on('value',(snapshot)=>{
        //     console.log(snapshot.val());
        // });

//         setTimeout(() => {
//             database.ref('expenses/2').update({
//                 amount: 4000
//             })
//         }, 4000);

//         setTimeout(() => {
//             database.ref('expenses/2').off('value',onExpensesValueChange);
//             database.ref('expenses').off('value',onExpensesValueChange);
//             database.ref('expenses').off('value');
//         }, 8000);
        
//         setTimeout(() => {
//             database.ref('expenses/2').update({
//                 amount: 5000
//             })
//         }, 14000);
//         // const snapshot2 = await firebase.database().ref('expenses').once('value');
//         // console.log(snapshot2.val());
//     }
//     catch(er) {
//         console.log(`Error -->> ${er}`);
//     }
// }

// function setValue(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function add(a,b) {
//     let x =0;
//     await setValue(4000);
//     x = 40;
    
//     const t = x + a + b;
//     console.log(`Total : ${t}`);
// }

// add(10,10);

// temp();

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref('expenses').on('child_removed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
});

database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
});

database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
});
async function run() {
    const snapshot = await database.ref('expenses').once('value');
    database.ref('expenses').push(expenses[2]);
    // console.log(snapshot.val());
    snapshot.forEach((childSnapshot)=>{
        // console.log(childSnapshot.key);
        // console.log(childSnapshot.val().amount);
        const newExp = []
        newExp.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
        console.log(newExp);
        
    })
}
