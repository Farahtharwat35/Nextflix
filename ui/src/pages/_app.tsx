import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({
    subsets: ["latin"],
    weight: ["200", "400", "500", "700"],
});

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
            <AnimatePresence>
                <motion.div key={router.route}>
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </>
    );
}
