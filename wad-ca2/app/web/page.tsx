import Image from "next/image";
const webproject = [
    {
    title:"Introduction to Web",
    subtitle:"HTML,CSS and animation",
    description:"Inthis introduction to Web Design for beginner you will need to learn on how to add structure and style in it.",
    bg:"bg-orange-300",
    image:"/images/web-intro.webp",
    },
    {
    title:"More Web",
    subtitle:"HTML CSS and Javascript",
    description:"More Web move beyond the basic introduce in Introduction to Web.Web Design transforms static pages using JavaScript.",
    bg:"bg-sky-200",
    image:"/images/more-web.webp",
    },
    {
    title:"Advanced Web",
    subtitle:"User experience , deployment",
    description:"Bring the website to life with the responsive layout.",
    bg:"bg-lime-300",
    image:"/images/web.png",
    },
];
export default function Web(){
    return (
        <main className="mt-6">
            <section className="rounded-[2.5rem] border-4 border-black bg-cyan-200 px-8 py-10 text-left shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Web Design
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                    Begin your adventure in digital making by learning to code animations,stories, and games in Scratch.
                </p>
            </section>
            <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
                {webproject.map((project)=>(
                    <article 
                    key={project.title}
                    className={`flex h-full flex-col rounded-[2.5rem] p-6 pb-8 text-left shadow-lg ${project.bg}`}>
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="h-40 w-full rounded-3xl object-cover shadow-md"
                    />
                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                        {project.title}
                    </h2>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">
                        {project.subtitle}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-gray-800">
                        {project.description}
                    </p>
                    </article>
                ))}
            </div>
        </main>
    );
}