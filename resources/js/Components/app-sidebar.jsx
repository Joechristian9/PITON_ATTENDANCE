import * as React from "react";
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import { FaRegUserCircle, FaUsers } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { FcCalendar } from "react-icons/fc";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: <FaRegUserCircle />,
    },
    teams: [
        {
            name: "Piton Attendance",
            logo: "/images/piton_logo.png",
            /* plan: "Enterprise", */
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: LuLayoutDashboard,
            isActive: true,
            items: [
                {
                    title: "Overview",
                    url: "#",
                },
                {
                    title: "Sanctions",
                    url: "#",
                },
                {
                    title: "Reports",
                    url: "#",
                },
            ],
        },
        {
            title: "Members",
            url: "#",
            icon: FaUsers,
            items: [
                {
                    title: "View Members",
                    url: "#",
                },
                {
                    title: "Add Member",
                    url: "#",
                },
            ],
        },
        {
            title: "Attendance",
            url: "#",
            icon: FcCalendar,
            items: [
                {
                    title: "Take Attendance",
                    url: "#",
                },
                {
                    title: "Attendance Logs",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        /* {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        }, */
    ],
};

export function AppSidebar({ ...props }) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
