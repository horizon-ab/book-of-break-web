'use client'

import { useAuth } from "./contexts/AuthContext"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { User } from "firebase/auth"

import { signOut } from "@/lib/auth"

const loggedInLinks = [
    {
        "name" : "moves",
        "type" : "link",
        "link" : "/home/moves",
        "function" : () => {}
    },
    {
        "name" : "profile",
        "type" : "link",
        "link" : "/home/profile",
        "function" : () => {}
    },
    {
        "name" : "sign out",
        "type" : "function",
        "link" : "/",
        "function" : () => signOut()
    }
]

const loggedOutLinks = [
    {
        "name" : "login",
        "type" : "link",
        "link" : "/login",
        "function" : () => {}
    }
]



// fix the damn type later
export function AppSideBar() {
    const { user }: { user: User | null} = useAuth();

    let sidebarContent;

    if (!user) sidebarContent = loggedOutLinks;
    else sidebarContent = loggedInLinks;

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel asChild>
                        <a href="/">Book of Break</a>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarContent.map((item) => (
                                item.type == "link" ?
                                (<SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.link}>
                                            <span>{item.name}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                ) : (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton asChild>
                                        <button onClick={() => item.function}>
                                            <span>{item.name}</span>
                                        </button>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>)
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}