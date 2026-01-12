import Image from "next/image";
const scratchproject = [
    {
    title:"Introduction to Scratch",
    subtitle:"Scripts,sprites and loops",
    description:"In this introduction for coding in Scratch for beginner you will need to learn on how to add code,custume etc as you make animations,game ,app or anything else.",
    bg:"bg-orange-300",
    image:"/images/scratch-intro.webp",
    },
    {
    title:"More Scratch",
    subtitle:"Broadcast,decisions and variables",
    description:"More Scratch move beyond the basic introduce in Introduction to Scratch.You will need to make app,game etc.",
    bg:"bg-sky-200",
    image:"/images/more-scratch.webp",
    },
    {
    title:"Further Scratch",
    subtitle:"Clones, blocks and logic",
    description:"Further Scratch move beyond the skill introduce in Introduction to Scratch and More Scratch.You will make app,generation-update etc;",
    bg:"bg-lime-300",
    image:"/images/scratch.png",
    },
];
export default function Scratch(){
    return(
        <main className="mt-6">
            <section className="rounded-[2.5rem] border-4 border-black bg-cyan-200 px-8 py-10 text-left shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Scratch
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                    Begin your adventure in digital making, by learning to code animations,stories, and games in Scratch.
                </p>
            </section>
            <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
                {scratchproject.map((project)=>(
                    <article 
                    key={project.title}
                    className={`flex h-full flex-col rounded-[2.5rem] p-6 pb-8 text-left shadow-lg ${project.bg}`}>
                    <Image
                    src={project.image}
                    alt={project.title}
                    height={300}
                    width={400}
                    className="h-40 w-full rounded-3xl object-cover shadow-md"
                    />
                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                        {project.title}
                    </h2>
                    <h3 className="mt-2 text-lg font-semibold text-gray-800">
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