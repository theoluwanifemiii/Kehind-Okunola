import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Analytics } from '@vercel/analytics/react'
import Preloader from './components/Preloader.jsx'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

// Hash routing keeps the site deployable as static files with no server rewrites.
// "#/..." hashes are pages; any other hash (e.g. "#work") is a section on the home page.
function getRoute() {
  const hash = window.location.hash
  if (hash.startsWith('#/case-study')) return 'case-study'
  if (hash.startsWith('#/contact')) return 'contact'
  return 'home'
}

// `path` is what Vercel Analytics records for each page. Its automatic tracking
// ignores the "#/..." part of the URL, so pageviews are reported from here instead.
const PAGES = {
  home: { Component: Home, label: 'Home', title: 'Kehinde Okunola — Product Designer', path: '/' },
  'case-study': {
    Component: CaseStudy,
    label: 'Case study',
    title: 'PrepInterview case study — Kehinde Okunola',
    path: '/case-study/prepinterview',
  },
  contact: { Component: Contact, label: 'Get in touch', title: 'Contact — Kehinde Okunola', path: '/contact' },
}

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function App() {
  // `route` is where the URL points; `shown` is the page on screen. They differ
  // while the transition curtain is covering the screen.
  const [route, setRoute] = useState(getRoute)
  const [shown, setShown] = useState(route)

  // First load only: the page mounts once the preloader has finished counting
  // (ready), and the overlay is removed after it slides away (done).
  const [ready, setReady] = useState(false)
  const [done, setDone] = useState(false)
  const handleReady = useCallback(() => setReady(true), [])
  const handleDone = useCallback(() => setDone(true), [])

  const curtain = useRef(null)
  const covering = useRef(false)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useLayoutEffect(() => {
    gsap.set(curtain.current, { yPercent: 100 })
  }, [])

  // Cover the screen, then swap the page underneath.
  useEffect(() => {
    if (route === shown) return
    if (!done) {
      setShown(route)
      return
    }
    const el = curtain.current
    const fast = reduceMotion()
    const y = gsap.getProperty(el, 'yPercent')
    const tl = gsap.timeline()
    // Start from below unless we interrupted a transition that's mid-way.
    if (y <= -100 || y >= 100) tl.set(el, { yPercent: 100 })
    tl.to(el, { yPercent: 0, duration: fast ? 0.01 : 0.65, ease: 'expo.inOut' })
      .fromTo('.curtain-label', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.25')
      .add(() => {
        covering.current = true
        setShown(route)
      }, '+=0.1')
    return () => tl.kill()
  }, [route, shown, done])

  // Once the new page is rendered, jump to the requested section (e.g. "#work") or the top.
  useEffect(() => {
    document.title = PAGES[shown].title
    if (!ready) return
    const hash = window.location.hash
    const section =
      shown === 'home' && hash.length > 1 && !hash.startsWith('#/') && document.getElementById(hash.slice(1))
    if (section) section.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [shown, ready])

  // Then lift the curtain away while the new page's entrance animation plays.
  useEffect(() => {
    if (!covering.current) return
    const el = curtain.current
    const tl = gsap.timeline({ delay: 0.05 })
    tl.to('.curtain-label', { opacity: 0, y: -24, duration: 0.3, ease: 'power2.in' })
      .to(el, {
        yPercent: -100,
        duration: reduceMotion() ? 0.01 : 0.8,
        ease: 'expo.inOut',
        onComplete: () => {
          covering.current = false
          gsap.set(el, { yPercent: 100 })
        },
      }, '-=0.1')
    return () => tl.kill()
  }, [shown])

  const Page = PAGES[shown].Component

  return (
    <>
      {ready && <Page />}
      <Analytics route={PAGES[shown].path} path={PAGES[shown].path} />
      <div className="curtain" ref={curtain} aria-hidden="true">
        <div className="drift"></div>
        <div className="curtain-label">
          <span className="curtain-eyebrow">Kehinde Okunola</span>
          <span className="curtain-title">{PAGES[route].label}</span>
        </div>
      </div>
      {!done && <Preloader onReady={handleReady} onDone={handleDone} />}
    </>
  )
}

export default App
