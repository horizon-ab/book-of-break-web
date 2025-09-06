'use client'

import { useAuth } from "@/components/contexts/AuthContext";

import MovesView from "@/components/MovesView";

export default function MovesPage() {
    const { user } = useAuth();


    return (
        <div className="flex flex-col gap-10 p-10">
            <div>Moves</div>
            <div>Filters</div>
            <MovesView user={user}/>
        </div>
    )

    // Header
    // FiltersView
    // MovesView
}
