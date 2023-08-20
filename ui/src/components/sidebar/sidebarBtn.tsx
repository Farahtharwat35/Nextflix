import Link from "next/link";
import { UrlObject } from "url";

interface Props {
    active?: boolean;
    children: JSX.Element;
    label: string;
    href: UrlObject | string;
}

const SidebarButton: React.FC<Props> = ({ active, children, label, href }) => {
    return (
        <Link href={href}>
            <button
                className={`${
                    active ? "stroke-indigo-700" : "stroke-white hover:stroke-indigo-500"
                } flex justify-center items-center w-full relative group`}
            >
                {children}
                <div className="z-40 origin-left whitespace-nowrap group-hover:opacity-100 group-hover:scale-100 transition-all ease-in duration-200 absolute left-full py-1 px-2 bg-slate-950 ml-1 text-sm rounded-md border-2 border-solid border-indigo-700 scale-0 opacity-0">
                    {label}
                </div>
            </button>
        </Link>
    );
};

export default SidebarButton;
