import * as React from "react";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function TeamSwitcher({ teams }) {
    const [activeTeam] = React.useState(teams[0]);

    if (!activeTeam) {
        return null;
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="cursor-default bg-transparent hover:bg-transparent focus-visible:ring-0"
                >
                    {/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <activeTeam.logo className="size-4" />
                    </div> */}
                    <div className="flex items-center gap-2">
                        <img
                            src={activeTeam.logo}
                            alt="Team Logo"
                            className="h-9 w-9 rounded-full"
                        />
                        <div className="text-lg font-semibold truncate">
                            {activeTeam.name}
                        </div>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
