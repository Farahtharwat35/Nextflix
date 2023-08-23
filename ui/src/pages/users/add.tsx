import { useAppSelector } from "@/app/hooks";
import InputField from "@/components/forms/input";
import Avatar from "boring-avatars";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

const AddUsers = () => {
    const [name, setName] = useState("");
	const auth = useAppSelector(s => s.auth)
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (name !== "") {
			fetch("http://localhost:3001/Accounts/users", {
				method: "POST",
				headers: {
					authorization: `Bearer ${auth!.accessToken}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name
				})
			}).then(res => res.json())
			.then(() => router.push("/users"))
		}
	}

    return (
        <motion.div className="h-screen max-h-full p-4 lg:p-6 flex justify-center items-center">
            <div className="group cursor-pointer">
                <div className="flex justify-center">
                    <div className="h-20 w-20 border-solid border-2 border-white/0 group-hover:border-white/100 rounded-full transition-all ease-in">
                        <Avatar
                            size="100%"
                            name={name}
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
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Name"
                        id="name"
                        value={name}
                        type="text"
                        style="background"
                        onChange={setName}
                    />
                    <div className="flex justify-center items-center">
                        <button
                            className={`${"bg-indigo-600"} py-0 px-4 rounded-full border-indigo-500 border-2 border-solid mt-2 flex justify-center items-center h-8 box-content`}
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default AddUsers;
