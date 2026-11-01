'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Expand } from 'lucide-react'
import type { FeaturedProject } from '@/app/data'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

export function FeaturedProjectDetails({ project }: { project: FeaturedProject }) {
  const [expanded, setExpanded] = useState(false)
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const screenshots = project.screenshots
  const current = screenshots[index]
  const move = (direction: number) => setIndex((value) => (value + direction + screenshots.length) % screenshots.length)

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="space-y-6 p-5 sm:p-7">
        <div>
          <h4 className="text-2xl font-semibold tracking-tight">{project.name}</h4>
          <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
          <button type="button" aria-expanded={expanded} aria-controls={`${project.id}-details`} onClick={() => setExpanded(!expanded)} className="mt-2 rounded text-sm font-medium underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
            {expanded ? 'See less' : 'See more…'}
          </button>
          {expanded && <div id={`${project.id}-details`} className="mt-5 space-y-5">
            <div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{item}</span>)}</div>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Construction ERP System modules and capabilities</caption>
                <thead className="bg-zinc-50 dark:bg-zinc-900"><tr><th scope="col" className="px-4 py-3">Area</th><th scope="col" className="px-4 py-3">What it helps you do</th></tr></thead>
                <tbody>{project.modules.map((module) => <tr key={module.name} className="border-t border-zinc-200 align-top dark:border-zinc-800"><th scope="row" className="min-w-36 px-4 py-3 font-medium">{module.name}</th><td className="px-4 py-3 leading-6 text-zinc-600 dark:text-zinc-400">{module.description}</td></tr>)}</tbody>
              </table>
            </div>
          </div>}
        </div>

        <section aria-label="Demo credentials" className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
          <h5 className="text-sm font-semibold">Credentials</h5>
          <dl className="mt-3 space-y-2 text-sm"><div><dt className="text-xs text-zinc-500">Email</dt><dd className="break-all font-mono">{project.credentials.email}</dd></div><div><dt className="text-xs text-zinc-500">Password</dt><dd className="font-mono">{project.credentials.password}</dd></div></dl>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-950">Try Live Demo <ExternalLink className="h-4 w-4" /></a>
        </section>

        {current && <section aria-roledescription="carousel" aria-label="Construction ERP module screenshots" className="space-y-3" onKeyDown={(event) => { if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) } if (event.key === 'ArrowRight') { event.preventDefault(); move(1) } }}>
          <div className="flex items-center justify-between gap-3"><h5 className="text-sm font-semibold">System screenshots</h5><span aria-live="polite" className="text-xs text-zinc-500">{index + 1} / {screenshots.length}</span></div>
          <button type="button" onClick={() => setLightbox(true)} aria-label={`Enlarge ${current.title} screenshot`} className="group relative block w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <img src={current.src} alt={`${project.name} — ${current.title}`} className="aspect-[16/10] w-full object-cover object-top" loading="lazy" />
            <span className="absolute bottom-3 right-3 rounded-full bg-black/70 p-2 text-white"><Expand className="h-4 w-4" /></span>
          </button>
          <div className="flex items-center justify-between gap-3"><button type="button" onClick={() => move(-1)} aria-label="Previous screenshot" className="rounded-full border border-zinc-200 p-2 dark:border-zinc-800"><ChevronLeft className="h-4 w-4" /></button><p aria-live="polite" className="text-center text-sm text-zinc-600 dark:text-zinc-400">{current.title}</p><button type="button" onClick={() => move(1)} aria-label="Next screenshot" className="rounded-full border border-zinc-200 p-2 dark:border-zinc-800"><ChevronRight className="h-4 w-4" /></button></div>
          <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Choose module screenshot">{screenshots.map((screenshot, slide) => <button key={screenshot.src} type="button" onClick={() => setIndex(slide)} aria-label={`Show ${screenshot.title}`} aria-current={index === slide ? 'true' : undefined} className={`w-24 shrink-0 overflow-hidden rounded-lg border-2 ${index === slide ? 'border-zinc-950 dark:border-white' : 'border-transparent opacity-60 hover:opacity-100'}`}><img src={screenshot.src} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover object-top" /></button>)}</div>
          <Lightbox open={lightbox} close={() => setLightbox(false)} index={index} slides={screenshots.map((screenshot) => ({ src: screenshot.src, alt: screenshot.title }))} plugins={[Zoom]} on={{ view: ({ index: slide }) => setIndex(slide) }} />
        </section>}
      </div>
    </article>
  )
}

