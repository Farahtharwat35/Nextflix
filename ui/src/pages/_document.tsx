import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className="max-h-screen h-full overflow-hidden max-w-full">
            <Head />
            <body className="from-slate-900 bg-gradient-to-br to-slate-950 text-white h-full">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
