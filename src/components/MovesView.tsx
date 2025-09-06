import { User } from "firebase/auth";
import { listenMovesByUser } from "@/lib/firestore";
import { SetStateAction, useEffect, useState } from "react";

export default function MovesView(user: User) {
    const [moves, setMoves] = useState(null);

    if (!user) return <div>No user found!</div>

    useEffect(() => {
        let unsubscribe: () => void;

        const setupListener = async () => {
            unsubscribe = await listenMovesByUser(user, (newMoves: SetStateAction<null>) => {
                setMoves(newMoves);
            });
        }

        setupListener();

        return () => unsubscribe();
    }, [user]);

    return (
        <div className="grid grid-cols-5 gap-5">
            {moves && moves.map((move) => (
                <div>
                    
                </div>
            ))}
        </div>
    )

}