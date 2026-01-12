import Image from "next/image";
const pythonproject = [
    {
        title:"Introduction for Python",
        subtitle:"Variables,functions and loops",
        description:"In this introduction to Python for beginner, you will need to learn on how to use variables,functions and loops to build animations,another projects etc",
        bg:"bg-green-300",
        image:"/images/python-intro.webp",
    },
    {
        title:"More Python",
        subtitle:"List,data and etc",
        description:"More Pythons moves beyond the basic introduce in Introduction for Python.You will need to learn on how to use list,files to create charts etc.",
        bg:"bg-sky-200",
        image:"/images/more-python.webp",
    },
    {
        title:"Python Target",
        subtitle:"Project,Puzzle and debug",
        description:"use your python knowledge on the test to do the question.",
        bg:"bg-lime-300",
        image:"/images/python.png",
    },
];
export default function Python(){
    return (
        <main className="mt-6">
            <section className="rounded-[2.5rem] border-4 border-black bg-cyan-200 px-8 py-10 text-left shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Python
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                Learn about Python, one of the world's most popular programming languages, to create digital art,interactive maps, and models.
                </p>
            </section>
            <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pythonproject.map((project)=>(
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
                    <p className="mt-3 text-base leading-relaxed text-gray-800">
                        {project.description}
                    </p>
                    </article>
                ))}
            </div>
        </main>
    );
}