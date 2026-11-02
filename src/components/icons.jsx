// Inline SVG icons. Stroke icons inherit the text colour.

function Stroke({ size = 20, width = 1.8, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function LinkedInIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function BehanceIcon() {
  return (
    <svg width="16" height="10" viewBox="0 0 24 15" fill="currentColor" aria-hidden="true">
      <path d="M7.443 0c.794 0 1.51.073 2.147.228.637.156 1.18.393 1.628.712.448.319.792.736 1.032 1.248.24.513.361 1.13.361 1.854 0 .796-.18 1.46-.54 1.997-.36.537-.898.977-1.613 1.32.972.278 1.7.776 2.183 1.494.483.718.724 1.582.724 2.593 0 .795-.155 1.484-.466 2.067-.31.583-.737 1.072-1.282 1.467-.545.394-1.172.683-1.882.867C9.025 15.849 8.279 16 7.502 16H0V0h7.443zm-.367 6.04c.636 0 1.155-.158 1.557-.472.402-.315.603-.79.603-1.423 0-.365-.066-.67-.197-.916-.131-.245-.309-.44-.534-.583-.225-.143-.485-.244-.78-.305-.295-.06-.606-.09-.932-.09H3.3v3.79h3.776zm.18 6.38c.37 0 .714-.037 1.033-.11.32-.073.6-.19.843-.35.242-.16.434-.376.574-.647.14-.27.211-.607.211-1.011 0-.797-.22-1.371-.661-1.721-.441-.35-1.03-.525-1.768-.525H3.3v4.364h3.956zm8.21-3.127c.28.667.776 1 1.49 1 .463 0 .864-.115 1.202-.348.338-.233.528-.477.572-.73h2.666c-.428 1.288-1.069 2.207-1.924 2.757-.855.55-1.89.824-3.106.824-.844 0-1.604-.137-2.28-.41-.675-.274-1.247-.663-1.714-1.167-.468-.504-.828-1.107-1.08-1.808-.253-.7-.38-1.473-.38-2.318 0-.82.13-1.581.393-2.283.263-.702.638-1.307 1.127-1.816.489-.509 1.066-.906 1.732-1.19.666-.284 1.41-.426 2.232-.426.912 0 1.713.177 2.402.53.69.354 1.26.83 1.712 1.428.453.598.78 1.286.98 2.063.2.777.28 1.595.237 2.454h-7.38c.057.793.318 1.374.597 2.04zm.61-3.917c-.299-.66-.837-.99-1.615-.99-.48 0-.876.09-1.188.27-.312.18-.558.394-.736.642-.178.249-.303.508-.375.778-.072.269-.112.513-.12.732h5.1c-.165-.777-.367-1.386-.666-2.032zM14.636 0h5.614v1.447h-5.614V0z" />
    </svg>
  )
}

export const ArrowUpRightIcon = ({ size = 14 }) => (
  <Stroke size={size} width={2}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </Stroke>
)

export const ArrowLeftIcon = ({ size = 14 }) => (
  <Stroke size={size} width={2}>
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </Stroke>
)

export const ArrowRightIcon = ({ size = 16 }) => (
  <Stroke size={size} width={2}>
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </Stroke>
)

export const CheckIcon = ({ size = 30 }) => (
  <Stroke size={size} width={2.2}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Stroke>
)

export const PillIcon = () => (
  <Stroke size={22}>
    <path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z" />
    <path d="M8.5 8.5l7 7" />
  </Stroke>
)

export const TargetIcon = () => (
  <Stroke>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </Stroke>
)

export const BoltIcon = () => (
  <Stroke>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </Stroke>
)

export const GlobeIcon = () => (
  <Stroke>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </Stroke>
)

export const GridIcon = () => (
  <Stroke>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </Stroke>
)

export const CapIcon = () => (
  <Stroke>
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c3 2 9 2 12 0v-5" />
  </Stroke>
)

export const MailIcon = () => (
  <Stroke size={18}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Stroke>
)

export const PinIcon = () => (
  <Stroke size={18}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Stroke>
)

export const MicIcon = ({ size = 20 }) => (
  <Stroke size={size}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </Stroke>
)

export const CodeIcon = () => (
  <Stroke>
    <path d="M8 7l-5 5 5 5" />
    <path d="M16 7l5 5-5 5" />
    <path d="M14 4l-4 16" />
  </Stroke>
)

export const ChatIcon = () => (
  <Stroke>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
  </Stroke>
)

export const SearchIcon = () => (
  <Stroke>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </Stroke>
)

export const UsersIcon = () => (
  <Stroke>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15.5 14.5A5 5 0 0 1 21 19" />
  </Stroke>
)

export const VideoIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#5b6b8c" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M10 8.5v5l4-2.5z" />
    <path d="M8 21h8" />
  </svg>
)
