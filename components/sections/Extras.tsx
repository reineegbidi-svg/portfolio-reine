"use client";

import { motion, useInView } from "framer-motion";
import { BookOpen, Dumbbell, Languages, Sparkles } from "lucide-react";
import { useRef } from "react";
import { interests, languages } from "@/lib/content";

export function Extras() {
  const root = useRef(null);
  const inView = useInView(root, { once: true, margin: "-10%" });

  return (
    <section id="extras" ref={root} className="scroll-mt-20 border-t border-zinc-100 bg-white py-24 sm:scroll-mt-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500"
          >
            Langues & centres d’intérêt
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Culture, communication, énergie.
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2 }}
            className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-8 shadow-card"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-sm">
              <Languages className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-zinc-900">Langues</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.14, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2 }}
            className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-8 shadow-card"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-sm">
              <Sparkles className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-zinc-900">Centres d’intérêt</h3>
            <ul className="mt-5 space-y-3">
              {interests.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 shadow-sm"
                >
                  {label === "Technologie" ? (
                    <Sparkles className="h-4 w-4 text-zinc-600" aria-hidden />
                  ) : null}
                  {label === "Sport" ? (
                    <Dumbbell className="h-4 w-4 text-zinc-600" aria-hidden />
                  ) : null}
                  {label === "Lecture" ? (
                    <BookOpen className="h-4 w-4 text-zinc-600" aria-hidden />
                  ) : null}
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
