const firebase = require('firebase');
require('firebase/firestore');


export class Firebase {

    constructor() {

        this._config ={

            // Initialize Firebase
                apiKey: "AIzaSyAFNlydL0geyNxo4f8HyTff8iR83cIgkjI",
                authDomain: "whasapp-clone-7dd5b.firebaseapp.com",
                databaseURL: "https://whasapp-clone-7dd5b.firebaseio.com",
                projectId: "whasapp-clone-7dd5b",
                storageBucket: "whasapp-clone-7dd5b.appspot.com",
                messagingSenderId: "724084870466"

        }

        this.init();

    }



    init() {

        if (!this._initialized) {

            firebase.initializeApp(this._config);

            firebase.firestore().settings({

                // timestampsInSnapshots: true

            });

            this._initialized = true;

        }

    }


    static db() {

        return firebase.firestore();    

    }


    static hd() {

        return firebase.storage();

    }


    initAuth() {

        return new Promise((s, f) => {

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(result => {
                    let token = result.credential.accessToken;
                    let user = result.user;
                    s({
                        user,
                        token
                    });
                })
                .catch(err =>{
                    f(err);
                });

        });

    }

}