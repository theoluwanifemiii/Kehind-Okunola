import { useCallback, useEffect, useState } from 'react'
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

const PAGES = {
  home: Home,
  'case-study': CaseStudy,
  contact: Contact,
}

function App() {
  const [route, setRoute] = useState(getRoute)
  // First load only: the page mounts once the preloader has finished counting
  // (ready), and the overlay is removed after it slides away (done).
  const [ready, setReady] = useState(false)
  const [done, setDone] = useState(false)
  const handleReady = useCallback(() => setReady(true), [])
  const handleDone = useCallback(() => setDone(true), [])

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // On page change, jump to the requested section (e.g. "#work") or the top.
  useEffect(() => {
    if (!ready) return
    const hash = window.location.hash
    const section = route === 'home' && hash.length > 1 && !hash.startsWith('#/') && document.getElementById(hash.slice(1))
    if (section) section.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route, ready])

  const Page = PAGES[route]
  return (
    <>
      {ready && <Page />}
      {!done && <Preloader onReady={handleReady} onDone={handleDone} />}
    </>
  )
}

export default App
