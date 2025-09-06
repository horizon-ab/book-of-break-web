import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"

import { signOut } from "firebase/auth"

const sampleLinks = [
    {
        "name" : "moves",
        "type" : "link",
        "resource" : "/home/moves"
    },
    {
        "name" : "profile",
        "type" : "link",
        "resource" : "/home/profile"
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
                            {sampleLinks.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.resource}>
                                            <span>{item.name}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}