import { AppSidebar } from "@/components/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { Head } from "@inertiajs/react";

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <Head title="Dashboard"></Head>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                    </div>
                </header>
                <div className="flex w-full justify-center items-center">
                    <div className="container flex w-full justify-center items-center"></div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
