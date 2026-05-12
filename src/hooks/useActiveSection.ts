'use client'

import { useEffect, useRef, useState } from 'react'

export function useActiveSection(hrefs: string[]) {
  const [activeHref, setActiveHref] = useState('')
  const idsRef = useRef(hrefs.map((h) => h.replace('#', '')))
  const hrefsRef = useRef(hrefs)

  useEffect(() => {
    const ids = idsRef.current
    const allHrefs = hrefsRef.current
    const intersecting = new Set<string>()

    const updateActive = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
      if (atBottom) {
        setActiveHref(allHrefs[allHrefs.length - 1])
        return
      }
      const active = ids.find((id) => intersecting.has(id))
      setActiveHref(active ? `#${active}` : '')
    }

    const observers = ids.flatMap((id) => {
      const el = document.getElementById(id)
      if (!el) return []
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) intersecting.add(id)
          else intersecting.delete(id)
          updateActive()
        },
        { rootMargin: '-64px 0px -55% 0px', threshold: 0 },
      )
      observer.observe(el)
      return [observer]
    })

    window.addEventListener('scroll', updateActive, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', updateActive)
    }
  }, [])

  return activeHref
}
