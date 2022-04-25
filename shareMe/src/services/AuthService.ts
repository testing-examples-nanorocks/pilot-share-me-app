import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import { IRoute } from "../interfaces/IRoute";
import { app } from './../auth/firebase'
import { setStorage, clearStorage } from './../utils/localStorage'

export const LoginApiCall = (credentials: { email: string, password: string }, navigate: NavigateFunction) => {
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

export const LogoutApiCall = (navigate: NavigateFunction) => {
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

export const getCurrentApiCall = (navigate: NavigateFunction, item: IRoute) => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {          
            setStorage('user', user)
            // if user exist add to redux storage
            return
        }
        
        // User is signed out
        clearStorage()

        if (item.routeName !== '/') {
            navigate('/')
        }
    });
} 