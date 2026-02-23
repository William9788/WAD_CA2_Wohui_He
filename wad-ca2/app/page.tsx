import pool from "../lib/db";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const result = await pool.query("SELECT * FROM technologies");
  const technologies = result.rows;
  return(
    <main className="mx-auto max-w-6xl rounded-[3rem] border-4 border-dotted border-red-500 bg-lime-200 px-8 pb-10 pt-6 shadow-xl">
    <h1 className="text-2xl font-bold">
    Learn to code with Code Club
    </h1>
    <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
    {technologies.map((tech) => (
    <Link key={tech.id} href={`/${tech.slug}`} className="block">
    <article className={`flex h-full flex-col rounded-[2.5rem] ${tech.bg_color} p-6 pb-8 text-left shadow-lg transition hover:scale-[1.02] hover:shadow-xl`}>
    <Image src={tech.image_url}
    alt={tech.title}
    width={400}
    height={300}
    className="h-40 w-full rounded-3xl object-cover shadow-md"/>
    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
    {tech.title}
    </h2>
    <p className="mt-3 text-base leading-relaxed text-gray-800">
    {tech.description}
    </p>
    </article>
    </Link>
    ))}
    </div>
    </main>
  );
}