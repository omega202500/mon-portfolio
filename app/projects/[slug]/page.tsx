import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-neutral-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <h1 className="mt-8 text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-neutral-400">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-emerald-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}