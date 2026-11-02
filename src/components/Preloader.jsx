import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const MIN_DURATION = 1.4 // seconds the counter takes to reach 90%

// Above-the-fold images, fetched up front so the hero doesn't pop in.
const PRELOAD_IMAGES = ['/avatar.png', '/hero/eco-hero.jpg', '/hero/sapa-pay.jpg', '/hero/transgas.jpg']

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = img.onerror = resolve
    img.src = src
  })
}

// Resolves once the document, web fonts and hero images have loaded.
function whenAssetsReady() {
  const loaded =
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }))
  const fonts = document.fonts ? document.fonts.ready : Promise.resolve()
  return Promise.all([loaded, fonts, ...PRELOAD_IMAGES.map(loadImage)])
}

// Full-screen intro shown on first load. Counts up while assets load, calls
// onReady (so the page can mount underneath), then slides away and calls onDone.
export default function Preloader({ onReady, onDone }) {
  const root = useRef(null)
  const count = useRef(null)
  const bar = useRef(null)

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const progress = { value: 0 }
    const render = () => {
      const v = Math.round(progress.value)
      if (count.current) count.current.textContent = String(v).padStart(2, '0')
      if (bar.current) bar.current.style.transform = `scaleX(${progress.value / 100})`
    }

    document.body.style.overflow = 'hidden'
    let cancelled = false

    const ctx = gsap.context(() => {
      gsap.from('.pl-brand > *', { opacity: 0, y: 14, duration: 0.6, stagger: 0.08, ease: 'power3.out' })

      const counting = gsap.to(progress, {
        value: 90,
        duration: reduceMotion ? 0.2 : MIN_DURATION,
        ease: 'power2.inOut',
        onUpdate: render,
      })

      Promise.all([whenAssetsReady(), counting.then()]).then(() => {
        if (cancelled) return
        gsap
          .timeline()
          .to(progress, { value: 100, duration: 0.35, ease: 'power2.out', onUpdate: render })
          .add(() => onReady())
          .to('.pl-inner', { opacity: 0, y: -24, duration: 0.45, ease: 'power2.in' }, '+=0.1')
          .to(root.current, {
            yPercent: -100,
            duration: reduceMotion ? 0.01 : 0.9,
            ease: 'expo.inOut',
            onComplete: () => {
              document.body.style.overflow = ''
              onDone()
            },
          }, '-=0.15')
      })
    }, root)

    return () => {
      cancelled = true
      document.body.style.overflow = ''
      ctx.revert()
    }
    // Runs once: the callbacks come from App and only flip state.
  }, [onReady, onDone])

  return (
    <div className="preloader" ref={root} role="status" aria-label="Loading">
      <div className="drift" aria-hidden="true"></div>
      <div className="pl-inner">
        <div className="pl-brand">
          <img src="/avatar.png" alt="" className="pl-avatar" />
          <span className="pl-name">Kehinde Okunola</span>
          <span className="pl-role">Senior Product Designer</span>
        </div>
        <div className="pl-foot">
          <div className="pl-track">
            <div className="pl-bar" ref={bar}></div>
          </div>
          <div className="pl-count" aria-hidden="true">
            <span ref={count}>00</span>
            <span className="pl-pct">%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
