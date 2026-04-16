import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaCode, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMobileAlt } from 'react-icons/fa'
import { SiCss, SiHtml5, SiNodedotjs, SiReact } from 'react-icons/si'
import { about, experiences, profile, projects, skills } from './data'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (!section) return
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', window.location.pathname)
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </motion.div>
  )
}

function skillIcon(item: string) {
  const iconClass = 'text-blue-600'
  switch (item.toLowerCase()) {
    case 'reactjs':
      return <SiReact className={iconClass} />
    case 'react native':
      return <FaMobileAlt className={iconClass} />
    case 'node.js':
      return <SiNodedotjs className={iconClass} />
    case 'html':
      return <SiHtml5 className={iconClass} />
    case 'css':
      return <SiCss className={iconClass} />
    default:
      return <FaCheckCircle className={iconClass} />
  }
}

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    if (!isResumeOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsResumeOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isResumeOpen])

  return (
    <div className="min-h-screen bg-grid text-slate-800">
      <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-4">
          <button type="button" onClick={() => scrollToSection('home')} className="text-xl font-bold text-blue-700">
            {profile.name}
          </button>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className="nav-link">
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 to-slate-50 py-24">
          <div className="pointer-events-none absolute -left-20 top-14 h-72 w-72 rounded-full bg-blue-200/45 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="section-wrap grid items-center gap-10 md:grid-cols-2">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>
              <span className="hero-tag">
                Welcome to my portfolio
              </span>
              <h1 className="hero-title text-gradient mt-4">Hello, I&apos;m Sabrine Khouaja</h1>
              <p className="hero-subtitle mt-4 max-w-xl">
                A Software Engineer specialized in Artificial Intelligence, currently pursuing a Master&apos;s degree in Engineering Project Management.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="fancy-button-primary"
                >
                  View My Work
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mx-auto w-full max-w-sm"
            >
              <div className="panel p-3">
                <img src="/profile.png" alt={profile.name} className="h-[470px] w-full rounded-2xl object-cover" />
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.22 }}
            className="section-wrap mt-8"
          >
            <div className="journey-card panel border-blue-100">
              <h3 className="text-center text-xl font-semibold text-slate-900 md:text-2xl">Welcome to My Digital Journey ✨</h3>
              <div className="mx-auto mt-4 max-w-4xl space-y-2 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                {profile.intro
                  .split('\n')
                  .filter((line) => line.trim() && !line.toLowerCase().includes('welcome to my digital journey'))
                  .map((line, idx) => (
                    <p key={idx} className="text-center">{line}</p>
                  ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="pb-12">
          <div className="section-wrap">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="panel border-blue-100 p-4 md:p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">Resume</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="/cv-sabrine-khouaja.pdf" className="fancy-button-primary">
                    <FaDownload />
                    Download
                  </a>
                  <button type="button" className="fancy-button-accent" onClick={() => setIsResumeOpen(true)}>
                    Preview
                  </button>
                </div>
              </div>
              <p className="text-sm text-slate-600">Click preview to open the PDF in a modal reader.</p>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="section-wrap">
            <SectionTitle
              title="About"
              subtitle="Mon parcours academique, mes objectifs et ma vision professionnelle."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="panel"
              >
                <h3 className="text-xl font-semibold text-slate-900">Profil</h3>
                <p className="mt-3 text-slate-600">{about.description}</p>
                <p className="mt-3 text-slate-600">{about.goals}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {about.interests.map((interest) => (
                    <span key={interest} className="soft-chip">
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.article>
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.05 }}
                className="panel"
              >
                <h3 className="text-xl font-semibold text-slate-900">Education</h3>
                <div className="mt-4 space-y-4">
                  {about.education.map((edu) => (
                    <div key={edu.degree}>
                      <p className="font-semibold text-slate-800">{edu.degree}</p>
                      <p className="text-slate-600">{edu.school}</p>
                      <p className="text-sm text-slate-500">
                        {edu.period} - {edu.location}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-gradient-to-b from-blue-50/80 to-slate-50 py-20">
          <div className="section-wrap">
            <SectionTitle title="Projects" subtitle="Projets academiques et stages professionnels autour de l'IA et du full-stack." />
            <h3 className="mb-4 text-xl font-semibold text-slate-900">Academic Projects</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="panel border-blue-100"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-slate-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="soft-chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link !== '#' ? (
                    <a href={project.link} className="mt-4 inline-block font-semibold text-blue-700 hover:text-blue-800">
                      View project
                    </a>
                  ) : null}
                </motion.article>
              ))}
            </div>
            <h3 className="mb-4 mt-10 text-xl font-semibold text-slate-900">Internships</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {experiences.map((exp, index) => (
                <motion.article
                  key={exp.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.07 }}
                  className="panel border-blue-100"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h4 className="font-semibold text-slate-900">{exp.title}</h4>
                    {'demoUrl' in exp && exp.demoUrl ? (
                      <a href={exp.demoUrl} target="_blank" rel="noreferrer" className="fancy-button-accent px-4 py-2 text-sm">
                        Preview
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    {exp.period} - {exp.location}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {exp.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="soft-chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="section-wrap">
            <SectionTitle title="Skills" subtitle="Competences techniques organisees par categories, puis certifications." />
            <div className="grid gap-5 md:grid-cols-2">
              {skills.categories.map((category, index) => (
                <motion.article
                  key={category.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                  className="panel border-blue-100"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        {category.title === 'Frameworks Web et Mobiles' ? skillIcon(item) : <FaCode className="text-blue-600" />}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto mt-10 w-full max-w-3xl"
            >
              <div className="panel border-blue-100">
                <div className="mb-5 text-center">
                  <h3 className="text-2xl font-semibold text-slate-900">Certificates</h3>
                  <p className="mt-1 text-sm text-slate-500">Professional certifications and continuous learning achievements.</p>
                </div>
                <ul className="space-y-3">
                  {skills.certificates.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      <FaCheckCircle className="shrink-0 text-blue-600" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-b from-blue-50/70 to-slate-50 py-20">
          <div className="section-wrap">
            <SectionTitle title="Contact" subtitle="You can reach me directly through these links." />
            <div className="panel border-blue-100 md:w-[70%]">
              <div className="space-y-4 text-slate-700">
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <FaEnvelope className="text-blue-600" />
                  {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                  <FaLinkedin className="text-blue-600" />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
                  <FaGithub className="text-blue-600" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isResumeOpen ? (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onMouseDown={() => setIsResumeOpen(false)}
        >
          <div className="modal-panel" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">Resume Preview</h3>
              <div className="flex items-center gap-2">
                <a href="/cv-sabrine-khouaja.pdf" className="fancy-button-primary">
                  <FaDownload />
                  Download
                </a>
                <button type="button" className="fancy-button-ghost" onClick={() => setIsResumeOpen(false)}>
                  Close
                </button>
              </div>
            </div>
            <div className="modal-body">
              <iframe
                src="/cv-sabrine-khouaja.pdf#toolbar=1&navpanes=1&scrollbar=1"
                title="Sabrine Khouaja Resume"
                className="h-[78vh] min-h-[520px] w-full"
              />
            </div>
          </div>
        </div>
      ) : null}

      <footer className="border-t border-blue-100/70 bg-white/80 py-6 backdrop-blur">
        <div className="section-wrap text-center text-sm text-slate-500">
          © 2026 sabrine khouaja — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
