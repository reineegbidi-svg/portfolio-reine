"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FileDown, Mail, Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import { assets, navLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setElevated(y > 8);
  });

  const scrollTo = useCallback((id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/90 backdrop-blur-md transition-colors",
        elevated && "border-zinc-200 shadow-sm"
      )}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="flex min-w-0 shrink items-center gap-2.5 rounded-lg py-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:gap-3"
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm sm:h-10 sm:w-10">
            <Image
              src={assets.profileImage}
              alt="Reine EGBIDI"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              sizes="40px"
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-semibold text-zinc-950 sm:text-base">
              {site.name}
            </span>
          </span>
        </button>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={assets.cvPdf}
            download="CV-Reine-EGBIDI.pdf"
            title="Télécharger le CV"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:bg-zinc-50 sm:h-10 sm:w-10"
          >
            <FileDown className="h-4 w-4" aria-hidden />
            <span className="sr-only">Télécharger le CV</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            title="Envoyer un e-mail"
            className="hidden h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:bg-zinc-50 sm:inline-flex sm:h-10 sm:w-10"
          >
            <Mail className="h-4 w-4" aria-hidden />
            <span className="sr-only">Envoyer un e-mail</span>
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-sm sm:h-10 sm:w-10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-zinc-200 bg-white px-4 py-3 shadow-sm md:hidden"
        >
          <div className="flex flex-col gap-0.5">
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="rounded-xl px-3 py-2.5 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Accueil
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="rounded-xl px-3 py-2.5 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-50"
              >
                {link.label}
              </button>
            ))}
            <a
              href={assets.cvPdf}
              download="CV-Reine-EGBIDI.pdf"
              className="mt-1 rounded-xl border border-zinc-200 px-3 py-2.5 text-center text-sm font-medium text-zinc-800"
            >
              Télécharger le CV
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-xl px-3 py-2.5 text-center text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              {site.email}
            </a>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
