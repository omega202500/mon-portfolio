import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Hero */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        {/* Texte */}
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-emerald-400/10 px-4 py-1 text-sm text-emerald-400">
            Disponible pour de nouveaux projets
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Salut, je suis Joel Simo 👋<br />
            Développeur Full-Stack
          </h1>
          <p className="max-w-xl text-neutral-400">
            Je suis développeur Full-Stack avec 3 ans d'expérience, utisant Laravel,
            Cordova Apache et React, pour créer des applications web et mobiles performantes. Je suis passionné par la création de solutions innovantes et efficaces pour répondre aux besoins des utilisateurs.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-emerald-400 px-6 py-3 font-medium text-neutral-950 transition hover:bg-emerald-300"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-neutral-700 px-6 py-3 font-medium transition hover:border-emerald-400"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Photo de profil avec effet de lueur */}
        <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
          {/* Halo lumineux derrière la photo */}
          <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-3xl" />

          <div className="relative h-full w-full overflow-hidden rounded-full border border-emerald-400/40 shadow-[0_0_40px_rgba(52,211,153,0.35)]">
            <Image
              src="/images/profile.jpeg"
              alt="Joel Simo - Développeur Full-Stack"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-emerald-400/10" />
          </div>
        </div>
      </section>

      {/* Projets à la une */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold">Projets récents</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}