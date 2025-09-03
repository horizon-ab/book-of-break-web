import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu,  } from "./ui/sidebar"

import { signOut } from "firebase/auth"

const sampleLinks = [
    {
        "name" : "moves",
        "type" : "link",
        "resource" : "/home/moves"
    }
]



// fix the damn type later
export function AppSideBar(links: any) {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Book of Break</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}