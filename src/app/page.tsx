import Image from "next/image";

const techStack = [
  { name: "Next.js 16", detail: "App Router" },
  { name: "React 19", detail: "UI Library" },
  { name: "TypeScript", detail: "Type Safety" },
  { name: "Tailwind CSS 4", detail: "Styling" },
];

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-6 py-16">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur">
        <Image
          className="mx-auto invert"
          src="/next.svg"
          alt="Next.js logo"
          width={160}
          height={32}
          priority
        />

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          My First Next.js App
        </h1>
        <p className="mt-3 text-lg text-indigo-200">
          แอปพลิเคชัน Next.js แอปแรกของฉัน
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white/10 px-6 py-5">
          <p className="text-sm uppercase tracking-widest text-indigo-300">Developer</p>
          <p className="mt-2 text-2xl font-semibold text-white">พีรภัทร อิสิสิงห์</p>
          <p className="mt-1 text-indigo-200">รหัสนักศึกษา 6752410001</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
              <p className="font-semibold text-white">{tech.name}</p>
              <p className="mt-1 text-xs text-indigo-300">{tech.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-400">
          Deployed on Vercel · Source code on GitHub
        </p>
      </div>
    </main>
  );
}
