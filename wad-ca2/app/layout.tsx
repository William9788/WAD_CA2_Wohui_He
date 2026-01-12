"use client";
import"./globals.css";
import Image from"next/image";
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
                <Image
                src="/images/code_club_logo.jpg"
                alt="codeclub logo"
                width={80}
                height={10}
                className="rounded-lg fixed top-4 left-4 z-50"
                />  
                <nav className="mb-2 ml-25 rounded-lg border-2 border-blue-500 bg-white p-2 font-semibold shadow flex justify-between">
                <Navlink href="/" label="Home"/>
                <Navlink href="/scratch" label="Scratch"/>
                <Navlink href="/python" label="Python"/>
                <Navlink href="/web" label="Web"/>
                </nav>
                {children}
                <footer className="mt-10 text-center text-sm italic text-gray-700">
                Dublin Road, Dundalk
</footer>
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