import { useAppSelector } from "@/app/hooks";
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
	const auth = useAppSelector(a => a.auth)

    const [accounts, setAccounts] = useState([]);

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

	useEffect(() => {}, [])

    const handleAddAccount = async (e) => {
        e.preventDefault();

        try {
            const accountData = {
                name,
                email,
                password,
                phoneNo,
                subscription,
                type,
            };

            const response = await axios.post("/api/accounts", accountData);

            // Handle the response from the backend
            console.log(response.data); // Assuming the backend returns the created account

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
        <div className="p-12">
            <h1>Manage Accounts</h1>
            <form onSubmit={handleAddAccount} className="grid grid-cols-7">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="bg-opacity-0 bg-white"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white"
                    type="tel"
                    placeholder="Phone No"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                />
                <select
                    className="bg-opacity-0 bg-white"
                    value={subscription}
                    onChange={(e) => setSubscription(e.target.value)}
                >
                    <option value="" disabled>
                        Select Subscription
                    </option>
                    <option value="Normal">Normal</option>
                    <option value="Platinum">Platinum</option>
                </select>
                <select
                    value={type}
                    className="bg-opacity-0 bg-white"
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="" disabled>
                        Select Type
                    </option>
                    <option value="Watcher">Watcher</option>
                    <option value="Admin">Admin</option>
                </select>
                <button type="submit">Add Account</button>
            </form>
        </div>
    );
};

export default AccountsPage;
