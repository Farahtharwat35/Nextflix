import { logout } from "@/app/authSlice";
import { useAppDispatch } from "@/app/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

const DashboardPage = () => {
    const dispatch = useAppDispatch();
	const router = useRouter();

    return (
        <div className="p-8">
            <div className="flex mb-8">
                <h1 className="text-center text-3xl font-bold grow">
                    Admin Dashboard
                </h1>
                <button
				className="px-4 bg-blue-600 rounded-md"
                    onClick={() => {
                        dispatch(logout());
						router.push("/login")
                    }}
                >
                    Sign Out
                </button>
            </div>
            <nav className="flex justify-around">
                <Link href="/admin-dashboard/accounts">Manage Accounts</Link>
                <Link href="/admin-dashboard/users">Manage Users</Link>
                <Link href="/admin-dashboard/movies">Manage Movies</Link>
                <Link href="/admin-dashboard/series">Manage Series</Link>
            </nav>
        </div>
    );
};

export default DashboardPage;
