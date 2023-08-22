import { logout, selectUser } from "@/app/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Avatar from "boring-avatars";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState<
        {
            id: string;
            name: string;
        }[]
    >();
    const auth = useAppSelector((s) => s.auth);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        if (auth) {
            if (!auth.accessToken) {
                window.location.reload();
            } else
                fetch("http://localhost:3001/Accounts/users", {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${auth.accessToken}`,
                    },
                })
                    .then((res) => res.json())
                    .then((res) =>
                        setUsers(
                            res.map((i: any) => ({ id: i._id, name: i.name }))
                        )
                    );
        }
    }, [auth]);

    if (users === undefined) {
        return (
            <div className="h-screen flex flex-col gap-8 items-center justify-center">
                <div className="relative flex items-center justify-center">
                    <div>Loading</div>
                    <div className="absolute animate-ping">Loading</div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col gap-8 items-center justify-center">
            <h2 className="text-4xl">MEEN??</h2>
            <div className="flex gap-8">
                {users.map((u) => (
                    <div
                        key={u.id}
                        className="group cursor-pointer"
                        onClick={() => {
                            dispatch(
                                selectUser({
                                    name: u.name,
                                    id: u.id,
                                })
                            );
                            router.push("/");
                        }}
                    >
                        <div className="h-20 w-20 border-solid border-2 border-white/0 group-hover:border-white/100 rounded-full transition-all ease-in">
                            <Avatar
                                size="100%"
                                name={u.name}
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
                        <div className="opacity-50 group-hover:opacity-100 text-center py-4 transition-all ease-in text-lg">
                            {u.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-4">
                <button className="rounded-full px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors ease-in border-solid border-2 border-white/10 hover:border-white/30" onClick={() => {
					dispatch(logout())
					router.push("/login")
				}}>
                    Sign Out
                </button>
                {users.length < 5 && (
                    <Link href="/users/add">
                        <button className="rounded-full px-6 py-2 bg-white/0 hover:bg-white/5 transition-colors ease-in border-solid border-2 border-white/40 hover:border-white/100 text-white/80 hover:text-white">
                            Add User
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Users;
