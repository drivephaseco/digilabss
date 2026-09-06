"use client";

import { Send } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function FloatingContactWidget() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col gap-3">
      <a
        href="https://wa.me/971501234567"
        onClick={() => trackEvent("contact_click", { channel: "whatsapp" })}
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="absolute right-16 bg-white text-accent px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
          Chat with Sales
        </span>
      </a>
      <a
        href="#enquiry"
        onClick={() => trackEvent("contact_click", { channel: "quick_quote" })}
        className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <Send className="w-5 h-5" />
        <span className="absolute right-16 bg-white text-accent px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
          Quick Quote
        </span>
      </a>
    </div>
  );
}
