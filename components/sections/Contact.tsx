"use client";

import { motion, useInView } from "framer-motion";
import { FileDown, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { assets, site } from "@/lib/site";

export function Contact() {
  const root = useRef(null);
  const inView = useInView(root, { once: true, margin: "-10%" });
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2400);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" ref={root} className="scroll-mt-20 border-t border-zinc-100 bg-white py-24 sm:scroll-mt-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Parlons de votre prochaine idée.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base leading-relaxed text-zinc-600"
          >
            Un stage, une collaboration ou une opportunité : écrivez-moi en quelques lignes, je
            réponds rapidement.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 rounded-[28px] border border-zinc-200 bg-white p-6 shadow-card sm:p-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Coordonnées
            </h3>
            <ul className="space-y-4 text-sm text-zinc-700">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" aria-hidden />
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-zinc-900 hover:underline hover:underline-offset-4"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" aria-hidden />
                <a
                  href={`tel:${site.phone.replace(/[\s-]/g, "")}`}
                  className="transition hover:text-zinc-900"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" aria-hidden />
                <span>{site.location}</span>
              </li>
            </ul>

            <a
              href={assets.cvPdf}
              download="CV-Reine-EGBIDI.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-zinc-50 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              <FileDown className="h-4 w-4" aria-hidden />
              Télécharger le CV (PDF)
            </a>

            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Réseaux
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  GitHub
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Email
                </a>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.14, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-card sm:p-8"
          >
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Nom
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
                    placeholder="Votre nom"
                  />
                </label>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
                    placeholder="vous@exemple.com"
                  />
                </label>
              </div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
                  placeholder="Décrivez votre projet ou votre opportunité…"
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  Envoyer
                </button>
                {sent ? (
                  <p className="text-sm text-zinc-700" role="status">
                    Merci — message prêt à être envoyé (démo locale).
                  </p>
                ) : (
                  <p className="text-xs text-zinc-500">
                    En production, branchez ce formulaire à votre service mail ou API.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
