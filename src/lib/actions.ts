'use server'

import { redirect } from 'next/navigation'

export async function redirectToPath(path: string) {
    redirect(path);
}