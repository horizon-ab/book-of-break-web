

import { auth } from "@/lib/clientApp"
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged as _onAuthStateChanged, onIdTokenChanged as _onIdTokenChanged } from "firebase/auth"

// Probably should add an actual type

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        const userCred = await signInWithPopup(auth, provider);
        console.log(userCred.user.uid);
    } catch (error) {
        console.log("Error during Google sign in:", error);
    }

}
export async function signOut() {
    try {
        return auth.signOut();
    } catch (error) {
        console.log("Error during sign out:", error);
    }
}

