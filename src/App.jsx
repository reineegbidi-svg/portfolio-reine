import { useCallback, useEffect, useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Phone,
  Share2,
  GraduationCap,
} from 'lucide-react'
import './App.css'
import {
  site,
  hero,
  about,
  languages,
  hobbies,
  skillGroups,
  projects,
  formation,
  contact,
  navLinks,
} from './content'

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] }

const fadeUp = (reduce, delay = 0) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { ...transition, delay },
      }

const SectionHeading = ({ eyebrow, title, description }) => {
  const reduce = useReducedMotion()
  return (
    <motion.header className="section-heading" {...fadeUp(reduce)}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.header>
  )
}

const Popup = ({ status, onClose }) => {
  if (status === 'idle' || status === 'loading') return null
  return (
    <div className="popup-overlay" role="presentation" onClick={onClose}>
      <div
        className="popup-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`popup-icon ${status}`}>
          {status === 'success' ? '✓' : '!'}
        </div>
        <h3 id="popup-title">{status === 'success' ? 'Message envoyé' : 'Envoi impossible'}</h3>
        <p>
          {status === 'success'
            ? 'Merci pour votre message. Je vous répondrai dès que possible.'
            : 'Une erreur est survenue. Réessayez ou écrivez-moi directement par email.'}
        </p>
        <button type="button" className="button primary" onClick={onClose}>
          {status === 'success' ? 'Fermer' : 'Compris'}
        </button>
      </div>
    </div>
  )
}

function App() {
  const reduce = useReducedMotion()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle')
  const [loaded, setLoaded] = useState(false)
  const heroRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll()
  const progressSpring = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 })
  const barScaleX = useTransform(progressSpring, [0, 1], [0, 1])

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  useEffect(() => {
    if (!isNavOpen) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isNavOpen])

  useEffect(() => {
    if (!isNavOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setIsNavOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isNavOpen])

  const onHeroPointer = useCallback(
    (e) => {
      if (reduce || !heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMouse({ x: x * 28, y: y * 28 })
    },
    [reduce],
  )

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('loading')
    const formData = new FormData(e.target)
    try {
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setFormStatus('success')
        e.target.reset()
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })

  return (
    <div className={`app-shell ${loaded ? 'is-loaded' : ''}`}>
      <motion.div className="scroll-progress" style={{ scaleX: barScaleX }} aria-hidden />

      <Popup status={formStatus} onClose={() => setFormStatus('idle')} />

      <header className="top-header">
        <nav className="top-nav" aria-label="Principale">
          <a href="#hero" className="nav-brand">
            <span className="nav-brand-mark" aria-hidden />
            {site.shortName}
          </a>
          <button
            type="button"
            className={`nav-toggle ${isNavOpen ? 'open' : ''}`}
            onClick={() => setIsNavOpen((v) => !v)}
            aria-expanded={isNavOpen}
            aria-controls="primary-navigation"
            aria-label={isNavOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="nav-links nav-links-desktop">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="nav-cta-desktop" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <div
          className={`nav-drawer-root ${isNavOpen ? 'is-open' : ''}`}
          aria-hidden={!isNavOpen}
        >
          <button
            type="button"
            className="nav-drawer-backdrop"
            tabIndex={isNavOpen ? 0 : -1}
            aria-label="Fermer le menu"
            onClick={() => setIsNavOpen(false)}
          />
          <aside
            id="primary-navigation"
            className="nav-drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav-drawer-head">
              <span className="nav-drawer-title">Menu</span>
              <button
                type="button"
                className="nav-drawer-close"
                onClick={() => setIsNavOpen(false)}
                aria-label="Fermer le menu"
              >
                ×
              </button>
            </div>
            <nav className="nav-drawer-links" aria-label="Pages du site">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsNavOpen(false)}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              className="nav-cta-drawer"
              href="#contact"
              onClick={() => setIsNavOpen(false)}
            >
              Contact
            </a>
          </aside>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="hero"
          ref={heroRef}
          onPointerMove={onHeroPointer}
          onPointerLeave={() => setMouse({ x: 0, y: 0 })}
        >
          <div className="hero-bg" aria-hidden>
            <div
              className="blob blob-a"
              style={{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)` }}
            />
            <div
              className="blob blob-b"
              style={{
                transform: `translate3d(${-mouse.x * 0.6}px, ${-mouse.y * 0.6}px, 0)`,
              }}
            />
            <div className="hero-grid" />
          </div>

          <div className="hero-inner">
            <motion.div
              className="hero-copy"
              initial={reduce ? false : { opacity: 0, y: 32 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1>{hero.title}</h1>
              <p className="hero-sub">{hero.subtitle}</p>
              <p className="hero-tagline">{hero.tagline}</p>

              <div className="hero-actions">
                {hero.actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={`button ${action.variant}`}
                    {...(action.download ? { download: true } : {})}
                  >
                    {action.label}
                    <span className="btn-icon" aria-hidden>
                      <ArrowUpRight size={18} strokeWidth={1.75} />
                    </span>
                  </a>
                ))}
              </div>

              <div className="hero-stats">
                {hero.stats.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="stat-card"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, ...transition }}
                  >
                    <span className="stat-label">{item.label}</span>
                    <span className="stat-value">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hero-panel"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-panel-shell">
                <div className="hero-panel-core">
                  <figure className="hero-portrait">
                    <img src={hero.photo} alt={hero.photoAlt} loading="eager" />
                  </figure>
                  <p className="hero-panel-title">Data & applications</p>
                  <p className="hero-panel-text">
                    Interfaces soignées, données structurées, livrables clairs.
                  </p>
                  <div className="hero-chips">
                    {['R', 'Python', 'Flutter', 'SQL'].map((chip) => (
                      <span key={chip} className="chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="about section-block">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} description={about.description} />
          <div className="about-layout">
            <motion.div className="about-prose glass-card" {...fadeUp(reduce, 0.05)}>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <div className="about-meta">
                <div>
                  <span className="meta-label">Langues</span>
                  <ul>
                    {languages.map((l) => (
                      <li key={l.name}>
                        {l.name} — <em>{l.level}</em>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="meta-label">Loisirs</span>
                  <ul className="hobby-list">
                    {hobbies.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="about-cards">
              {about.cards.map((card, i) => (
                <motion.article
                  key={card.title}
                  className="about-mini glass-card tilt-hover"
                  {...fadeUp(reduce, 0.08 + i * 0.06)}
                >
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-block">
          <SectionHeading
            eyebrow="Compétences"
            title="Une boîte à outils orientée impact"
            description="Langages, développement, analyse et outils — organisés pour une lecture rapide."
          />
          <div className="skills-bento">
            {skillGroups.map((group, i) => (
              <motion.article
                key={group.title}
                className="skill-group glass-card tilt-hover"
                {...fadeUp(reduce, i * 0.05)}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="projects section-block">
          <SectionHeading
            eyebrow="Projets"
            title="Sélection de réalisations"
            description="Applications, sites et analyses — cartes premium avec technologies mises en avant."
          />
          <div className="project-showcase">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                className="project-card glass-card tilt-hover"
                {...fadeUp(reduce, i * 0.06)}
                style={{ '--tilt-delay': `${i * 40}ms` }}
              >
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`Illustration du projet ${project.title}`}
                    loading="lazy"
                  />
                  <div className="project-overlay" />
                  <div className="project-badges">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    {project.demo ? (
                      <a className="link-btn" href={project.demo} target="_blank" rel="noreferrer">
                        Voir le projet
                        <ArrowUpRight size={16} strokeWidth={1.75} />
                      </a>
                    ) : (
                      <span className="link-btn is-muted" title="Dépôt ou démo à venir">
                        Voir le projet
                      </span>
                    )}
                    {project.github ? (
                      <a className="link-btn ghost" href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                        <Code2 size={16} strokeWidth={1.75} aria-hidden />
                      </a>
                    ) : (
                      <span className="link-btn ghost is-muted" title="Lien GitHub à ajouter">
                        GitHub
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="formation" className="formation section-block">
          <SectionHeading
            eyebrow="Parcours"
            title="Formation & diplômes"
            description="Une ligne du temps claire, du primaire à la licence en cours."
          />
          <motion.ol className="timeline" {...fadeUp(reduce)}>
            {formation.map((item) => (
              <li key={item.title} className={`timeline-item ${item.current ? 'is-current' : ''}`}>
                <div className="timeline-icon" aria-hidden>
                  <GraduationCap size={20} strokeWidth={1.75} />
                </div>
                <div className="timeline-card glass-card">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  {item.current && <span className="pill-current">En cours</span>}
                </div>
              </li>
            ))}
          </motion.ol>
        </section>

        <section id="contact" className="contact section-block">
          <SectionHeading
            eyebrow="Contact"
            title="Travaillons ensemble"
            description="Stage, alternance ou mission : décrivez votre besoin, je réponds rapidement."
          />
          <div className="contact-layout">
            <motion.aside className="contact-card glass-card" {...fadeUp(reduce, 0.05)}>
              <h3>Coordonnées</h3>
              <ul className="contact-list">
                <li>
                  <MapPin size={18} strokeWidth={1.75} aria-hidden />
                  <div>
                    <span className="contact-k">Localisation</span>
                    <p>{contact.location}</p>
                  </div>
                </li>
                <li>
                  <Mail size={18} strokeWidth={1.75} aria-hidden />
                  <div>
                    <span className="contact-k">Email</span>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </li>
                {contact.phones.map((phone) => (
                  <li key={phone.href}>
                    <Phone size={18} strokeWidth={1.75} aria-hidden />
                    <div>
                      <span className="contact-k">{phone.label}</span>
                      <a href={phone.href}>{phone.value}</a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="social-row">
                <a
                  className="social-btn"
                  href={contact.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil GitHub"
                >
                  <Code2 size={18} strokeWidth={1.75} aria-hidden />
                </a>
                <a
                  className="social-btn"
                  href={contact.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil LinkedIn"
                >
                  <Share2 size={18} strokeWidth={1.75} aria-hidden />
                </a>
                <a className="social-btn" href={`mailto:${contact.email}`} aria-label="Email">
                  <Mail size={18} strokeWidth={1.75} />
                </a>
              </div>
            </motion.aside>

            <motion.form
              className="contact-form glass-card"
              action={contact.formAction}
              method="POST"
              onSubmit={handleFormSubmit}
              {...fadeUp(reduce, 0.1)}
            >
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <label htmlFor="name">Nom</label>
                <input id="name" name="name" type="text" placeholder="Votre nom" required autoComplete="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="form-row">
                <label htmlFor="subject">Sujet</label>
                <input id="subject" name="subject" type="text" placeholder="Sujet du message" required />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Votre message..."
                  required
                />
              </div>
              <button
                type="submit"
                className={`button primary stretch ${formStatus === 'loading' ? 'loading' : ''}`}
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Envoi en cours…' : 'Envoyer'}
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-inner">
          <p>Conçu & développé par Gbedenou Fifi Grace — {new Date().getFullYear()}</p>
          <button type="button" className="footer-top" onClick={scrollToTop} aria-label="Retour en haut">
            <ArrowUpRight size={18} strokeWidth={1.75} style={{ transform: 'rotate(-45deg)' }} />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
