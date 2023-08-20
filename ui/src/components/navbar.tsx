import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-20 right-0 h-16 bg-slate-950 flex gap-4 items-center">
            <div>
                <h2 className="font-bold text-2xl text-indigo-700">Nextflix</h2>
            </div>
            <div className="grow flex">
                <Link href="/categories">Categories</Link>
            </div>
        </nav>
    );
};

export default Navbar;
