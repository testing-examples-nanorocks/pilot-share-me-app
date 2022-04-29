import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendEmailVerification } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import { IProfile, IRoute } from "@interfaces/_index";
import { app, db } from '@auth/firebase'
import { setStorage, clearStorage } from '@utils/localStorage'
import { collection, getDocs, addDoc, updateDoc, doc } from "@firebase/firestore";

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

export const FirebaseUpdateProfileApiCall = (profile: IProfile) => {
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


// CRUD FIREBASE

// Read from data from collections
export const FirebaseReadFromCollection = async (collectionName: string) => {
    const dataSet: any[] = []

    const querySnapshot = await getDocs(collection(db, collectionName));

    querySnapshot.forEach((doc) => {
       
        dataSet.push({ ...doc.data(), uid: doc.id })
    });

    return dataSet;
}


export const FirebaseAddDoc = async (collectionName: string, dataset: any) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), {...dataset});

        console.log("Document written with ID: ", docRef.id);

        return docRef.id;

    } catch (e) {
        console.error("Error adding document: ", e);
        return ""
    }
}

export const FirebaseUpdateDoc = async (collectionName: string, dataset: any, uid:string) => {
    try {
        await updateDoc(doc(db, collectionName, uid), dataset);
        return true
    } catch (e) {
        console.error("Error updating document: ", e);
        return false;
    }
}




// Add document to specific collection