// import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
// import { SidebarProvider } from "@/components/sidebar";
// import { Sidebar } from "@/components/ui/sidebar";
import Sidebar from "@/components/sidebar"
import InfoBar from "../components/infobar";


type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
    return (
        <div className="flex overflow-hidden h-screen">
            <Sidebar />
            <div className="w-full">
                <InfoBar />
                {props.children}</div>
        </div>
    );
};

export default Layout;
