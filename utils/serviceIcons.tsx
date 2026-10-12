// Icon names used in page data files (e.g. icon: "megaphone"), mapped to Lucide icons from react-icons.
import {
  LuBadgeCheck, LuBedDouble, LuBellRing, LuBot, LuBrain, LuCalendarCheck, LuCalendarDays, LuCamera, LuChartBar,
  LuChartLine, LuCircleCheck, LuClipboardList, LuClock, LuConciergeBell, LuFileText, LuGlobe, LuHandshake,
  LuHeadphones, LuHotel, LuHouse, LuInbox, LuLandmark, LuLanguages, LuLayers, LuLink, LuListChecks, LuMail,
  LuMapPin, LuMegaphone, LuMessageCircle, LuMessagesSquare, LuMic, LuMonitorSmartphone, LuNewspaper, LuPalette,
  LuPenTool, LuPercent, LuPhone, LuPhoneCall, LuPlane, LuRefreshCw, LuRepeat, LuRocket, LuSearch, LuSend,
  LuShare2, LuShieldCheck, LuSparkles, LuStar, LuTarget, LuTicket, LuTreePalm, LuTrendingUp, LuUsers,
  LuUtensils, LuWallet, LuWorkflow, LuZap,
} from "react-icons/lu";
import type { IconType } from "react-icons";

export const icons = {
  badge: LuBadgeCheck, bed: LuBedDouble, bell: LuBellRing, bot: LuBot, brain: LuBrain, calendarCheck: LuCalendarCheck,
  calendar: LuCalendarDays, camera: LuCamera, bars: LuChartBar, line: LuChartLine, check: LuCircleCheck,
  clipboard: LuClipboardList, clock: LuClock, concierge: LuConciergeBell, file: LuFileText, globe: LuGlobe,
  handshake: LuHandshake, headphones: LuHeadphones, hotel: LuHotel, house: LuHouse, inbox: LuInbox,
  landmark: LuLandmark, languages: LuLanguages, layers: LuLayers, link: LuLink, list: LuListChecks, mail: LuMail,
  pin: LuMapPin, megaphone: LuMegaphone, chat: LuMessageCircle, chats: LuMessagesSquare, mic: LuMic,
  devices: LuMonitorSmartphone, news: LuNewspaper, palette: LuPalette, pen: LuPenTool, percent: LuPercent,
  phone: LuPhone, phoneCall: LuPhoneCall, plane: LuPlane, refresh: LuRefreshCw, repeat: LuRepeat, rocket: LuRocket,
  search: LuSearch, send: LuSend, share: LuShare2, shield: LuShieldCheck, sparkles: LuSparkles, star: LuStar,
  target: LuTarget, ticket: LuTicket, palm: LuTreePalm, trend: LuTrendingUp, users: LuUsers, utensils: LuUtensils,
  wallet: LuWallet, workflow: LuWorkflow, zap: LuZap,
} satisfies Record<string, IconType>;

export type IconKey = keyof typeof icons;

export function Icon({ name, className, size = 22 }: { name: IconKey; className?: string; size?: number }) {
  const C = icons[name];
  return <C size={size} className={className} aria-hidden="true" />;
}
