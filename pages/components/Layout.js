import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico"></link>
                <title>STUDIO GHIBLI - NEXT.JS</title>
            </Head>
            <Navbar />
                <main className="main-container">
                    {children}
                </main>
            <Footer />
        </>
    );
}