import LogoIcon from "@/assets/logo";
import InputField from "@/components/forms/input";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch } from "@/app/hooks";
import { login } from "@/app/authSlice";
import { useRouter } from "next/router";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passCon, setPassCon] = useState("");
    const [phone, setPhoneNo] = useState("");
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTimeout(() => {
            fetch("http://localhost:3001/auth/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    name,
                    password: pass,
                    phoneNo: phone,
                    subscription: "Platinum",
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.access_token) {
                        window.localStorage.setItem(
                            "accessToken",
                            res.access_token
                        );
                        dispatch(login(res.access_token));
                        router.push("/users");
                    } else {
                    }
                })
                .catch((err) => {});
        }, 1000);
    };

    return (
        <motion.div className="h-screen max-h-full p-4 lg:p-6 flex">
            <div className="flex justify-center items-center relative grow">
                <motion.div
                    className="hidden lg:flex rounded-lg overflow-hidden absolute top-[1%] left-[1%] right-[1%] bottom-[1%]"
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                    }}
                >
                    <Image
                        className="object-cover -scale-x-100 object-right h-full"
                        src="/images/register_hero.jpg"
                        alt="Interstellar Hero Image"
                        width={3840}
                        height={2160}
                    />
                </motion.div>
                <div className="px-4 py-6 bg-slate-600/50 backdrop-blur-md rounded-lg grow lg:grow-0 lg:w-[25rem] lg:shrink-0">
                    <motion.div
                        className="flex flex-col justify-between gap-3 items-center h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        <LogoIcon className="fill-white animate-pulse" />

                        <div className="w-full px-4">
                            <div className="mb-8 flex flex-col items-center justify-center">
                                <h2 className="font-bold text-2xl">
                                    Welcome back!
                                </h2>
                                <p className="text-sm">
                                    Please fill in your details
                                </p>
                            </div>

                            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                                <InputField
                                    label="Name"
                                    id="name"
                                    type="text"
                                    onChange={setName}
                                    value={name}
                                />
                                <InputField
                                    label="Email"
                                    id="email"
                                    type="email"
                                    onChange={setEmail}
                                    value={email}
                                />
                                <InputField
                                    label="Password"
                                    id="pass"
                                    type="password"
                                    onChange={setPass}
                                    value={pass}
                                />
                                <InputField
                                    label="Confirm Password"
                                    id="passCon"
                                    type="password"
                                    onChange={setPassCon}
                                    value={passCon}
                                />
                                <InputField
                                    label="Phone"
                                    id="phone"
                                    type="text"
                                    onChange={setPhoneNo}
                                    value={phone}
                                />
                                <button
                                    className={`${"bg-indigo-600"} py-1 rounded-full border-indigo-500 border-2 border-solid mt-2 flex justify-center items-center h-8 box-content`}
                                >
                                    Sign Up
                                </button>
                            </form>
                        </div>

                        <Link href="/login">
                            <div className="group">
                                <span className="opacity-70 group-hover:opacity-80 transition-all ease-in">
                                    Already have a member?
                                </span>{" "}
                                <span className="font-bold opacity-75 group-hover:opacity-100 transition-all ease-in underline">
                                    Log In
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Register;
