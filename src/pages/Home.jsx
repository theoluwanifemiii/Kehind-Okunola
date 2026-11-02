import { useRef } from 'react'
import { LINKS, ROUTES } from '../content.js'
import { useReveal } from '../useReveal.js'
import { Drift, Footer, HomeNav, Pill, PrimaryButton, SectionHead, SecondaryButton } from '../components/ui.jsx'
import {
  ArrowUpRightIcon,
  BoltIcon,
  CapIcon,
  GlobeIcon,
  GridIcon,
  PillIcon,
  TargetIcon,
} from '../components/icons.jsx'

const MARQUEE_ITEMS = [
  'Product Design',
  'UI / UX',
  'Fintech',
  'SaaS',
  'Health Tech',
  'Design Systems',
  'User Research',
  'Prototyping',
  'Product Strategy',
  'Figma',
]

const STATS = [
  { num: '5', sup: '+', label: 'Years Experience', sub: 'Crafting products across Fintech, SaaS and Health Tech' },
  { num: '20', sup: '+', label: 'Projects Shipped', sub: 'MVPs to enterprise scale platforms, zero compromises' },
  { num: '3', label: 'Core Verticals', sub: 'Fintech, SaaS and Health Tech. Deep, not shallow.' },
  { num: 'Global', label: 'Open to Remote', sub: 'Lagos based, available for worldwide collaborations', dark: true },
]

const SKILLS = ['Product Design', 'UX Research', 'Design Systems', 'Prototyping', 'Product Strategy', 'Figma']

const VALUES = [
  { icon: BoltIcon, title: 'Fast and iterative', desc: 'Rapid prototypes, real feedback, better products. I move quickly with conviction.' },
  { icon: GlobeIcon, title: 'Global mindset', desc: 'Built for Nigerian users, thinking for global markets. Culturally fluent, universally clear.' },
  { icon: GridIcon, title: 'Systems thinker', desc: 'From design tokens to component libraries, I build foundations that scale with the product.' },
  { icon: CapIcon, title: 'University of Ilorin', desc: 'Strong analytical foundation, applied to design challenges across three industries.' },
]

const FOOTER_LINKS = [
  { label: 'LinkedIn', href: LINKS.linkedin, external: true },
  { label: 'Behance', href: LINKS.behance, external: true },
  { label: 'Contact', href: ROUTES.contact },
]

function heroIntro(gsap) {
  gsap
    .timeline({ defaults: { ease: 'power3.out' } })
    .from('.nav-brand, .nav-right > *', { opacity: 0, y: -14, duration: 0.6, stagger: 0.08 })
    .from('.hero-badge', { opacity: 0, y: 16, duration: 0.6 }, 0.15)
    .from('.hero-heading', { opacity: 0, y: 28, duration: 0.85, ease: 'expo.out' }, 0.25)
    .from('.hero-sub', { opacity: 0, y: 20, duration: 0.7 }, 0.45)
    .from('.hero-btn', { opacity: 0, y: 20, duration: 0.7 }, 0.55)
    .from('.marquee-wrap', { opacity: 0, duration: 0.5 }, 0.65)
    .from('.hero-peek', { opacity: 0, y: '30%', duration: 0.9, ease: 'expo.out' }, 0.65)
    .from('.peek-card', { opacity: 0, y: 40, duration: 0.7, stagger: 0.1, ease: 'power2.out' }, 0.8)
}

function Tags({ items }) {
  return (
    <div className="wc-tags">
      {items.map((tag) => (
        <span className="wc-tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default function Home() {
  const scope = useRef(null)
  useReveal(scope, heroIntro)

  return (
    <div ref={scope}>
      {/* HERO */}
      <section className="hero">
        <Drift />
        <HomeNav />

        <div className="hero-content">
          <div className="pill hero-badge">
            <span className="hero-stars" aria-label="Five stars">
              ★★★★★
            </span>
            35+ Happy Clients
          </div>

          <h1 className="hero-heading">
            I craft products
            <br />
            people actually
            <br />
            enjoy using
          </h1>

          <p className="hero-sub">
            Product Designer crafting clear, purposeful interfaces for Fintech, SaaS, and Health Tech, the
            kind that build trust and get used.
          </p>

          <PrimaryButton href={ROUTES.work} className="hero-btn">
            View My Work
          </PrimaryButton>
        </div>

        <div className="hero-peek">
          <div className="peek-card peek-side">
            <img src="/hero/eco-hero.jpg" alt="Eco-Hero recycling app case study" className="peek-img" />
          </div>
          <div className="peek-card peek-featured">
            <img src="/hero/sapa-pay.jpg" alt="Sapa Pay fintech app case study" className="peek-img" />
          </div>
          <div className="peek-card peek-side">
            <img src="/hero/transgas.jpg" alt="Transgas delivery app case study" className="peek-img" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="m-dot"></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="section">
        <SectionHead
          label="By the numbers"
          title={
            <>
              Five years of shipping
              <br />
              products that matter
            </>
          }
          sub="From early MVPs to enterprise platforms across Fintech, SaaS, and Health Tech."
        />
        <div className="stats-grid container reveal">
          {STATS.map((stat) => (
            <div className={`stat-card ${stat.dark ? 'stat-card-dark' : ''}`} key={stat.label}>
              <div className="stat-num">
                {stat.num}
                {stat.sup && <span className="stat-sup">{stat.sup}</span>}
              </div>
              <div className="stat-lbl">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="section section-grey" id="work">
        <SectionHead
          label="Selected Work"
          title={
            <>
              Case studies built
              <br />
              around real people
            </>
          }
          sub="A few projects where clear design turned complex problems into products people trust."
        />

        <div className="work-list container reveal">
          <a href={ROUTES.caseStudy} className="work-card work-featured">
            <div className="wf-copy">
              <div className="wc-num">01 · Featured case study</div>
              <Tags items={['EdTech', 'AI Powered', 'Web App', 'UX Research']} />
              <h3 className="wf-title">
                Revolutionizing
                <br />
                Interview Prep
              </h3>
              <p className="wf-desc">
                Redesigning how candidates prepare for job interviews. An AI powered platform that turns
                anxiety into confidence through smart practice flows and real time adaptive feedback.
              </p>
              <span className="wf-cta">
                <span>Read Case Study</span>
                <ArrowUpRightIcon />
              </span>
            </div>
            <div className="wc-visual wf-visual" aria-hidden="true">
              <div className="phone phone-main">
                <div className="sk sk-dark" style={{ width: '70%' }}></div>
                <div className="sk" style={{ width: '45%' }}></div>
                <div className="phone-ring-box">
                  <div className="phone-ring"></div>
                </div>
                <div className="phone-row"></div>
                <div className="phone-row"></div>
                <div className="sk sk-live" style={{ width: '50%' }}></div>
              </div>
              <div className="phone phone-back">
                <div className="sk sk-dark" style={{ width: '60%' }}></div>
                <div className="sk" style={{ width: '40%' }}></div>
                <div className="phone-fill"></div>
                <div className="phone-btn"></div>
              </div>
            </div>
          </a>

          <div className="work-pair">
            <article className="work-card">
              <span className="wc-arrow" aria-hidden="true">
                <ArrowUpRightIcon size={16} />
              </span>
              <div className="wc-num">02</div>
              <Tags items={['Fintech', 'B2B SaaS', 'Dashboard']} />
              <h3 className="wc-title">Financial Analytics Dashboard</h3>
              <p className="wc-desc">
                Turning raw transaction data into actionable intelligence. A B2B SaaS dashboard built for
                teams that need clarity at scale.
              </p>
              <div className="wc-visual wc-visual-sm" aria-hidden="true">
                <div className="mock-window">
                  <div className="kpi-row">
                    {['70%', '60%', '45%'].map((w) => (
                      <div className="kpi" key={w}>
                        <div className="sk sk-thin" style={{ width: '50%' }}></div>
                        <div className="sk sk-num" style={{ width: w }}></div>
                      </div>
                    ))}
                  </div>
                  <div className="bars">
                    {[40, 65, 52, 80, 58, 90, 70].map((h, i) => (
                      <div className={`bar ${i === 3 ? 'bar-on' : ''}`} key={i} style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="work-card">
              <span className="wc-arrow" aria-hidden="true">
                <ArrowUpRightIcon size={16} />
              </span>
              <div className="wc-num">03</div>
              <Tags items={['Health Tech', 'Supply Chain', 'Nigeria']} />
              <h3 className="wc-title">Medicare Supply Chain Platform</h3>
              <p className="wc-desc">
                Streamlining pharmaceutical procurement across Nigeria. Connecting pharmacies, distributors
                and health facilities in a single, seamless platform.
              </p>
              <div className="wc-visual wc-visual-sm" aria-hidden="true">
                <div className="mock-window mock-split">
                  <div className="mock-side">
                    <div className="sk sk-dark" style={{ width: '70%' }}></div>
                    <div className="sk sk-thin" style={{ width: '80%', marginTop: 8 }}></div>
                    <div className="sk sk-thin" style={{ width: '60%' }}></div>
                    <div className="sk sk-thin" style={{ width: '75%' }}></div>
                  </div>
                  <div className="mock-main">
                    <div className="sk" style={{ width: '40%', background: 'rgba(11,11,10,0.14)' }}></div>
                    {[
                      ['50%', true],
                      ['38%', true],
                      ['44%', false],
                    ].map(([w, on]) => (
                      <div className="mock-item" key={w}>
                        <span className={`mock-status ${on ? 'on' : ''}`}></span>
                        <div className="sk sk-thin" style={{ width: w, background: 'rgba(11,11,10,0.12)' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <SectionHead
          label="About"
          className="section-head-tight"
          title={
            <>
              Designing products people
              <br />
              actually enjoy using
            </>
          }
        />

        <div className="about-layout container reveal">
          <div className="about-card">
            <div className="about-id">
              <img src="/avatar.png" alt="Kehinde Okunola" className="about-avatar" />
              <div className="about-id-text">
                <span className="about-name">Kehinde Okunola</span>
                <span className="about-role">Senior Product Designer · Lagos, Nigeria</span>
              </div>
              <span className="chip-badge chip-badge-shadow">
                <span className="dot dot-live"></span>
                Available for Work
              </span>
            </div>

            <p className="about-quote">
              I believe great design is invisible. It just works, <span>and it feels right.</span>
            </p>
            <p className="about-p">
              I&rsquo;m a product designer based in Lagos, Nigeria, with deep expertise in{' '}
              <strong>Fintech, SaaS and Health Tech</strong>. I&rsquo;ve spent years translating human needs
              into interfaces that are as functional as they are beautiful.
            </p>
            <p className="about-p">
              Right now I&rsquo;m solving complex procurement problems for a system that affects millions of
              Nigerians every day.
            </p>

            <div className="role-card">
              <div className="role-icon">
                <PillIcon />
              </div>
              <div className="role-info">
                <div className="role-title">Medicare Supply Chain</div>
                <div className="role-sub">Currently shaping digital health</div>
              </div>
              <span className="chip-badge">
                <span className="dot dot-ink"></span>
                Current
              </span>
            </div>

            <div className="skills-head">Skills and expertise</div>
            <div className="skills">
              {SKILLS.map((skill) => (
                <span className="skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bento">
            <div className="bento-tile bento-full">
              <div className="bento-icon">
                <TargetIcon />
              </div>
              <div className="bento-t">User centered, always</div>
              <div className="bento-d">
                Every decision traces back to the user. Not trends, not ego, not gut feelings. The person on
                the other side of the screen is the only stakeholder that counts.
              </div>
            </div>
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div className="bento-tile" key={title}>
                <div className="bento-icon">
                  <Icon />
                </div>
                <div className="bento-t">{title}</div>
                <div className="bento-d">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact-wrap">
        <Drift />
        <section className="contact" id="contact">
          <div className="contact-bg-text" aria-hidden="true">
            LET&rsquo;S BUILD
          </div>
          <Pill dot="live" className="reveal">
            Let&rsquo;s Work Together
          </Pill>
          <h2 className="display reveal">
            Have a project
            <br />
            <span className="soft">in mind?</span>
          </h2>
          <p className="contact-sub reveal">
            Whether you&rsquo;re building a fintech app, scaling a SaaS product, or solving a health tech
            challenge, I&rsquo;d love to be part of the team.
          </p>
          <div className="btn-row reveal">
            <PrimaryButton href={ROUTES.contact}>Get in Touch</PrimaryButton>
            <SecondaryButton href={LINKS.behance} target="_blank" rel="noreferrer">
              View Behance
              <ArrowUpRightIcon />
            </SecondaryButton>
          </div>
        </section>
        <Footer note="All rights reserved." links={FOOTER_LINKS} showAvatar />
      </div>
    </div>
  )
}
