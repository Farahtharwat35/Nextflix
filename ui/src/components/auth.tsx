import { login } from "@/app/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
    children?: JSX.Element | JSX.Element[];
}

const Auth: React.FC<Props> = ({ children }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const auth = useAppSelector((states) => states.auth);
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken && auth === null) {
            dispatch(login({ accessToken }));
        }
    }, [dispatch, auth]);

    useEffect(() => {
        if (!isReady) {
            const x = setTimeout(async () => {
                if (auth === null) {
                    router.pathname !== "/login" &&
                        router.pathname !== "/register" &&
                        router.push("/login");
                } else if (!auth.currentUser) {
                    const res = await fetch(
                        "http://localhost:3001/auth/about-me",
                        {
                            headers: {
                                authorization: `Bearer ${auth.accessToken}`,
                            },
                        }
                    );
                    const data = await res.json();
                    if (data.type === "Watcher") {
                        router.push("/users");
                    } else if(router.pathname !== "/admin-dashboard") router.push("/admin-dashboard");
                }
                !isReady && setReady(true);
            }, 5000);

            return () => clearTimeout(x);
        }
    }, [auth, router, isReady]);

    if (isReady) {
        return <>{children}</>;
    } else {
        return (
            <div className="h-screen box-border flex flex-col gap-4 overflow-y-auto pb-8 justify-center items-center">
                <div className="relative flex items-center justify-center">
                    <div>Loading</div>
                    <div className="absolute animate-ping">Loading</div>
                </div>
            </div>
        );
    }
};

export default Auth;
