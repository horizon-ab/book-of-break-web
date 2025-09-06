'use client'

import { useAuth } from "@/components/contexts/AuthContext";

import MovesView from "@/components/MovesView";
import { User } from "firebase/auth";

export default function MovesPage() {
    const { user }: { user: User | null} = useAuth();


    return (
        <div className="flex flex-col gap-10 p-10">
            <div>My Moves</div>
            <div>Filters</div>
            {user ? <MovesView user={user}/> : <div>No user found!</div>}
        </div>
    )

    // Header
    // FiltersView
    // MovesView
}
