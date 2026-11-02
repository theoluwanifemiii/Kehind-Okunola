import { useRef } from 'react'
import { LINKS, ROUTES } from '../content.js'
import { useReveal } from '../useReveal.js'
import { BackNav, Drift, Footer, Pill, PrimaryButton, SectionHead, SecondaryButton } from '../components/ui.jsx'
import {
  ArrowRightIcon,
  ChatIcon,
  CodeIcon,
  DotIcon,
  MicIcon,
  SearchIcon,
  UsersIcon,
  VideoIcon,
} from '../components/icons.jsx'

const META = [
  { label: 'Role', value: 'UI/UX Designer' },
  { label: 'Team', value: 'Kehinde Okunola, Sodiq Olajide' },
  { label: 'Duration', value: '2 weeks · 12+ screens' },
  { label: 'Tools', value: 'Figma, ChatGPT' },
]

const STAGE_COLORS = {
  screening: '#2f5a2c',
  technical: '#7c4ddb',
  behavioral: '#8d8582',
  deepDive: '#d9706a',
  mock: '#c9632a',
}

const DASH_CARDS = [
  ['Initial Screening', STAGE_COLORS.screening],
  ['Technical Interview', STAGE_COLORS.technical],
  ['Behavioral Interview', STAGE_COLORS.behavioral],
  ['Deep Dive Interview', STAGE_COLORS.deepDive],
  ['Mock Interview', STAGE_COLORS.mock],
]

const COMPARISON = [
  {
    platform: 'Interviewsby.ai',
    strengths: 'AI driven mock interviews and feedback',
    gaps: 'Limited focus on technical coding assessments',
    took: 'Expanded AI feedback to cover more interview types, including technical coding challenges',
  },
  {
    platform: 'AceInterviewPrep.app',
    strengths: 'Structured prep with real time feedback',
    gaps: 'No gamification or engagement features',
    took: 'Introduced points and badges to boost engagement and motivation',
  },
  {
    platform: 'FreeCodeCamp.org',
    strengths: 'Robust coding interface for learning and practice',
    gaps: 'Not built for interview preparation',
    took: 'Adopted an intuitive coding interface, paired with interview specific challenges',
  },
]

const STAGES = [
  {
    key: 'screening',
    icon: MicIcon,
    stage: 'Stage 1',
    title: 'Initial Screening',
    desc: 'Candidates practice video responses to common screening questions. The AI gives instant feedback on their answers, helping them refine their responses and build confidence.',
    tag: 'Screening Pro',
    tagAlpha: 0.16,
    bubbleBg: '#1f3f1d',
    bubbleLabel: 'Question 2',
    bubble:
      'Can you describe your most recent job role, including your responsibilities, key achievements, and the tools you used?',
  },
  {
    key: 'technical',
    icon: CodeIcon,
    stage: 'Stage 2',
    title: 'Technical Interviews',
    desc: 'Oral and written technical modules. Candidates record video answers or submit written responses, and the AI gives detailed feedback, preparing them for coding challenges, system design questions and more.',
    tag: 'Code Conqueror',
    tagAlpha: 0.18,
    bubbleBg: '#5a2fb5',
    bubbleLabel: 'Question 1',
    bubble: 'Solve an algorithm problem using your preferred programming language.',
  },
  {
    key: 'behavioral',
    icon: ChatIcon,
    stage: 'Stage 3',
    title: 'Behavioral Interview',
    desc: '[BEHAVIORAL STAGE DESCRIPTION]. Candidates record video answers and get AI feedback on how they communicate, earning the Soft Skill Expert badge.',
    tag: 'Soft Skill Expert',
    tagAlpha: 0.2,
    bubbleBg: '#5e5754',
    bubbleLabel: 'Question 1',
    bubble: '[SAMPLE BEHAVIORAL QUESTION]',
  },
  {
    key: 'deepDive',
    icon: SearchIcon,
    stage: 'Stage 4',
    title: 'Deep Dive Interviews',
    desc: 'PrepInterview prepares candidates for the final stages of the interview process. This includes in depth technical questions, simulated team interactions, and even virtual meetings with a mock executive.',
    tag: 'In-Depth Analyst',
    tagAlpha: 0.22,
    bubbleBg: '#b0504a',
    bubbleLabel: 'Final round',
    bubble: 'Virtual meeting with a mock executive',
  },
  {
    key: 'mock',
    icon: UsersIcon,
    stage: 'Stage 5 · Premium',
    title: 'Mock Interviews',
    desc: '[MOCK INTERVIEW STAGE DESCRIPTION]. Candidates book sessions with real human interviewers and finish the journey as an Interview Champion.',
  },
]

const BADGES = [
  ['Screening Pro', 'Level 1', STAGE_COLORS.screening],
  ['Code Conqueror', 'Level 2', STAGE_COLORS.technical],
  ['Soft Skill Expert', 'Level 3', STAGE_COLORS.behavioral],
  ['In-Depth Analyst', 'Level 4', STAGE_COLORS.deepDive],
  ['Interview Champion', 'Level 5', STAGE_COLORS.mock],
]

const SCREENS = [
  'Welcome onboarding',
  'Initial Screening, Level 1',
  'Initial Screening feedback',
  'Technical Interview, Level 2',
]

const FOOTER_LINKS = [
  { label: 'LinkedIn', href: LINKS.linkedin, external: true },
  { label: 'Contact', href: ROUTES.contact },
]

function Rec({ color = '#d23c3c' }) {
  return (
    <span className="rec" style={{ color }}>
      <DotIcon />
      REC
    </span>
  )
}

function StageScreen({ stageKey }) {
  switch (stageKey) {
    case 'technical':
      return (
        <div className="stage-screen stage-code">
          <div className="code-lang">python</div>
          <span style={{ color: '#ff8fb1' }}>def</span> <span style={{ color: '#ffd479' }}>reverseString</span>(s:
          str) -&gt; str:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff8fb1' }}>return</span> s[::-1]
          <br />
          <br />
          <span style={{ color: '#8a8a99' }}># Example usage</span>
          <br />
          print(reverseString(<span style={{ color: '#a5e3a0' }}>&quot;hello&quot;</span>))
        </div>
      )
    case 'behavioral':
      return (
        <div className="stage-screen stage-cam">
          <div className="silhouette" style={{ width: 90, height: 120, background: 'rgba(255,255,255,0.18)' }}></div>
          <Rec color="#ff8a8a" />
        </div>
      )
    case 'mock':
      return (
        <div className="stage-screen stage-duo">
          <div className="silhouette" style={{ width: 64, height: 90, background: '#f2a7b5' }}></div>
          <div className="silhouette" style={{ width: 74, height: 110, background: '#f6c561' }}></div>
          <Rec />
        </div>
      )
    default:
      return (
        <div className={`stage-screen stage-video ${stageKey === 'screening' ? 'stage-screen-short' : ''}`}>
          <VideoIcon />
          <Rec />
        </div>
      )
  }
}

function StageVisual({ stage }) {
  const color = STAGE_COLORS[stage.key]
  return (
    <div className="stage-visual" aria-hidden="true" style={{ background: color }}>
      <StageScreen stageKey={stage.key} />
      {stage.key === 'mock' ? (
        <>
          <div className="stage-points">
            <div className="stage-points-num" style={{ color }}>
              18<span>/20</span>
            </div>
            Points
          </div>
          <div className="stage-bubble stage-bubble-light">
            <span className="stage-medal" style={{ background: color }}></span>
            <div>
              <div className="stage-medal-title">Interview Champion</div>
              <div className="stage-medal-sub">Level 5</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="stage-tag" style={{ background: `rgba(255,255,255,${stage.tagAlpha})` }}>
            {stage.tag}
          </div>
          <div className="stage-bubble" style={{ background: stage.bubbleBg }}>
            <div className="stage-bubble-label">{stage.bubbleLabel}</div>
            {stage.bubble}
          </div>
        </>
      )}
    </div>
  )
}

function DashboardMock() {
  return (
    <div className="device" aria-hidden="true">
      <div className="device-screen">
        <div className="dash-side">
          <div className="dash-logo">
            <span className="dash-logo-mark">
              <MicIcon size={14} />
            </span>
            Prep<span className="dash-logo-light">Interview</span>
          </div>
          <div className="dash-link dash-link-on">Dashboard</div>
          <div className="dash-group">Main Menu</div>
          {DASH_CARDS.slice(0, 4).map(([label]) => (
            <div className="dash-link" key={label}>
              {label}
            </div>
          ))}
          <div className="dash-link">
            Mock Interview <span className="dash-premium">Premium</span>
          </div>
          <div className="dash-group">Rewards Summary</div>
          <div className="dash-link">Points Earned</div>
          <div className="dash-link">Certificates</div>
        </div>
        <div className="dash-main">
          <div className="dash-top">
            <div>
              <div className="dash-welcome">Welcome back Alex!</div>
              <div className="dash-welcome-sub">
                Check your progress and upcoming tasks. Let&rsquo;s continue your interview prep!
              </div>
            </div>
            <div className="dash-chip">
              <span className="dash-chip-ring"></span>Code Conqueror
            </div>
          </div>
          <div className="dash-cards">
            {DASH_CARDS.map(([label, color]) => (
              <div className="dash-card" key={label} style={{ background: color }}>
                <span className="dash-card-icon"></span>
                <span className="dash-card-title">{label}</span>
                <span className="dash-card-bar"></span>
                <span className="dash-card-sub">0 badges earned</span>
              </div>
            ))}
          </div>
          <div className="dash-label">Quick Access</div>
          <div className="dash-quick">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function caseIntro(gsap) {
  gsap
    .timeline({ defaults: { ease: 'power3.out' } })
    .from('.nav > *', { opacity: 0, y: -14, duration: 0.6, stagger: 0.08 })
    .from('.cs-hero > *', { opacity: 0, y: 22, duration: 0.75, stagger: 0.08 }, 0.15)
}

export default function CaseStudy() {
  const scope = useRef(null)
  useReveal(scope, caseIntro)

  return (
    <div ref={scope}>
      <header className="cs-header">
        <Drift />
        <BackNav href={ROUTES.work} label="Back to work" />

        <div className="cs-hero">
          <Pill dot={STAGE_COLORS.screening}>Case study · Smart Prep with AI</Pill>
          <h1 className="cs-h1">
            Revolutionizing
            <br />
            interview prep
          </h1>
          <p className="cs-lede">
            PrepInterview is an AI powered web app that helps technical talent master every stage of the
            interview process, from first screening to the final deep dive.
          </p>

          <div className="cs-meta">
            {META.map((m) => (
              <div className="meta-card" key={m.label}>
                <div className="meta-label">{m.label}</div>
                <div className="meta-value">{m.value}</div>
              </div>
            ))}
          </div>

          <DashboardMock />
        </div>
      </header>

      <section className="section cs-overview">
        <div className="cs-two container reveal">
          <div>
            <div className="eyebrow">01 · Overview</div>
            <h2 className="h3-lg">An AI coach for every stage of the interview</h2>
            <p className="body-lg">
              PrepInterview is an AI powered application designed to assist technical talents in preparing for
              interviews. The platform offers sentiment analysis and assessment for video interviews, technical
              theoretical interviews, and hands on technical interviews. By integrating gamified experiences,
              PrepInterview makes the preparation process fun and engaging, rewarding users with points and
              badges for their progress.
            </p>
          </div>
          <div>
            <div className="eyebrow">02 · The challenge</div>
            <h2 className="h3-lg">Traditional prep lacks real, personal feedback</h2>
            <p className="body-lg">
              In today&rsquo;s competitive job market, preparing for interviews can be a daunting task.
              Candidates face a multitude of challenges, from initial screening to technical interviews,
              behavioral assessments, and final deep dives. Traditional interview preparation methods often lack
              the personalized feedback and interactive experience needed to truly excel.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-grey">
        <SectionHead
          label="Competitive analysis"
          title={
            <>
              Learning from what
              <br />
              already exists
            </>
          }
          sub="Three platforms each did one thing well. PrepInterview set out to combine their strengths and close their gaps."
        />
        <div className="table-wrap container-cs reveal">
          <table className="cs-table">
            <thead>
              <tr>
                <th scope="col">Platform</th>
                <th scope="col">Strengths</th>
                <th scope="col">Gaps</th>
                <th scope="col">What we took from it</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.platform}>
                  <th scope="row">{row.platform}</th>
                  <td>{row.strengths}</td>
                  <td>{row.gaps}</td>
                  <td className="strong">{row.took}</td>
                </tr>
              ))}
              <tr className="row-dark">
                <th scope="row">PrepInterview</th>
                <td>Complete prep with AI feedback across every interview stage</td>
                <td>None specific, always improving to stay ahead</td>
                <td className="strong">
                  Gamification, personalized AI feedback, and mock interviews with real human interviewers
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <SectionHead
          label="The solution"
          className="section-head-wide"
          title={
            <>
              Five stages, one
              <br />
              guided journey
            </>
          }
          sub="Each stage mirrors a real round of the hiring process, with its own color, practice format and badge to earn."
        />
        <div className="stages container-cs">
          {STAGES.map((stage) => {
            const Icon = stage.icon
            return (
              <article className="stage-card reveal" key={stage.key}>
                <div className="stage-copy">
                  <div className="stage-head">
                    <span className="stage-icon" style={{ background: STAGE_COLORS[stage.key] }}>
                      <Icon />
                    </span>
                    <span className="stage-num">{stage.stage}</span>
                  </div>
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="body">{stage.desc}</p>
                </div>
                <StageVisual stage={stage} />
              </article>
            )
          })}
        </div>
      </section>

      <section className="section section-grey">
        <div className="gamified container-cs reveal">
          <div className="gamified-copy">
            <div className="pill pill-dark">
              <span className="dot" style={{ background: '#f6c561' }}></span>Gamified
            </div>
            <h2 className="gamified-h">
              Progress you can
              <br />
              actually see
            </h2>
            <p className="gamified-p">
              Every stage awards points and a badge. The reward loop turns long, lonely preparation into steady
              wins, and keeps candidates coming back.
            </p>
          </div>
          <div className="badges">
            {BADGES.map(([name, level, color]) => (
              <div className="badge-card" key={name}>
                <span className="badge-dot" style={{ background: color }}></span>
                <div className="badge-name">{name}</div>
                <div className="badge-level">{level}</div>
              </div>
            ))}
            <div className="badge-card badge-card-ghost">
              <div className="badge-points">
                18<span>/20</span>
              </div>
              <div className="badge-points-sub">Points awarded</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead
          label="Screens"
          className="section-head-tight"
          title={
            <>
              12+ screens,
              <br />
              designed in two weeks
            </>
          }
        />
        <div className="shots container-cs reveal">
          {SCREENS.map((s) => (
            <div className="shot" key={s}>
              [SCREEN: {s}]
            </div>
          ))}
        </div>
      </section>

      <div className="contact-wrap">
        <Drift />
        <section className="cs-conclusion">
          <Pill dot="live" className="reveal">
            Conclusion
          </Pill>
          <h2 className="h2 cs-conclusion-h reveal">
            Preparation that builds
            <br />
            <span className="soft">real confidence</span>
          </h2>
          <p className="contact-sub reveal">
            PrepInterview gamifies the interview preparation process, letting users earn points and badges for
            progress. This approach makes preparation more efficient and boosts candidates&rsquo; confidence,
            helping them succeed in their interviews and land the jobs they want.
          </p>
          <div className="btn-row reveal">
            <PrimaryButton href={ROUTES.contact}>Get in Touch</PrimaryButton>
            <SecondaryButton href={ROUTES.work}>Back to all work</SecondaryButton>
          </div>

          <a href={ROUTES.work} className="next-card reveal">
            <div>
              <div className="eyebrow">Next case study · 02</div>
              <div className="next-title">Financial Analytics Dashboard</div>
            </div>
            <span className="next-arrow">
              <ArrowRightIcon size={18} />
            </span>
          </a>
        </section>
        <Footer note="Designed with Sodiq Olajide." links={FOOTER_LINKS} />
      </div>
    </div>
  )
}
