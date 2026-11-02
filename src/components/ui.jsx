import { LINKS, ROUTES } from '../content.js'
import { ArrowLeftIcon, BehanceIcon, LinkedInIcon } from './icons.jsx'

// Animated diagonal light bands behind the grey hero areas.
export function Drift() {
  return <div className="drift" aria-hidden="true"></div>
}

// White rounded label with a leading dot, used above section headings.
// dot: 'dark' | 'live' (pulsing green) | any CSS colour
export function Pill({ dot = 'dark', className = '', children }) {
  const isPreset = dot === 'dark' || dot === 'live'
  return (
    <div className={`pill ${className}`}>
      <span
        className={`dot ${isPreset ? `dot-${dot}` : ''}`}
        style={isPreset ? undefined : { background: dot }}
      ></span>
      {children}
    </div>
  )
}

// Dark gradient button with the moving shine.
export function PrimaryButton({ href, children, className = '', ...rest }) {
  return (
    <a href={href} className={`btn-p ${className}`} {...rest}>
      <span className="shine" aria-hidden="true"></span>
      {children}
    </a>
  )
}

export function SecondaryButton({ href, children, className = '', ...rest }) {
  return (
    <a href={href} className={`btn-s ${className}`} {...rest}>
      {children}
    </a>
  )
}

export function SectionHead({ label, title, sub, className = '' }) {
  return (
    <div className={`section-head reveal ${className}`}>
      <Pill>{label}</Pill>
      <h2 className="h2">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  )
}

function Brand({ href }) {
  return (
    <a href={href} className="nav-brand">
      <img src="/avatar.png" alt="Kehinde Okunola" className="nav-avatar" />
      <div className="nav-brand-text">
        <span className="nav-name">Kehinde Okunola</span>
        <span className="nav-role">Senior Product Designer</span>
      </div>
    </a>
  )
}

// Home nav: availability + social icons.
export function HomeNav() {
  return (
    <nav className="nav">
      <Brand href={ROUTES.home} />
      <div className="nav-right">
        <div className="nav-avail">
          <span className="dot dot-live"></span>
          Available for Work
        </div>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="nav-icon-btn" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={LINKS.behance} target="_blank" rel="noreferrer" className="nav-icon-btn" aria-label="Behance">
          <BehanceIcon />
        </a>
      </div>
    </nav>
  )
}

// Inner-page nav: brand + a "back" pill.
export function BackNav({ href, label }) {
  return (
    <nav className="nav">
      <Brand href={ROUTES.home} />
      <a href={href} className="btn-s btn-sm">
        <ArrowLeftIcon />
        {label}
      </a>
    </nav>
  )
}

export function Footer({ note, links, showAvatar = false }) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="foot-left">
        {showAvatar && <img src="/avatar.png" alt="" className="foot-avatar" />}
        <span>
          © {year} Kehinde Okunola. {note}
        </span>
      </div>
      <nav aria-label="Social links" className="foot-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
