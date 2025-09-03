import { collection, addDoc, getDocs, query, where, limit } from "firebase/firestore"

import { getAuthenticatedAppForUser } from "./serverApp"
import { db } from "@/lib/clientApp"

import { Move } from "@/lib/types"
import { User } from "firebase/auth"


const currentCollection = "test-moves"
const moveLimit = 20

export async function addTestMove() {

    try {

        const docRef = await addDoc(collection(db, currentCollection), {
            name: "3-step",
            description: "Focus on the sweep",
            tags: ["footwork", "step"],
        });

        console.log("Document written with ID: ", docRef.id);

    } catch (error) {
        console.log("addTestMove() failed: ", error);
    }

}

// Returns the id of the new move
export async function addMove(user: User, move: Move) {
    try {

        // Validations
        if (!user) throw Error("No user specified");

        const docRef = await addDoc(collection(db, currentCollection), {
            ...move,
            uid: user.uid
        })
        return docRef.id;
    } catch (error) {
        console.log("addMove() failed: ", error);
        return null;
    }
}

export async function getMovesByUser(user: User) {
    
    try {

        // Validations
        if (!user) throw Error("No user specified");

        const getMovesByUserQuery = query(
            collection(db, currentCollection),
            where("uid", "==", `${user.uid}`),
            limit(moveLimit),
        )

    } catch (error) {
        console.log("getMovesByUser() failed: ", error);
        return null;
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