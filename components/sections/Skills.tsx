"use client";

import { motion, useInView } from "framer-motion";
import { Database, Globe2, Layers, TerminalSquare } from "lucide-react";
import { useRef } from "react";
import { mainSkills, skillGroups } from "@/lib/content";

const icons = [TerminalSquare, Database, Globe2, Layers] as const;

export function Skills() {
  const root = useRef(null);
  const inView = useInView(root, { once: true, margin: "-10%" });

  return (
    <section id="skills" ref={root} className="scroll-mt-20 border-t border-zinc-100 bg-white py-24 sm:scroll-mt-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500"
          >
            Compétences
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Une boîte à outils orientée produit.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base leading-relaxed text-zinc-600"
          >
            Des fondations solides côté langages et données, complétées par des frameworks
            modernes pour livrer des applications cohérentes de bout en bout.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.08 + index * 0.06,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-zinc-900">{group.title}</h3>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-[28px] border border-zinc-200 bg-white p-8 shadow-card"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Compétences principales
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {mainSkills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
