'use client'

import { useAuth } from "@/components/contexts/AuthContext";
import { User } from "firebase/auth";

export default function ProfilePage() {
    const { user }: { user: User | null} = useAuth();

    return (
        <div className="flex flex-col gap-10 p-10">
            <div>{user ? user.displayName : "Not signed in"}</div>
            <div>Bio</div>
        </div>
    )
}