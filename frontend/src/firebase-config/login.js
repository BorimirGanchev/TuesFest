import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export const login = () => {
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((userCredit) => {
      console.log(userCredit);
    });
};
