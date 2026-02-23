import "./globals.css";
import Image from "next/image";
import pool from "../lib/db";
import Navbar from "./NavBar/nav";
export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const result = await pool.query("SELECT title, slug FROM technologies");
    const technologies = result.rows;

    return (
    <html lang="en">
    <body className="min-h-screen bg-cyan-300 py-8 font-sans">
        <Image
            src="/images/code_club_logo.jpg"
            alt="codeclub logo"
            width={80}
            height={10}
            className="rounded-lg fixed top-4 left-4 z-50"/>
        <Navbar technologies={technologies} />
        {children}
        <footer className="mt-10 text-center text-sm italic text-gray-700">
            Dublin Road, Dundalk
        </footer>
        </body>
        </html>
);
}