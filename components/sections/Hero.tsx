"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileDown } from "lucide-react";
import { hero } from "@/lib/content";
import { assets, site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center overflow-hidden border-b border-zinc-100 bg-white pt-16"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="flex max-w-xl flex-col gap-8 lg:max-w-none">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500"
            >
              {site.title}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl"
            >
              {hero.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm font-medium text-zinc-700 sm:text-base"
            >
              {hero.motto}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <button
              type="button"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Voir mes projets
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              Me contacter
            </button>
            <a
              href={assets.cvPdf}
              download="CV-Reine-EGBIDI.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-zinc-50 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              <FileDown className="h-4 w-4" aria-hidden />
              Télécharger le CV
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 border-t border-zinc-200 pt-10 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-card">
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Localisation
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-900">{site.location}</dd>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-card">
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">Profil</dt>
              <dd className="mt-1 text-sm font-medium text-zinc-900">{site.tagline}</dd>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-card">
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">Site</dt>
              <dd className="mt-1 text-sm font-medium">
                <a
                  href={site.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900"
                >
                  reallygreatsite.com
                </a>
              </dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none lg:justify-self-end"
        >
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-card">
            <Image
              src={assets.profileImage}
              alt="Portrait de Reine EGBIDI"
              width={720}
              height={900}
              priority
              className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <motion.div
          aria-hidden
          className="h-9 w-5 rounded-full border border-zinc-300 bg-white"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            className="mx-auto mt-2 block h-1 w-1 rounded-full bg-zinc-400"
            animate={{ opacity: [0.35, 1, 0.35], y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
