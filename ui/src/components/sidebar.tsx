import LogoIcon from "@/assets/logo";
import {
    Cog6ToothIcon,
    FilmIcon,
    HomeIcon,
    TvIcon,
} from "@heroicons/react/24/outline";
import SidebarButton from "./sidebar/sidebarBtn";
import Avatar from "boring-avatars";
import { useRouter } from "next/router";

const Sidebar = () => {
    const router = useRouter();

	console.log(router.pathname.includes("/movies"))

    return (
        <div className="fixed top-0 left-0 h-full box-border w-20 bg-slate-950 pb-8 flex flex-col gap-16 items-center z-40">
            <div className="h-16 w-full flex items-center justify-center">
                <LogoIcon className="fill-indigo-700 w-8 h-8" />
            </div>
            <div className="flex flex-col gap-12 w-full">
                <SidebarButton
                    active={router.pathname === "/"}
                    label="Home"
                    href="/"
                >
                    <HomeIcon className="w-6 h-6 stroke-inherit" />
                </SidebarButton>
                <SidebarButton
                    active={router.pathname.includes("/shows")}
                    label="TV Shows"
                    href="/shows"
                >
                    <TvIcon className="w-6 h-6 stroke-inherit" />
                </SidebarButton>
                <SidebarButton
                    active={router.pathname.includes("/movies")}
                    label="Movies"
                    href="/movies"
                >
                    <FilmIcon className="w-6 h-6 stroke-inherit" />
                </SidebarButton>
                <SidebarButton
                    active={router.pathname.includes("/settings")}
                    label="Settings"
                    href="/settings"
                >
                    <Cog6ToothIcon className="w-6 h-6 stroke-inherit" />
                </SidebarButton>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 flex items-center justify-center">
                <div className="w-12 p-1 border-solid border-2 border-indigo-700 rounded-full">
                    <Avatar
                        size="100%"
                        name="Etsh"
                        variant="beam"
                        colors={[
                            "#92A1C6",
                            "#146A7C",
                            "#F0AB3D",
                            "#C271B4",
                            "#C20D90",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
