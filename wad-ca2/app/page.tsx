import Image from"next/image";
import Link from"next/link";
const homeProject= [
  {
    title:"Scratch",
    description:"Create animations, apps, and interactive stories by adding code, costumes, and sounds.",
    image:"/images/scratch.png",
    href:"/scratch",
  },
  {
    title:"Python",
    description:"Make digital art, games, and more while exploring one of the world's most popular programming languages.",
    image:"/images/python.png",
    href:"/python",
  },
  {
    title: "Web design",
    description:"Build websites and apps by learning HTML, CSS, and JavaScript.",
    image: "/images/web.png",
    href:"/web",
  },
];
export default function Home(){
  return(
    <main className="mx-auto max-w-6xl rounded-[3rem] border-4 border-dotted border-red-500 bg-lime-200 px-8 pb-10 pt-6 shadow-xl">
      <h1 className="text-2xl font-bold">
        Learn to code with Code Club
      </h1>
      <p className="mt-4 text-lg leading-relaxed">
        Our projects have step-by-step instructions to teach you how to create games,animations,and much more.
      </p>
      <p className="mt-2 text-lg leading-relaxed">
        choose from hundreds of options, in up to 30 languages.
      </p>
        <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
  {homeProject.map((project) => (
    <Link
      key={project.title}
      href={project.href}
      className="block"
    >
      <article className="flex h-full flex-col rounded-[2.5rem] bg-cyan-200 p-6 pb-8 text-left shadow-lg transition hover:scale-[1.02] hover:shadow-xl">
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

        <p className="mt-3 text-base leading-relaxed text-gray-800">
          {project.description}
        </p>
      </article>
    </Link>
  ))}
</div>

    </main>
  );
}