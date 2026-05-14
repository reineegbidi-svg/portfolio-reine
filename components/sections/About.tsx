"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FileDown } from "lucide-react";
import { useRef } from "react";
import { about, stats } from "@/lib/content";
import { assets } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function About() {
  const root = useRef(null);
  const inView = useInView(root, { once: true, margin: "-12%" });

  return (
    <section id="about" ref={root} className="scroll-mt-20 border-t border-zinc-100 bg-white py-24 sm:scroll-mt-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-6">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500"
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              custom={0}
            >
              À propos
            </motion.p>
            <motion.h2
              className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              custom={1}
            >
              Une approche calibrée entre rigueur, design et ingénierie.
            </motion.h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-600">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={p}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  variants={fadeUp}
                  custom={2 + i}
                >
                  {p}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              custom={5}
            >
              <a
                href={assets.cvPdf}
                download="CV-Reine-EGBIDI.pdf"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900"
              >
                <FileDown className="h-4 w-4" aria-hidden />
                Télécharger mon CV (PDF)
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-card lg:mx-0 lg:max-w-none"
          >
            <Image
              src={assets.profileImage}
              alt="Reine EGBIDI"
              width={480}
              height={600}
              className="aspect-[4/5] w-full object-cover"
              sizes="(max-width: 1024px) 280px, 320px"
            />
          </motion.div>
        </div>

        <div className="mt-14 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.12 + i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-card"
              >
                <p className="text-3xl font-semibold tracking-tight text-zinc-900">{s.value}</p>
                <p className="mt-2 text-sm text-zinc-500">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.36, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card"
          >
            <p className="text-sm font-semibold text-zinc-900">Philosophie de travail</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Clarté du code, expérience utilisateur soignée, et une veille constante sur les bonnes
              pratiques du développement moderne.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
