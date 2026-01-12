"use client";
import"./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function RootLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return (
        <html lang="en">
            <body className="min-h-screen bg-cyan-300 py-8 font-sans">
                <nav className="mb-8 gap-4 rounded-lg border-2 border-green bg-white p-4 font-semibold shadow flex">
                <Navlink href="/" label="Home"/>
                <Navlink href="scratch" label="Scratch"/>
                <Navlink href="python" label="Python"/>
                <Navlink href="web" label="Web"/>
                </nav>
                {children}
            </body>
        </html>
    );
}
function Navlink ({href,label}:{href:string;label:string}){
    const pathname= usePathname();
    const isActive=pathname===href;
return(
    <Link
    href={href}
    className={`rounded-md border px-4 py-2 transition ${
        isActive
        ?"bg-amber-200 border-black"
        :"bg-gray-100 border-gray-300 hover:bg-gray-200"
    }`}
    >
        {label}
    </Link>
)
}