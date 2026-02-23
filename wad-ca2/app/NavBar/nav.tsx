"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar({
    technologies,
}: {
    technologies: { title: string; slug: string }[];
}) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const linkStyle = (href: string) =>
    `px-4 py-2 rounded-md transition ${
    pathname === href
    ? "bg-amber-200 border border-black"
    : "hover:bg-gray-200"
    }`;
    return (
    <nav className="mb-2 ml-25 rounded-lg border-2 border-blue-500 bg-white p-2 font-semibold shadow">
    <div className="flex justify-between items-center">
    <div className="hidden md:flex gap-4">
        <Link href="/" className={linkStyle("/")}>Home</Link>
        {technologies.map((tech) => (
        <Link
        key={tech.slug} href={`/${tech.slug}`} className={linkStyle(`/${tech.slug}`)}>{tech.title}</Link>
    ))}
        </div>
        {/* Hamburger */}
        <button className="md:hidden px-4 py-2" onClick={()=>setOpen(!open)}>☰</button>
        </div>
        {/* Mobile */}
        {open && (
        <div className="mt-4 flex flex-col gap-2 md:hidden">
        <Link href="/" onClick={()=>setOpen(false)}className={linkStyle("/")}>Home</Link>
        {technologies.map((tech) => (
        <Link key={tech.slug}href={`/${tech.slug}`}onClick={()=>setOpen(false)}className={linkStyle(`/${tech.slug}`)}>{tech.title}</Link>
        ))}
        </div>
        )}
        </nav>
);
}