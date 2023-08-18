interface Props {
    active?: boolean;
    children: JSX.Element;
	label: string;
}

const SidebarButton: React.FC<Props> = ({ active, children, label }) => {
    return (
        <button
            className={`${
                active ? "stroke-indigo-700" : "stroke-white"
            } flex justify-center items-center w-full relative group`}
        >
            {children}
			<div className="origin-left whitespace-nowrap group-hover:opacity-100 group-hover:scale-100 transition-all ease-in duration-200 absolute left-full py-1 px-2 bg-slate-950 ml-1 text-sm rounded-md border-2 border-solid border-indigo-700 scale-0 opacity-0">{label}</div>
        </button>
    );
};

export default SidebarButton;
