"use client";

import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { projects } from "@/lib/content";

export function Projects() {
  const root = useRef(null);
  const inView = useInView(root, { once: true, margin: "-8%" });

  return (
    <section id="projects" ref={root} className="scroll-mt-20 border-t border-zinc-100 bg-white py-24 sm:scroll-mt-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500"
            >
              Projets
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            >
              Des réalisations pensées comme des produits.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-sm leading-relaxed text-zinc-600 sm:text-right"
          >
            Chaque carte résume une direction technique : de la persistance données aux interfaces
            responsives, en passant par les API et le mobile.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.06 * index,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-card transition-shadow hover:shadow-md"
            >
              <div className="flex h-44 items-center justify-center border-b border-zinc-200 bg-zinc-100 sm:h-48">
                <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                  Aperçu
                </span>
              </div>
              <div className="flex flex-1 flex-col space-y-4 p-6 sm:p-7">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href="#"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50 min-[420px]:flex-none"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    Démo
                  </a>
                  <a
                    href="#"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 min-[420px]:flex-none"
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
