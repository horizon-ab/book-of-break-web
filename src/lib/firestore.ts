import { collection, addDoc, getDocs } from "firebase/firestore"

import { getAuthenticatedAppForUser } from "./serverApp"
import { db } from "@/lib/clientApp"

import { Move } from "@/lib/types"


const currentCollection = "test-moves"

export async function addTestMove() {

    try {

        const docRef = await addDoc(collection(db, currentCollection), {
            name: "6-step",
            description: "Basic footwork movement",
            tags: ["footwork", "step"],
        });

        console.log("Document written with ID: ", docRef.id);

    } catch (error) {
        console.log("addTestMove() failed: ", error);
    }

}

// Returns the id of the new move
export async function addMove(move: Move) {
    try {
        const docRef = await addDoc(collection(db, currentCollection), {
            ...move,
            uid: "user-id"
        })
        return docRef;
    } catch (error) {
        console.log("addMove() failed: ", error);
    }
}

export async function readTestMoves() {

    try {

        const querySnapshot = await getDocs(collection(db, currentCollection));

        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        })

    } catch (error) {
        console.log("readTestMoves() failed: ", error)
    }
}