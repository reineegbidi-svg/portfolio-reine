"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useRef } from "react";
import { education } from "@/lib/content";

export function Education() {
  const root = useRef(null);
  const inView = useInView(root, { once: true, margin: "-10%" });

  return (
    <section id="education" ref={root} className="scroll-mt-20 border-t border-zinc-100 bg-white py-24 sm:scroll-mt-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500"
          >
            Formation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Parcours académique, narré avec clarté.
          </motion.h2>
        </div>

        <div className="relative mt-16 max-w-3xl">
          <span className="absolute bottom-3 left-[15px] top-3 w-px bg-zinc-300 sm:left-[17px]" />

          <ul className="space-y-10">
            {education.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.08 + i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-6 sm:gap-8"
              >
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm sm:h-10 sm:w-10">
                  <GraduationCap className="h-4 w-4 text-zinc-700" aria-hidden />
                </div>
                <div className="flex-1 rounded-2xl border border-zinc-200 bg-white p-5 shadow-card sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-zinc-600">{item.place}</p>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                      {item.period}
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
