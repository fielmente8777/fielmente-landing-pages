
import { whatsappUrl } from "@/content/site";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
 

  

  return (
    <Link
      href={whatsappUrl("")}
      id="whatsapp-button"
      className="fixed bottom-25 lg:left-3  left-4 z-20 cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl transition-all pointer-events-none">
        <FaWhatsapp size={29} color="white" />
      </div>

      <span className="sr-only pointer-events-none">Chat on WhatsApp</span>
    </Link>
  );
}
