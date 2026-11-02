// All site icons, from react-icons: Lucide (lu) for UI icons, matching the
// design's thin line style, and Font Awesome 6 (fa6) for brand marks and solid
// glyphs. Wrapped here so sizes and stroke weight stay consistent everywhere.
import {
  LuArrowLeft,
  LuArrowRight,
  LuArrowUpRight,
  LuCheck,
  LuCode,
  LuGlobe,
  LuGraduationCap,
  LuLayoutGrid,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuMic,
  LuMonitorPlay,
  LuPill,
  LuSearch,
  LuTarget,
  LuUsers,
  LuZap,
} from 'react-icons/lu'
import { FaBehance, FaCircle, FaLinkedinIn, FaStar } from 'react-icons/fa6'

// Decorative by default, so hidden from screen readers.
const hidden = { 'aria-hidden': true, focusable: 'false' }

// Brands
export const LinkedInIcon = (props) => <FaLinkedinIn size={15} {...hidden} {...props} />
export const BehanceIcon = (props) => <FaBehance size={17} {...hidden} {...props} />

// Solid glyphs
export const StarIcon = (props) => <FaStar size={11} {...hidden} {...props} />
export const DotIcon = (props) => <FaCircle size={7} {...hidden} {...props} />

// Arrows and actions
export const ArrowUpRightIcon = (props) => <LuArrowUpRight size={14} strokeWidth={2} {...hidden} {...props} />
export const ArrowLeftIcon = (props) => <LuArrowLeft size={14} strokeWidth={2} {...hidden} {...props} />
export const ArrowRightIcon = (props) => <LuArrowRight size={16} strokeWidth={2} {...hidden} {...props} />
export const CheckIcon = (props) => <LuCheck size={30} strokeWidth={2.2} {...hidden} {...props} />

// Feature and contact icons
export const PillIcon = (props) => <LuPill size={22} strokeWidth={1.8} {...hidden} {...props} />
export const TargetIcon = (props) => <LuTarget size={20} strokeWidth={1.8} {...hidden} {...props} />
export const BoltIcon = (props) => <LuZap size={20} strokeWidth={1.8} {...hidden} {...props} />
export const GlobeIcon = (props) => <LuGlobe size={20} strokeWidth={1.8} {...hidden} {...props} />
export const GridIcon = (props) => <LuLayoutGrid size={20} strokeWidth={1.8} {...hidden} {...props} />
export const CapIcon = (props) => <LuGraduationCap size={20} strokeWidth={1.8} {...hidden} {...props} />
export const MailIcon = (props) => <LuMail size={18} strokeWidth={1.8} {...hidden} {...props} />
export const PinIcon = (props) => <LuMapPin size={18} strokeWidth={1.8} {...hidden} {...props} />

// Case study stage icons
export const MicIcon = (props) => <LuMic size={20} strokeWidth={1.8} {...hidden} {...props} />
export const CodeIcon = (props) => <LuCode size={20} strokeWidth={1.8} {...hidden} {...props} />
export const ChatIcon = (props) => <LuMessageCircle size={20} strokeWidth={1.8} {...hidden} {...props} />
export const SearchIcon = (props) => <LuSearch size={20} strokeWidth={1.8} {...hidden} {...props} />
export const UsersIcon = (props) => <LuUsers size={20} strokeWidth={1.8} {...hidden} {...props} />
export const VideoIcon = (props) => <LuMonitorPlay size={44} strokeWidth={1.5} {...hidden} {...props} />
