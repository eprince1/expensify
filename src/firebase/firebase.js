import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyATL5S6hzWzdbWPQy0tcvf8xR1KPUKtk08",
    authDomain: "expensify-13ad6.firebaseapp.com",
    databaseURL: "https://expensify-13ad6.firebaseio.com",
    projectId: "expensify-13ad6",
    storageBucket: "expensify-13ad6.appspot.com",
    messagingSenderId: "593694585233"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };







// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Gas',
//     note: 'Exxon',
//     amount: 100,
//     createdAt: 5900
// });

// database.ref('notes').push({
//     title: 'To do',
//     body: 'go for run'
// });

// const firebaseNotes = {
//     notes: {
//         alksdjf: {
//             title: 'first note',
//             body: 'this is my note'
//         },
//         sdfjdsk: {
//             title: 'second note',
//             body: 'this is my 2nd note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'this is my note'
// }, {
//     id: '15',
//     title: 'note 2',
//     body: 'this is my 2nd note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref().once('value')
// .then((snapshot) => {
//     const val = snapshot;
//     console.log(val);
// }).catch((e) => {
//     console.log('Error: ', e);
// });

// database.ref().set({
//     name: 'Eitan Prince',
//     age: 20,
//     job: 'Software Engineer',
//     married: true,
//     location: {
//         city: 'College Park',
//         country: 'US'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     job: 'Game Developer'
// });

// database.ref().set(null);

// database.ref('married').remove().then(() => {
//     console.log('Successfully Removed');
// }).catch((e) => {
//     console.log('Did not remove', e);
// });