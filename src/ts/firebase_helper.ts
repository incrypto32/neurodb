import router from '@/router';
import firebase from 'firebase/app';
import {firebaseConfig} from './configs/firebase'
import 'firebase/auth'
// import 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


firebase.initializeApp(firebaseConfig)

export class Fire {



    auth = firebase.auth()
    sessionPersistence=     firebase.auth.Auth.Persistence.SESSION


    async loginWithEmailAndPassword(email: string, password: string): Promise<string> {

        try {
            const result = await this.auth.signInWithEmailAndPassword(email, password)
            router.push({path:'/'})
            return ""
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                return "Wrong password email combination"
            }
            else {
                return "An error occured please try again"
            }
        }


    }

    async getToken(): Promise<string|undefined>{
        return this.auth.currentUser?.getIdToken()
    }



}

export const fire = new Fire()
fire.auth.setPersistence(fire.sessionPersistence)


