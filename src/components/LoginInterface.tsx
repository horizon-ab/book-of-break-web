'use client'

import { Button } from "@/components/ui/button"

import { signInWithGoogle, signOut } from "@/lib/auth"

export default function LoginInterface() {

    const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        signInWithGoogle();
    }

    const handleSignOut = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        signOut();
    }

    return (
        <div className="flex flex-col gap-10">
            <Button onClick={handleSignIn}>Log In</Button>
            <Button onClick={handleSignOut}>Log Out</Button>
        </div>
    )
}