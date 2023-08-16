import LogoIcon from "@/assets/logo";
import InputField from "@/components/forms/input";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passCon, setPassCon] = useState("");

    return (
        <motion.div className="h-screen p-4 flex justify-end gap-4">
            <motion.div
                className="hidden lg:flex rounded-lg overflow-hidden relative"
                initial={{
                    left: "-5%",
                    opacity: 0,
                }}
                animate={{ left: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
            >
                <Image
                    className="object-cover object-center h-full"
                    src="/images/register_hero.jpg"
                    alt="Love + Death Robots Hero Image"
                    width={3840}
                    height={2160}
                />
            </motion.div>
            <div className="px-4 py-6 bg-slate-600/70 backdrop-blur-md rounded-lg grow lg:grow-0 lg:w-[25rem] lg:shrink-0">
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
                                Welcome to Nextflix!
                            </h2>
                            <p className="text-sm">Please fill in your info</p>
                        </div>

                        <form className="flex flex-col gap-2">
                            <InputField
                                label="Name"
                                id="name"
                                type="text"
                                value={name}
                                onChange={setName}
                            />
                            <InputField
                                value={email}
                                onChange={setEmail}
                                label="Email"
                                id="email"
                                type="email"
                            />
                            <InputField
                                value={pass}
                                onChange={setPass}
                                label="Password"
                                id="pass"
                                type="password"
                            />
                            <InputField
                                value={passCon}
                                onChange={setPassCon}
                                label="Confirm Password"
                                id="pass-con"
                                type="password"
                            />
                            <button className="bg-indigo-600 py-1 rounded-full border-indigo-500 border-2 border-solid mt-2">
                                Sign Up
                            </button>
                        </form>
                    </div>

                    <Link href="/login">
                        <div className="group">
                            <span className="opacity-70 group-hover:opacity-80 transition-all ease-in">
                                Already a Member?
                            </span>{" "}
                            <span className="font-bold opacity-75 group-hover:opacity-100 transition-all ease-in underline">
                                Log in
                            </span>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Register;
