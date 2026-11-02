import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CARD_SELECTOR =
  '.stat-card, .work-card, .bento-tile, .stage-card, .meta-card, .badge-card, .shot, .info-row'

// Fades in every `.reveal` block (and its cards) as it scrolls into view.
// `intro` runs once on mount for above-the-fold entrance animation.
export function useReveal(scopeRef, intro) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (intro) intro(gsap)

      // fromTo (not from) so a later ScrollTrigger.refresh() — e.g. triggered by
      // web fonts swapping in and shifting layout — can't snap a finished tween
      // back to its start state; fromTo always knows the explicit end value.
      gsap.utils.toArray('.reveal').forEach((el) => {
        const cards = el.querySelectorAll(CARD_SELECTOR)
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })

        tl.fromTo(el, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out' })

        if (cards.length) {
          tl.fromTo(
            cards,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.06 },
            0.1
          )
        }
      })
    }, scopeRef)

    return () => ctx.revert()
    // Runs once per page mount: scopeRef is a ref and intro a module-level function.
  }, [scopeRef, intro])
}
