import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition hover:border-emerald-400"
    >
      <div className="relative h-48 w-full bg-neutral-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-neutral-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
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
    </Link>
  );
}