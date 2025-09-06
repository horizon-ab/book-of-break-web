import { User } from "firebase/auth";
import { listenMovesByUser } from "@/lib/firestore";
import { SetStateAction, useEffect, useState } from "react";

import { MoveWithId } from "@/lib/types";

export default function MovesView({ user }: {user: User}) {
    const [moves, setMoves] = useState<MoveWithId[] | null>(null);

    useEffect(() => {
        let unsubscribe: () => void;

        const setupListener = async () => {
            unsubscribe = await listenMovesByUser(user, (newMoves: MoveWithId[]) => {
                setMoves(newMoves);
            });
        }

        setupListener();

        return () => unsubscribe();
    }, [user]);

    if (!user) return <div>No user found!</div>

    return (
        <div className="grid grid-cols-5 gap-5">
            {moves && moves.map((move) => (
                <div key={move.id} className="border border-2 p-5">
                    <div className="text-lg">{move.name}</div>
                    <div className="text-md">{move.description}</div>
                </div>
            ))}
        </div>
    )

}