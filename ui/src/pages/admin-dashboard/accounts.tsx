import { useAppSelector } from "@/app/hooks";
import Sidebar from "@/components/sidebar";
import { ArrowLeftIcon, FilmIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface AccountData {
    _id: string;
    name: string;
    email: string;
    users: {
        account: string;
        name: string;
        _id: string;
        createdAt: string;
    }[];
    password: string;
    phoneNo: string;
    subscription: string;
    type: string;
}

const AccountsPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [subscription, setSubscription] = useState("");
    const [type, setType] = useState("");
    const auth = useAppSelector((a) => a.auth);
    const [accounts, setAccounts] = useState<AccountData[]>([]);

    useEffect(() => {
        auth &&
            fetch(`http://localhost:3001/Accounts`, {
                headers: {
                    authorization: `Bearer ${auth.accessToken}`,
                },
            })
                .then((res) => res.json())
                .then((res) => setAccounts(res));
    }, [auth]);

    const refresh = () => {
        auth &&
            fetch(`http://localhost:3001/Accounts`, {
                headers: {
                    authorization: `Bearer ${auth.accessToken}`,
                },
            })
                .then((res) => res.json())
                .then((res) => setAccounts(res));
    };

    const handleAddAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!auth) return;
        try {
            const res = await fetch("http://localhost:3001/Accounts", {
                headers: {
                    authorization: `Bearer ${auth.accessToken}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    users: [],
                    password: password,
                    phoneNo,
                    subscription: subscription,
                    type: type,
                }),
            });

            await res.json();

            refresh();

            // Reset the form fields
            setName("");
            setEmail("");
            setPassword("");
            setPhoneNo("");
            setSubscription("");
            setType("");
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    return (
        <div className="p-12 ml-20">
            <Sidebar />
            <nav className="flex justify-around py-4">
            <Link href="/admin-dashboard" className="flex gap-2 items-center">
                    <div><ArrowLeftIcon className="stroke-white w-8 h-8" /></div>
                    <div>Back</div>
                </Link>
                <Link href="/admin-dashboard/accounts" className="flex gap-2 items-center">
                    <div><UserIcon className="stroke-white w-8 h-8" /></div>
                    <div>Manage Accounts</div>
                </Link>
                <Link href="/admin-dashboard/movies" className="flex gap-2 items-center">
                    <div><FilmIcon className="stroke-white w-8 h-8" /></div>
                    <div>Manage Movies</div>
                </Link>
            </nav>
            <h1>Manage Accounts</h1>
            <form onSubmit={handleAddAccount} className="grid grid-cols-7 gap-1">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="bg-opacity-0 bg-white outline-none"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white outline-0"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white outline-0"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white outline-0"
                    type="tel"
                    placeholder="Phone No"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                />
                <select
                    className="bg-opacity-0 bg-white outline-none"
                    value={subscription}
                    onChange={(e) => setSubscription(e.target.value)}
                >
                    <option value="" disabled>
                        Select Subscription
                    </option>
                    <option value="Normal" className="bg-black">Normal</option>
                    <option value="Platinum" className="bg-black">Platinum</option>
                </select>
                <select
                    value={type}
                    className="bg-opacity-0 bg-black"
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="" disabled>
                        Select Type
                    </option>
                    <option value="Watcher" className="bg-black">Watcher</option>
                    <option value="Admin" className="bg-black">Admin</option>
                </select>
                <button type="submit">Add Account</button>
            </form>
            <div className="my-10">
                <div className="grid grid-cols-7">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Phone</div>
                    <div>Subscription</div>
                    <div>Type</div>
                    <div className="text-center col-span-2">Actions</div>
                </div>
                {accounts.map((a) => (
                    <div key={a._id} className="grid grid-cols-7">
                        <div>{a.name}</div>
                        <div>{a.email}</div>
                        <div>{a.phoneNo}</div>
                        <div>{a.subscription}</div>
                        <div>{a.type}</div>
                        <div
                            className="text-blue-600 cursor-pointer"
                            onClick={async () => {
                                if (!auth)
                                    return;

                                const res = await fetch(
                                    `http://localhost:3001/Accounts/update/${a._id}`,
                                    {
                                        headers: {
                                            authorization: `Bearer ${auth.accessToken}`,
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            name: name,
                                            email: email,
                                            users: [],
                                            password: password,
                                            phoneNo,
                                            subscription: subscription,
                                            type: type,
                                        }),
                                        method: "POST",
                                    }
                                );

                                await res.json();
                                refresh();
                            }}
                        >
                            Edit
                        </div>
                        <div
                            className="text-rose-600 cursor-pointer"
                            onClick={async () => {
                                if (!auth)
                                    return;

                                const res = await fetch(
                                    `http://localhost:3001/Accounts/delete/${a._id}`,
                                    {
                                        headers: {
                                            authorization: `Bearer ${auth.accessToken}`,
                                            "Content-Type": "application/json",
                                        },
                                        method: "POST",
                                    }
                                );

                                await res.json();
                                refresh();
                            }}
                        >
                            Delete
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccountsPage;
