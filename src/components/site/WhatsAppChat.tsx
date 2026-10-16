import Image from "next/image";
import { CheckCheck, ChevronLeft, MapPin, Mic, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/content/whatsappOrdering";
import { Phone as PhoneDevice } from "@/components/devices/Devices";
import { StatusBar } from "@/components/screens/ui";
import { LOGO } from "@/content/brand";

// A WhatsApp-style ordering conversation drawn in code. Text sizes use
// container-query units so the whole chat scales with the phone's width.
// The chat is one labelled image for assistive technology; its content is
// illustrative and described by `label`.

const WA = {
  chatBg: "bg-[#EFE7DD]",
  outgoing: "bg-[#D9FDD3]",
  action: "text-[#00796B]",
  tick: "text-[#53BDEB]",
  mic: "bg-[#00A884]",
};

/** Renders WhatsApp-style *bold* segments. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? <strong key={i}>{part.slice(1, -1)}</strong> : <span key={i}>{part}</span>
      )}
    </>
  );
}

function Time({ value, read }: { value?: string; read?: boolean }) {
  if (!value) return null;
  return (
    <span className="float-right ml-[0.6em] mt-[0.35em] inline-flex items-center gap-[0.2em] text-[0.68em] leading-none text-[#3B4A54]">
      {value}
      {read && <CheckCheck className={cn("h-[1.25em] w-[1.25em]", WA.tick)} />}
    </span>
  );
}

function Message({ message }: { message: ChatMessage }) {
  switch (message.kind) {
    case "day":
      return <p className="mx-auto rounded-[0.5em] bg-white/90 px-[0.7em] py-[0.2em] text-[0.7em] text-[#54656F] shadow-sm">{message.text}</p>;
    case "customer":
      return (
        <div className={cn("ml-auto max-w-[78%] whitespace-pre-line rounded-[0.6em] rounded-tr-[0.15em] px-[0.6em] py-[0.35em] shadow-sm", WA.outgoing)}>
          {message.text}
          <Time value={message.time} read />
        </div>
      );
    case "location":
      return (
        <div className={cn("ml-auto w-[62%] rounded-[0.6em] rounded-tr-[0.15em] p-[0.25em] shadow-sm", WA.outgoing)}>
          <div className="flex aspect-[2/1] items-center justify-center rounded-[0.45em] bg-[repeating-linear-gradient(45deg,#E7EFE4_0_6px,#DCE8D8_6px_12px)]">
            <MapPin className="h-[1.8em] w-[1.8em] fill-[#E53935] text-white" />
          </div>
          <p className="px-[0.35em] pt-[0.3em] text-[0.85em] font-semibold">
            📍 {message.label}
            <Time value={message.time} read />
          </p>
        </div>
      );
    case "product":
      return (
        <div className="w-[78%]">
          <div className="overflow-hidden rounded-[0.6em] rounded-tl-[0.15em] bg-white shadow-sm">
            <div className="relative aspect-[2/1]">
              <Image src={message.image} alt="" fill sizes="240px" className="object-cover" />
            </div>
            <div className="px-[0.6em] py-[0.45em]">
              <p className="font-bold">{message.name}</p>
              <p className="text-[0.82em] text-[#667781]">{message.description}</p>
              <p className="mt-[0.2em] font-bold">{message.price}</p>
            </div>
          </div>
          <p className={cn("mt-[0.2em] rounded-[0.6em] bg-white py-[0.4em] text-center text-[0.9em] font-semibold shadow-sm", WA.action)}>
            {message.button}
          </p>
        </div>
      );
    case "business":
      return (
        <div className="max-w-[86%]">
          <div className="whitespace-pre-line rounded-[0.6em] rounded-tl-[0.15em] bg-white px-[0.6em] py-[0.4em] shadow-sm">
            <RichText text={message.text} />
            <Time value={message.time} />
          </div>
          {message.buttons?.map((b) => (
            <p key={b} className={cn("mt-[0.2em] rounded-[0.6em] bg-white py-[0.4em] text-center text-[0.9em] font-semibold shadow-sm", WA.action)}>
              {b}
            </p>
          ))}
        </div>
      );
  }
}

interface WhatsAppChatProps {
  messages: ChatMessage[];
  /** Plain-language description of the scene for screen readers. */
  label: string;
  className?: string;
  /** Aspect of the phone screen; taller shows more of the conversation. */
  tall?: boolean;
}

export function WhatsAppChat({ messages, label, className, tall = false }: WhatsAppChatProps) {
  return (
    <div role="img" aria-label={label} className={cn("mx-auto w-full max-w-[18rem]", className)}>
      <PhoneDevice aspect={tall ? 9 / 19.5 : 9 / 17}>
        <div aria-hidden="true" className="flex h-full flex-col bg-white text-[#111B21]" style={{ fontSize: "4.3cqw", lineHeight: 1.35 }}>
          <StatusBar time="7:46" />
          <div className="flex items-center gap-[0.5em] bg-white px-[0.6em] pb-[0.55em] pt-[0.3em] shadow-sm">
            <ChevronLeft className="h-[1.3em] w-[1.3em] text-[#54656F]" />
            <span className="flex h-[2.2em] w-[2.2em] shrink-0 items-center justify-center rounded-full bg-[#FFF3EA] ring-1 ring-[#FCCBA6]">
              <Image src={LOGO.mark.src} alt="" width={LOGO.mark.width} height={LOGO.mark.height} className="h-[1.6em] w-[1.6em]" />
            </span>
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block truncate font-semibold">Your Restaurant</span>
              <span className="block text-[0.72em] text-[#667781]">Business account</span>
            </span>
            <Phone className="h-[1.15em] w-[1.15em] text-[#54656F]" />
          </div>

          <div className={cn("flex min-h-0 flex-1 flex-col justify-end gap-[0.45em] overflow-hidden px-[0.55em] py-[0.6em]", WA.chatBg)}>
            {messages.map((m, i) => (
              <Message key={i} message={m} />
            ))}
          </div>

          <div className={cn("flex items-center gap-[0.4em] px-[0.5em] py-[0.5em]", WA.chatBg)}>
            <span className="flex-1 rounded-full bg-white px-[0.8em] py-[0.45em] text-[0.85em] text-[#54656F] shadow-sm">Message</span>
            <span className={cn("flex h-[2.2em] w-[2.2em] items-center justify-center rounded-full text-white", WA.mic)}>
              <Mic className="h-[1.1em] w-[1.1em]" />
            </span>
          </div>
        </div>
      </PhoneDevice>
    </div>
  );
}
