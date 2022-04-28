import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendEmailVerification } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import { IProfile, IRoute } from "@interfaces/_index";
import { app } from '@auth/firebase'
import { setStorage, clearStorage } from '@utils/localStorage'

export const FirebaseLoginApiCall = (credentials: { email: string, password: string }, navigate: NavigateFunction) => {
    const { email, password } = credentials;
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setStorage('user', userCredential.user)
            navigate('/dashboard')
            return
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage);
        });
}

export const FirebaseLogoutApiCall = (navigate: NavigateFunction) => {
    const auth = getAuth(app);
    signOut(auth).then(() => {
        clearStorage()
        navigate('/')
        return
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
    });
}

export const FirebaseGetCurrentApiCall = (navigate: NavigateFunction, item: IRoute) => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setStorage('user', user)
            // if user exist add to redux storage
            return null
        }

        // User is signed out
        clearStorage()

        if (item.routeName !== '/') {
            navigate('/')
        }
    });
} 

export const FirebaseUpdateProfileApiCall = (profile: IProfile ) => {
    const auth: any = getAuth(app);

    updateProfile(auth.currentUser, {
        ...profile
    }).then((res) => {
        console.log(res);
        
        alert("Profile updated")
        // setStorage('user', user)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
    });
} 

export const FirebaseVerifyProfileApiCall = () => {
    const auth: any = getAuth(app);

   sendEmailVerification(auth.currentUser)
  .then(() => {
    alert("Email verification sent!")
  });
} 