import pool from "../../lib/db";
import Image from "next/image";
export default async function TechPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    console.log("SLUG:", slug);
    const techResult = await pool.query(
    "SELECT * FROM technologies WHERE slug = $1",
    [slug]
    );
    console.log("TECH:", techResult.rows);
    const tech = techResult.rows[0];
    if (!tech) {
    return <div>Not Found</div>;
    }
    const projectResult = await pool.query(
    "SELECT * FROM projects WHERE technology_id = $1",
    [tech.id]
    );
    const projects = projectResult.rows;
    return (
    <main className="mt-6">
    <section className="rounded-[2.5rem] border-4 border-black bg-cyan-200 px-8 py-10 shadow-lg">
    <h1 className="text-3xl font-bold md:text-4xl">
    {tech.title}
    </h1>
    <p className="mt-4 text-lg">
    {tech.description}
    </p>
    </section>
    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
    <article key={project.id} className={`flex flex-col rounded-[2.5rem] p-6 shadow-lg ${project.bg_color}`}>
    <Image
            src={project.image_url}
            alt={project.title}
            width={400}
            height={300}
            className="h-40 w-full rounded-3xl object-cover"
            />
    <h2 className="mt-6 text-2xl font-semibold">
        {project.title}
    </h2>
    <h3 className="mt-2 text-lg font-semibold">
            {project.subtitle}
    </h3>
    <p className="mt-3 text-base">
            {project.description}
    </p>
</article>
        ))}
    </div>
    </main>
);
}