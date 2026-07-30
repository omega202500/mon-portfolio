export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">À propos de moi</h1>
      <p className="mt-6 text-neutral-400">
        Développeur full-stack spécialisé dans les applications mobiles et web.
        Je travaille principalement avec Laravel pour les backends, PostgreSQL
        comme base de données, et Cordova/Capacitor pour les applications
        mobiles hybrides. Côté frontend, j'utilise Next.js et JavaScript
        moderne pour construire des interfaces réactives.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Compétences</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {[
          "Laravel",
          "PostgreSQL",
          "Next.js",
          "Cordova / Capacitor",
          "Node.js",
          "React Native",
          "FastAPI",
          "Objective-C",
          "FFmpeg / HLS",
        ].map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-center text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}