

import { auth } from "@/lib/clientApp"
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged as _onAuthStateChanged, onIdTokenChanged as _onIdTokenChanged } from "firebase/auth"

// Probably should add an actual type
export function onAuthStateChanged(cb: any) {
    return _onAuthStateChanged(auth, cb)
}

export function onIdTokenChanged(cb: any) {
    return _onIdTokenChanged(auth, cb);
}

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider);
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