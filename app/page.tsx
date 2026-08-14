import Image from "next/image";
import { Mail } from "lucide-react";

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero */}
      <section className="grid items-center gap-12 lg:grid-cols-2">
        {/* Texte */}
        <div className="order-2 lg:order-1">
          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Salut, je suis <span className="text-emerald-400">Joel Simo</span> 👋
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Je suis développeur Full-Stack avec 3 ans d'expérience, utilisant
            Laravel, Cordova Apache et React, Next.js et JavaScript pour créer des applications web et
            mobiles performantes. Je suis passionné par la création de solutions
            innovantes et efficaces pour répondre aux besoins des utilisateurs.
          </p>

          <div className="mt-10">
            <a
              href="mailto:tonemail@gmail.com"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-500 lg:w-fit"
            >
              <Mail className="h-5 w-5" />
              Contactez-moi
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
            {/* Halo lumineux */}
            <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-3xl" />

            <div className="relative h-full w-full overflow-hidden rounded-full border border-emerald-400/40 shadow-[0_0_40px_rgba(52,211,153,0.35)]">
              <Image
                src="/images/profile.jpeg"
                alt="Joel Simo - Développeur Full-Stack"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-emerald-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Projets récents */}
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