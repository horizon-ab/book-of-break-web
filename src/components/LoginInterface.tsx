'use client'

import { Button } from "@/components/ui/button"

import { signInWithGoogle, signOut } from "@/lib/auth"
import { addTestMove, readTestMoves } from "@/lib/firestore"

import { redirectToPath } from "@/lib/actions"

export default function LoginInterface() {

    const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        signInWithGoogle();
        redirectToPath('/home/moves')
    }

    const handleSignOut = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        signOut();
    }

    const handleAddTestMove = (event: React.MouseEvent<HTMLButtonElement>) => {
        addTestMove();
    }

    const handleReadTestMoves = (event: React.MouseEvent<HTMLButtonElement>) => {
        readTestMoves();
    }

    return (
        <div className="flex flex-col gap-10">
            <Button onClick={handleSignIn}>Log In</Button>
            <Button onClick={handleSignOut}>Log Out</Button>
            <Button onClick={handleAddTestMove}>Add Test Move</Button>
            <Button onClick={handleReadTestMoves}>Read Test Move</Button>
        </div>
    )
}