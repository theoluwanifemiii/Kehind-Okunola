import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

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
  {
    num: '5',
    sup: '+',
    label: 'Years Experience',
    sub: 'Crafting products across Fintech, SaaS & Health Tech',
  },
  {
    num: '20',
    sup: '+',
    label: 'Projects Shipped',
    sub: 'MVPs to enterprise-scale platforms, zero compromises',
  },
  {
    num: '3',
    sup: null,
    label: 'Core Verticals',
    sub: 'Fintech · SaaS · Health Tech. Deep, not shallow.',
  },
  {
    num: 'Global',
    sup: null,
    label: 'Open to Remote',
    sub: 'Lagos-based, available for worldwide collaborations',
    small: true,
  },
]

const SKILLS = [
  { name: 'Product Design', level: 95 },
  { name: 'UX Research', level: 85 },
  { name: 'Design Systems', level: 80 },
  { name: 'Prototyping', level: 90 },
  { name: 'Figma', level: 95 },
]

function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.nav-brand, .nav-right > *', { opacity: 0, y: -14, duration: 0.6, stagger: 0.08 })
        .from('.hero-badge', { opacity: 0, y: 16, duration: 0.6 }, 0.15)
        .from('.hero-heading', { opacity: 0, y: 28, duration: 0.85, ease: 'expo.out' }, 0.25)
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.7 }, 0.45)
        .from('.hero-btn', { opacity: 0, y: 20, duration: 0.7 }, 0.55)
        .from('.marquee-wrap', { opacity: 0, duration: 0.5 }, 0.65)
        .from(
          '.hero-peek',
          { opacity: 0, y: '30%', duration: 0.9, ease: 'expo.out' },
          0.65
        )
        .from(
          '.peek-card',
          { opacity: 0, y: 40, duration: 0.7, stagger: 0.1, ease: 'power2.out' },
          0.8
        )

      // Scroll-triggered section reveals.
      // fromTo (not from) so a later ScrollTrigger.refresh() — e.g. triggered by
      // web fonts swapping in and shifting layout — can't snap a finished tween
      // back to its start state; fromTo always knows the explicit end value.
      gsap.utils.toArray('.reveal').forEach((el) => {
        const cards = el.querySelectorAll('.stat-card, .work-card, .bento-c, .exp-row')
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })

        tl.fromTo(
          el,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out' }
        )

        if (cards.length) {
          tl.fromTo(
            cards,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.06 },
            0.1
          )
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <nav>
          <a href="#" className="nav-brand">
            <img src="/avatar.png" alt="Kehinde Okunola" className="nav-avatar" />
            <div className="nav-brand-text">
              <span className="nav-name">Kehinde Okunola</span>
              <span className="nav-role"> Senior Product Designer</span>
            </div>
          </a>
          <div className="nav-right">
            <div className="nav-avail">
              <span className="avail-dot"></span>
              Available for Work
            </div>
            <a
              href="https://www.linkedin.com/in/kehinde-okunola-26474471/"
              target="_blank"
              rel="noreferrer"
              className="nav-icon-btn"
              title="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://behance.net/kehindeokunola"
              target="_blank"
              rel="noreferrer"
              className="nav-icon-btn"
              title="Behance"
            >
              <svg width="16" height="10" viewBox="0 0 24 15" fill="currentColor">
                <path d="M7.443 0c.794 0 1.51.073 2.147.228.637.156 1.18.393 1.628.712.448.319.792.736 1.032 1.248.24.513.361 1.13.361 1.854 0 .796-.18 1.46-.54 1.997-.36.537-.898.977-1.613 1.32.972.278 1.7.776 2.183 1.494.483.718.724 1.582.724 2.593 0 .795-.155 1.484-.466 2.067-.31.583-.737 1.072-1.282 1.467-.545.394-1.172.683-1.882.867C9.025 15.849 8.279 16 7.502 16H0V0h7.443zm-.367 6.04c.636 0 1.155-.158 1.557-.472.402-.315.603-.79.603-1.423 0-.365-.066-.67-.197-.916-.131-.245-.309-.44-.534-.583-.225-.143-.485-.244-.78-.305-.295-.06-.606-.09-.932-.09H3.3v3.79h3.776zm.18 6.38c.37 0 .714-.037 1.033-.11.32-.073.6-.19.843-.35.242-.16.434-.376.574-.647.14-.27.211-.607.211-1.011 0-.797-.22-1.371-.661-1.721-.441-.35-1.03-.525-1.768-.525H3.3v4.364h3.956zm8.21-3.127c.28.667.776 1 1.49 1 .463 0 .864-.115 1.202-.348.338-.233.528-.477.572-.73h2.666c-.428 1.288-1.069 2.207-1.924 2.757-.855.55-1.89.824-3.106.824-.844 0-1.604-.137-2.28-.41-.675-.274-1.247-.663-1.714-1.167-.468-.504-.828-1.107-1.08-1.808-.253-.7-.38-1.473-.38-2.318 0-.82.13-1.581.393-2.283.263-.702.638-1.307 1.127-1.816.489-.509 1.066-.906 1.732-1.19.666-.284 1.41-.426 2.232-.426.912 0 1.713.177 2.402.53.69.354 1.26.83 1.712 1.428.453.598.78 1.286.98 2.063.2.777.28 1.595.237 2.454h-7.38c.057.793.318 1.374.597 2.04zm.61-3.917c-.299-.66-.837-.99-1.615-.99-.48 0-.876.09-1.188.27-.312.18-.558.394-.736.642-.178.249-.303.508-.375.778-.072.269-.112.513-.12.732h5.1c-.165-.777-.367-1.386-.666-2.032zM14.636 0h5.614v1.447h-5.614V0z" />
              </svg>
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-stars">★★★★★</span>
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
            Product Designer crafting clear, purposeful interfaces for Fintech, SaaS, and
            Health Tech — the kind that build trust and get used.
          </p>

          <a href="#work" className="hero-btn">
            View My Work
          </a>
        </div>

        <div className="hero-peek">
          <div className="peek-shelf">
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
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
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
      <section className="section" id="about">
        <div className="section-label reveal">By the numbers</div>
        <div className="stats-grid reveal">
          {STATS.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-num" style={stat.small ? { fontSize: 42, lineHeight: 1.3 } : undefined}>
                {stat.num}
                {stat.sup && <sup>{stat.sup}</sup>}
              </div>
              <div className="stat-lbl">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="section work-section" id="work">
        <div className="section-label reveal">Selected Work</div>
        <div className="work-grid reveal">
          <a
            href="https://behance.net/kehindeokunola"
            target="_blank"
            rel="noreferrer"
            className="work-card wc-full"
          >
            <span className="wc-arrow">↗</span>
            <div className="wc-num">01 — Featured Case Study</div>
            <div className="wc-tags">
              <span className="wc-tag">EdTech</span>
              <span className="wc-tag">AI-Powered</span>
              <span className="wc-tag">Mobile</span>
              <span className="wc-tag">UX Research</span>
            </div>
            <div className="wc-title">Revolutionizing Interview Prep</div>
            <div className="wc-desc">
              Redesigning how candidates prepare for job interviews — building an
              AI-powered platform that transforms anxiety into confidence through smart
              practice flows and real-time adaptive feedback.
            </div>
            <div className="wc-visual wc-v1">
              <div className="mock">
                <div className="m-bar g" style={{ width: '75%' }}></div>
                <div className="m-bar" style={{ width: '50%' }}></div>
                <div className="m-row">
                  <div className="m-box" style={{ width: 180, flexShrink: 0 }}></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                    <div className="m-box" style={{ height: 44 }}></div>
                    <div className="m-box" style={{ flex: 1 }}></div>
                  </div>
                </div>
                <div className="m-bar g" style={{ width: '42%' }}></div>
              </div>
            </div>
          </a>

          <div className="work-card">
            <span className="wc-arrow">↗</span>
            <div className="wc-num">02</div>
            <div className="wc-tags">
              <span className="wc-tag">Fintech</span>
              <span className="wc-tag">B2B SaaS</span>
              <span className="wc-tag">Dashboard</span>
            </div>
            <div className="wc-title">Financial Analytics Dashboard</div>
            <div className="wc-desc">
              Turning raw transaction data into actionable intelligence — a B2B SaaS
              dashboard built for teams that need clarity at scale.
            </div>
            <div className="wc-visual wc-v2">
              <div className="mock">
                <div style={{ display: 'flex', gap: 8, marginBottom: 2 }}>
                  <div className="m-box" style={{ height: 54, flex: 1 }}></div>
                  <div className="m-box" style={{ height: 54, flex: 1 }}></div>
                  <div className="m-box" style={{ height: 54, flex: 1 }}></div>
                </div>
                <div className="m-box" style={{ flex: 1, marginBottom: 2 }}></div>
                <div className="m-bar a" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          <div className="work-card">
            <span className="wc-arrow">↗</span>
            <div className="wc-num">03</div>
            <div className="wc-tags">
              <span className="wc-tag">Health Tech</span>
              <span className="wc-tag">Supply Chain</span>
              <span className="wc-tag">Nigeria</span>
            </div>
            <div className="wc-title">Medicare Supply Chain Platform</div>
            <div className="wc-desc">
              Streamlining pharmaceutical procurement across Nigeria — connecting
              pharmacies, distributors, and health facilities in a single, seamless
              platform.
            </div>
            <div className="wc-visual wc-v3">
              <div className="mock">
                <div className="m-bar b" style={{ width: '58%' }}></div>
                <div className="m-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, width: 130, flexShrink: 0 }}>
                    <div className="m-box" style={{ flex: 1 }}></div>
                    <div className="m-box" style={{ flex: 1 }}></div>
                  </div>
                  <div className="m-box" style={{ flex: 1 }}></div>
                </div>
                <div className="m-bar" style={{ width: '38%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr"></div>

      {/* ABOUT */}
      <section className="section" id="about-section">
        <div className="section-label reveal">About</div>
        <div className="about-layout reveal">
          <div>
            <h2 className="about-h">Designing products people actually enjoy using.</h2>
            <p className="about-p">
              I&rsquo;m a product designer based in Lagos, Nigeria, with deep expertise
              in Fintech, SaaS, and Health Tech. I believe great design is invisible —
              it just works, and it feels right.
            </p>
            <p className="about-p">
              Currently shaping digital health at{' '}
              <strong>Medicare Supply Chain</strong>, where I&rsquo;m solving complex
              procurement problems for a system that affects millions of Nigerians
              every day.
            </p>
            <p className="about-p">
              I studied at the <strong>University of Ilorin</strong> and have spent
              years honing the craft of translating human needs into interfaces that
              are as functional as they are beautiful.
            </p>

            <div className="role-card">
              <div className="role-icon">💊</div>
              <div className="role-info">
                <div className="role-title">Medicare Supply Chain</div>
                <div className="role-sub">Product Designer · Lagos, Nigeria</div>
              </div>
              <div className="role-badge">Current</div>
            </div>

            <div className="exp-head">Skills &amp; Expertise</div>
            <div className="exp-list">
              {SKILLS.map((skill) => (
                <div className="exp-row" key={skill.name}>
                  <span className="exp-name">{skill.name}</span>
                  <div className="exp-bar">
                    <div className="exp-bar-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento">
            <div className="bento-c bento-c-full bento-c-accent">
              <div className="bento-icon">🎯</div>
              <div className="bento-t">User-centered, always</div>
              <div className="bento-d">
                Every decision traces back to the user — not trends, not ego, not gut
                feelings. The person on the other side of the screen is the only
                stakeholder that counts.
              </div>
            </div>
            <div className="bento-c">
              <div className="bento-icon">⚡</div>
              <div className="bento-t">Fast &amp; iterative</div>
              <div className="bento-d">
                Rapid prototypes, real feedback, better products. I move quickly with
                conviction.
              </div>
            </div>
            <div className="bento-c">
              <div className="bento-icon">🌍</div>
              <div className="bento-t">Global mindset</div>
              <div className="bento-d">
                Built for Nigerian users, thinking for global markets. Culturally
                fluent, universally clear.
              </div>
            </div>
            <div className="bento-c">
              <div className="bento-icon">📐</div>
              <div className="bento-t">Systems thinker</div>
              <div className="bento-d">
                From design tokens to component libraries — I build foundations that
                scale with the product.
              </div>
            </div>
            <div className="bento-c">
              <div className="bento-icon">🏛️</div>
              <div className="bento-t">University of Ilorin</div>
              <div className="bento-d">
                Strong analytical foundation, applied to design challenges across three
                industries.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-wrap" id="contact">
        <div className="contact-bg-text">LET&rsquo;S BUILD</div>
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>
          Let&rsquo;s Work Together
        </div>
        <h2 className="contact-h reveal">
          Have a project <em>in mind?</em>
        </h2>
        <p className="contact-sub reveal">
          Whether you&rsquo;re building a fintech app, scaling a SaaS product, or
          solving a health tech challenge — I&rsquo;d love to be part of the team.
        </p>
        <div className="contact-btns reveal">
          <a href="mailto:kehinde@example.com" className="btn-p">
            Get in Touch
          </a>
          <a
            href="https://behance.net/kehindeokunola"
            target="_blank"
            rel="noreferrer"
            className="btn-s"
          >
            View Behance ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="foot-left">© 2025 Kehinde Okunola. All rights reserved.</span>
        <div className="foot-links">
          <a href="https://www.linkedin.com/in/kehinde-okunola-26474471/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://behance.net/kehindeokunola" target="_blank" rel="noreferrer">
            Behance
          </a>
          <a href="mailto:kehinde@example.com">Email</a>
        </div>
      </footer>
    </>
  )
}

export default App
