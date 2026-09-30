'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { FEATURED_PROJECTS, OTHER_PROJECTS, EMAIL, SOCIAL_LINKS } from './data'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

const VARIANTS_CONTAINER = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
const VARIANTS_SECTION = { hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } }
const TRANSITION_SECTION = { duration: 0.3 }

function ProjectImages({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false)
  return <><img src={images[0]} alt="Project preview" className="h-[180px] w-full cursor-pointer rounded-md object-cover transition-transform hover:scale-105" onClick={() => setOpen(true)} /><Lightbox open={open} close={() => setOpen(false)} index={0} slides={images.map((src) => ({ src }))} plugins={[Thumbnails, Zoom]} /></>
}

function MagneticSocialLink({ children, link }: { children: React.ReactNode; link: string }) {
  return <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}><a href={link} target="_blank" rel="noopener noreferrer" className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">{children}<ExternalLink className="h-3 w-3" /></a></Magnetic>
}

export default function Personal() {
  return <motion.main className="space-y-24" variants={VARIANTS_CONTAINER} initial="hidden" animate="visible">
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}><p className="text-zinc-600 dark:text-zinc-400">Focused on building robust, scalable, and intuitive web & native applications. Experienced in delivering well-crafted systems that balance performance with user-centered design. Passionate about bridging the gap between backend architecture and front-end usability.</p></motion.section>

    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className="mb-5"><h3 className="text-lg font-medium">Featured Projects</h3><p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Recent full-stack systems built around real business operations.</p></div>
      {FEATURED_PROJECTS.map((project) => <article key={project.id} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="border-b border-zinc-200 bg-zinc-50/60 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between"><div className="max-w-2xl"><p className="text-sm text-zinc-500 dark:text-zinc-400">{project.subtitle}</p><h4 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h4><p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p></div><a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-zinc-100 dark:text-zinc-950">Try Live Demo <ExternalLink className="h-4 w-4" /></a></div>
        </div>
        <div className="grid gap-8 p-6 md:grid-cols-[1.25fr_.75fr] md:p-8"><div><p className="mb-3 text-sm font-medium">What the system handles</p><div className="grid gap-2 sm:grid-cols-2">{project.features.map((feature) => <div key={feature} className="rounded-xl border border-zinc-200 px-3 py-2.5 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">{feature}</div>)}</div></div><div><p className="mb-3 text-sm font-medium">Technology</p><div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{item}</span>)}</div><div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900"><p className="text-sm font-semibold">Interactive Demo Access</p><p className="mt-1 text-xs leading-5 text-zinc-500">Use the credentials below to explore the live system.</p><div className="mt-3 space-y-2"><div><p className="text-[11px] uppercase tracking-wide text-zinc-500">Username</p><p className="break-all font-mono text-sm text-zinc-900 dark:text-zinc-100">{project.demo.username}</p></div><div><p className="text-[11px] uppercase tracking-wide text-zinc-500">Password</p><p className="font-mono text-sm text-zinc-900 dark:text-zinc-100">{project.demo.password}</p></div></div><a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4">Open demo <ExternalLink className="h-3.5 w-3.5" /></a></div></div></div>
      </article>)}
    </motion.section>

    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className="mb-5"><h3 className="text-lg font-medium">Other Projects</h3><p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Earlier CRM, employee records, inventory and ERP systems.</p></div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">{OTHER_PROJECTS.map((project) => <div key={project.name} className="space-y-2"><div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"><ProjectImages images={project.images} /></div><div className="px-1">{project.link ? <a className="group relative inline-flex items-center gap-1 font-[450] text-zinc-900 dark:text-zinc-50" href={project.link} target="_blank" rel="noopener noreferrer">{project.name}<ExternalLink className="h-3.5 w-3.5" /></a> : <h4 className="font-[450] text-zinc-900 dark:text-zinc-50">{project.name}</h4>}<p className="text-base text-zinc-600 dark:text-zinc-400">{project.description}</p></div></div>)}</div>
    </motion.section>

    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}><p className="text-zinc-600 dark:text-zinc-400">Other systems include inventory applications, biometric time-keeping using UareU fingerprint readers, payroll-related workflows, and enterprise software built with WinForms.</p><div className="mt-4"><MagneticSocialLink link="https://www.linkedin.com/in/mike-francis-cabatino-91647b2b0/">LinkedIn Profile</MagneticSocialLink></div></motion.section>

    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}><h3 className="mb-5 text-lg font-medium">For more information about me, you may check my CV.</h3><a className="relative block overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30" href="/Mike_CV.pdf" download><Spotlight className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50" size={64} /><div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950"><div className="flex justify-between"><div><h4 className="font-normal dark:text-zinc-100">Mike Cabatino - CV</h4><p className="text-zinc-500 dark:text-zinc-400">Download my updated résumé in PDF format</p></div><p className="text-zinc-600 dark:text-zinc-400">📄 PDF</p></div></div></a></motion.section>

    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}><h3 className="mb-5 text-lg font-medium">Connect</h3><p className="mb-5 text-zinc-600 dark:text-zinc-400">Feel free to contact me at <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>{EMAIL}</a></p><div className="flex flex-wrap items-center gap-3">{SOCIAL_LINKS.map((link) => <MagneticSocialLink key={link.label} link={link.link}>{link.label}</MagneticSocialLink>)}</div></motion.section>
  </motion.main>
}
