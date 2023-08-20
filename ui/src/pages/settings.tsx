import InputField from "@/components/forms/input";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Avatar from "boring-avatars";
import { useState } from "react";

const Settings = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("Etsh");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    return (
        <div className="h-screen mt-16 ml-20 box-border flex justify-center items-center gap-4 overflow-y-auto">
            <Sidebar />
            <Navbar />
            <div className="flex border-solid border-slate-300 gap-4">
                <div>
                    <div className="w-24 h-24 p-1 border-solid border-2 border-indigo-700 rounded-full">
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
                <div>
                    <form className="border p-4 flex gap-8 flex-col">
                        <div className="flex gap-4 flex-col">
                            <InputField
                                label="Name"
                                id="name"
                                type="text"
                                onChange={setName}
                                value={name}
								style="background"
                            />
                            <InputField
                                label="Email"
                                id="email"
                                type="email"
                                onChange={setEmail}
                                value={email}
								style="background"
                            />
                            <InputField
                                label="Phone"
                                id="phone"
                                type="tel"
                                onChange={setPhoneNo}
                                value={phoneNo}
								style="background"
                            />
                        </div>
                        <hr className="opacity-60" />
                        <div className="flex gap-4 flex-col">
                            <p>Update Password:</p>
                            <InputField
                                label="New Password"
                                id="newPass"
                                type="password"
                                onChange={setNewPass}
                                value={newPass}
								style="background"
                            />
                            <InputField
                                label="Confirm Password"
                                id="conPass"
                                type="password"
                                onChange={setConfirmPass}
                                value={confirmPass}
								style="background"
                            />
                        </div>
						<div>
							<button className="w-full rounded-full border-solid border-indigo-700 border-2 bg-indigo-600">Save</button>
						</div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;
