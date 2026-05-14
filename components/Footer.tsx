"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-zinc-600 sm:text-left">
          Conçu &amp; développé par <span className="font-medium text-zinc-900">{site.name}</span>
          <span className="mx-2 text-zinc-300">·</span>
          <span>{year}</span>
        </p>
        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
        >
          Retour en haut
          <ArrowUp className="h-3.5 w-3.5" aria-hidden />
        </motion.button>
      </div>
    </footer>
  );
}
