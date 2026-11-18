"use client"

import { useLanguage } from "@/contexts/language-context"
import { about } from "@/content/site"

export function About() {
  const { language: l } = useLanguage()

  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] sm:text-5xl">{about.title[l]}</h2>
          <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-graphite">{about.body[l]}</p>
          <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
            <div>
              <p className="font-semibold">{l === "en" ? "Education" : "Formação"}</p>
              <ul className="mt-2 space-y-1 text-graphite">
                {about.education[l].map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
            <div>
              <p className="font-semibold">{l === "en" ? "Languages" : "Idiomas"}</p>
              <p className="mt-2 text-graphite">{about.languages[l]}</p>
            </div>
          </div>
        </div>

        {/* A real timeline, so it is ordered */}
        <ol className="relative self-center border-l-2 border-line pl-8">
          {about.steps.map((s, i) => (
            <li key={i} className="relative pb-10 last:pb-0">
              <span className={`absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 ${i === about.steps.length - 1 ? "border-blueprint bg-blueprint" : "border-ink bg-paper"}`} aria-hidden />
              <p className="text-sm text-graphite">{s.years}</p>
              <p className="font-heading mt-1 text-2xl font-bold">{s.t[l]}</p>
              <p className="mt-1 text-graphite">{s.d[l]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
