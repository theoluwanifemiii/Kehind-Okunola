import { useRef, useState } from 'react'
import { CONTACT_EMAIL, LINKS, ROUTES } from '../content.js'
import { useReveal } from '../useReveal.js'
import { BackNav, Drift, Pill } from '../components/ui.jsx'
import { ArrowRightIcon, CheckIcon, LinkedInIcon, MailIcon, PinIcon } from '../components/icons.jsx'

const PROJECT_TYPES = ['Fintech', 'SaaS', 'Health Tech', 'Something else']

const EMPTY = { name: '', email: '', company: '', message: '', type: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = true
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = true
  if (!form.message.trim()) errors.message = true
  return errors
}

// No backend yet: a valid submission opens the visitor's email app with the
// message filled in, addressed to CONTACT_EMAIL.
function openMailDraft(form) {
  const subject = `New project enquiry from ${form.name.trim()}`
  const details = [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    form.company.trim() && `Company: ${form.company.trim()}`,
    form.type && `Working on: ${form.type}`,
  ].filter(Boolean)
  const body = `${details.join('\n')}\n\n${form.message.trim()}`
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function contactIntro(gsap) {
  gsap
    .timeline({ defaults: { ease: 'power3.out' } })
    .from('.nav > *', { opacity: 0, y: -14, duration: 0.6, stagger: 0.08 })
    .from('.cf-intro > *', { opacity: 0, y: 22, duration: 0.75, stagger: 0.08 }, 0.15)
    .from('.cf-card', { opacity: 0, y: 30, duration: 0.8 }, 0.3)
}

function Field({ id, label, error, errorText, children }) {
  return (
    <div className="cf-field">
      <label htmlFor={id} className="cf-label">
        {label}
      </label>
      {children}
      {error && (
        <span role="alert" className="cf-error">
          {errorText}
        </span>
      )}
    </div>
  )
}

export default function Contact() {
  const scope = useRef(null)
  useReveal(scope, contactIntro)

  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Once a field has shown an error, re-check it as the visitor types.
  function setField(key, value) {
    const next = { ...form, [key]: value }
    setForm(next)
    if (errors[key]) setErrors({ ...errors, [key]: !!validate(next)[key] })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const found = validate(form)
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }
    setErrors({})
    openMailDraft(form)
    setSubmitted(true)
  }

  function reset() {
    setForm(EMPTY)
    setErrors({})
    setSubmitted(false)
  }

  const firstName = form.name.trim().split(' ')[0] || 'there'

  return (
    <div ref={scope} className="cf-page">
      <Drift />
      <BackNav href={ROUTES.home} label="Back to home" />

      <main className="cf-main">
        <div className="cf-grid">
          <div className="cf-intro">
            <Pill dot="live">Available for Work</Pill>
            <h1 className="display cf-h1">
              Have a project
              <br />
              <span className="soft">in mind?</span>
            </h1>
            <p className="cf-lede">
              Tell me a little about what you&rsquo;re building. Fintech app, SaaS product or a health tech
              challenge, I&rsquo;d love to hear about it.
            </p>

            <div className="cf-info">
              <a href={`mailto:${CONTACT_EMAIL}`} className="info-row">
                <span className="info-icon">
                  <MailIcon />
                </span>
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">{CONTACT_EMAIL}</div>
                </div>
              </a>
              <div className="info-row">
                <span className="info-icon">
                  <PinIcon />
                </span>
                <div>
                  <div className="info-label">Based in</div>
                  <div className="info-value">Lagos, Nigeria · open to remote</div>
                </div>
              </div>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="info-row">
                <span className="info-icon">
                  <LinkedInIcon size={15} />
                </span>
                <div>
                  <div className="info-label">Prefer LinkedIn?</div>
                  <div className="info-value">Message me there</div>
                </div>
              </a>
            </div>
          </div>

          <div className="cf-card">
            {submitted ? (
              <div role="status" className="cf-success">
                <span className="cf-success-icon">
                  <CheckIcon />
                </span>
                <h2 className="cf-success-h">Message ready</h2>
                <p className="cf-success-p">
                  Thanks, {firstName}. Your email app should open with your message filled in. Hit send and
                  I&rsquo;ll get back to you at {form.email.trim()} soon.
                </p>
                <div className="btn-row">
                  <a href={ROUTES.home} className="btn-p btn-md">
                    Back to home
                  </a>
                  <button type="button" className="btn-s btn-md btn-outline" onClick={reset}>
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="cf-form">
                <div>
                  <h2 className="cf-form-h">Send a message</h2>
                  <p className="cf-form-sub">Fields marked * are required.</p>
                </div>

                <div className="cf-pair">
                  <Field
                    id="cf-name"
                    label="Your name *"
                    error={errors.name}
                    errorText="Add your name so I know who I'm talking to."
                  >
                    <input
                      id="cf-name"
                      className={`cf-input ${errors.name ? 'has-error' : ''}`}
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setField('name', e.target.value)}
                    />
                  </Field>
                  <Field
                    id="cf-email"
                    label="Email *"
                    error={errors.email}
                    errorText="Enter a valid email so I can reply."
                  >
                    <input
                      id="cf-email"
                      className={`cf-input ${errors.email ? 'has-error' : ''}`}
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => setField('email', e.target.value)}
                    />
                  </Field>
                </div>

                <Field
                  id="cf-company"
                  label={
                    <>
                      Company <span className="cf-optional">(optional)</span>
                    </>
                  }
                >
                  <input
                    id="cf-company"
                    className="cf-input"
                    type="text"
                    autoComplete="organization"
                    placeholder="Where you work"
                    value={form.company}
                    onChange={(e) => setField('company', e.target.value)}
                  />
                </Field>

                <fieldset className="cf-fieldset">
                  <legend className="cf-label">What are you working on?</legend>
                  <div className="cf-chips">
                    {PROJECT_TYPES.map((label) => {
                      const on = form.type === label
                      return (
                        <button
                          type="button"
                          key={label}
                          className={`cf-chip ${on ? 'is-on' : ''}`}
                          aria-pressed={on}
                          onClick={() => setField('type', on ? '' : label)}
                        >
                          {label}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                <Field
                  id="cf-message"
                  label="Tell me about the project *"
                  error={errors.message}
                  errorText="A short description helps me reply with something useful."
                >
                  <textarea
                    id="cf-message"
                    className={`cf-input cf-textarea ${errors.message ? 'has-error' : ''}`}
                    rows={5}
                    placeholder="What are you building, who is it for, and when do you need it?"
                    value={form.message}
                    onChange={(e) => setField('message', e.target.value)}
                  ></textarea>
                </Field>

                <div className="cf-submit-row">
                  <span className="cf-note">I usually reply within [REPLY TIME].</span>
                  <button type="submit" className="btn-p">
                    <span className="shine" aria-hidden="true"></span>
                    Send message
                    <ArrowRightIcon />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
