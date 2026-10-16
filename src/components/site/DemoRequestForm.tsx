"use client";

import { useId, useRef, useState } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/content/navigation";

// There is no server endpoint behind this site. The form collects details,
// checks them, and then hands the request to the visitor's own WhatsApp or
// email app with everything pre-filled. Nothing is reported as "sent" or
// "received" by this page, because only the visitor's app can send it.

type Intent = "demo" | "inquiry";

interface Values {
  name: string;
  restaurant: string;
  phone: string;
  email: string;
  city: string;
  format: string;
  size: string;
  currentSystem: string;
  message: string;
}

const FORMATS = [
  "Casual dine-in restaurant",
  "Fine dining or family hall",
  "Café or bakery",
  "Quick service or food court",
  "Restro-bar or lounge",
  "More than one outlet",
];

const SIZES = ["Counter only, no tables", "1 to 10 tables", "11 to 25 tables", "26 to 50 tables", "More than 50 tables"];

const EMPTY: Values = {
  name: "",
  restaurant: "",
  phone: "",
  email: "",
  city: "",
  format: FORMATS[0],
  size: SIZES[1],
  currentSystem: "",
  message: "",
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.restaurant.trim()) e.restaurant = "Enter your restaurant's name.";
  const digits = v.phone.replace(/\D/g, "");
  if (!digits) e.phone = "Enter a phone or WhatsApp number.";
  else if (digits.length < 10 || digits.length > 13) e.phone = "Enter a 10-digit mobile number, with or without +91.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address, or leave it blank.";
  if (!v.city.trim()) e.city = "Enter your city.";
  return e;
}

function buildMessage(v: Values, intent: Intent) {
  const lines = [
    intent === "demo" ? "Hello Jamanvar team, I'd like to book a demo." : "Hello Jamanvar team, I have a question about Jamanvar.",
    "",
    `Name: ${v.name.trim()}`,
    `Restaurant: ${v.restaurant.trim()}`,
    `City: ${v.city.trim()}`,
    `Phone / WhatsApp: ${v.phone.trim()}`,
    v.email.trim() ? `Email: ${v.email.trim()}` : null,
    `Format: ${v.format}`,
    intent === "demo" ? `Size: ${v.size}` : null,
    intent === "demo" && v.currentSystem.trim() ? `Current billing system: ${v.currentSystem.trim()}` : null,
    v.message.trim() ? `\n${intent === "demo" ? "What we'd like to see" : "Message"}:\n${v.message.trim()}` : null,
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export function DemoRequestForm({ intent = "demo" }: { intent?: Intent }) {
  const uid = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [step, setStep] = useState<"form" | "send">("form");
  const [handedOff, setHandedOff] = useState<"whatsapp" | "email" | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      requestAnimationFrame(() => {
        summaryRef.current?.focus();
      });
      return;
    }
    setStep("send");
    setHandedOff(null);
    requestAnimationFrame(() => reviewRef.current?.focus());
  };

  const message = buildMessage(values, intent);
  const subject = `${intent === "demo" ? "Demo request" : "Enquiry"}: ${values.restaurant.trim() || values.name.trim()}`;
  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  const errorList = Object.entries(errors).filter(([, msg]) => msg) as [keyof Values, string][];

  if (step === "send") {
    return (
      <div ref={reviewRef} tabIndex={-1} className="focus:outline-none" aria-live="polite">
        <p className="eyebrow">Step 2 of 2</p>
        <h3 className="display-md mt-3">Send your {intent === "demo" ? "request" : "message"}</h3>
        <p className="mt-3 text-[0.98rem] leading-7 text-ink-muted">
          Choose how to send it. Your WhatsApp or email app opens with everything filled in, and it reaches the team when you
          press send there. Nothing has been sent yet.
        </p>

        <div className="mt-6 rounded-card border border-line bg-ivory p-4 sm:p-5">
          <p className="text-sm font-bold text-ink">Your message</p>
          <pre className="mt-2 max-h-56 overflow-auto whitespace-pre-wrap break-words font-sans text-sm leading-6 text-ink-soft">{message}</pre>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setHandedOff("whatsapp")}
            className="btn btn-primary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send on WhatsApp
          </a>
          <a href={mailHref} onClick={() => setHandedOff("email")} className="btn btn-secondary">
            <Mail className="h-4 w-4" aria-hidden="true" /> Send by email
          </a>
        </div>

        {handedOff && (
          <div role="status" className="mt-5 rounded-card border border-success/30 bg-success-soft p-4 text-sm leading-6 text-ink">
            {handedOff === "whatsapp" ? "WhatsApp should now be open" : "Your email app should now be open"} with your details.
            Once you press send there, the team will reply during business hours ({CONTACT.hours}). If nothing opened, call{" "}
            <a href={`tel:${CONTACT.phones[0].tel}`} className="font-bold underline">
              {CONTACT.phones[0].display}
            </a>
            .
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-sm">
          <button
            type="button"
            onClick={() => setStep("form")}
            className="inline-flex items-center gap-1.5 font-bold text-ink hover:text-brand-text"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Edit details
          </button>
          <a href={`tel:${CONTACT.phones[0].tel}`} className="inline-flex items-center gap-1.5 text-ink-muted hover:text-ink">
            <Phone className="h-4 w-4" aria-hidden="true" /> Prefer to call? {CONTACT.phones[0].display}
          </a>
        </div>
      </div>
    );
  }

  const field = (key: keyof Values) => ({
    id: `${uid}-${key}`,
    name: key,
    value: values[key],
    onChange: set(key),
    "aria-invalid": errors[key] ? (true as const) : undefined,
    "aria-describedby": errors[key] ? `${uid}-${key}-error` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <p className="eyebrow">Step 1 of 2 · Your details</p>
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-card border border-danger/30 bg-danger-soft p-4 text-sm text-ink focus:outline-none"
        >
          <p className="flex items-center gap-2 font-bold text-danger">
            <AlertCircle className="h-4 w-4" aria-hidden="true" /> Please check {errorList.length === 1 ? "one field" : `${errorList.length} fields`}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            {errorList.map(([key, msg]) => (
              <li key={key}>
                <a href={`#${uid}-${key}`} className="underline underline-offset-2">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" required error={errors.name} errorId={`${uid}-name-error`} htmlFor={`${uid}-name`}>
          <input type="text" autoComplete="name" className="field" {...field("name")} />
        </Field>
        <Field label="Restaurant name" required error={errors.restaurant} errorId={`${uid}-restaurant-error`} htmlFor={`${uid}-restaurant`}>
          <input type="text" autoComplete="organization" className="field" {...field("restaurant")} />
        </Field>
        <Field label="Phone or WhatsApp" required error={errors.phone} errorId={`${uid}-phone-error`} htmlFor={`${uid}-phone`}>
          <input type="tel" inputMode="tel" autoComplete="tel" placeholder="+91" className="field" {...field("phone")} />
        </Field>
        <Field label="Email" optional error={errors.email} errorId={`${uid}-email-error`} htmlFor={`${uid}-email`}>
          <input type="email" autoComplete="email" className="field" {...field("email")} />
        </Field>
        <Field label="City" required error={errors.city} errorId={`${uid}-city-error`} htmlFor={`${uid}-city`}>
          <input type="text" autoComplete="address-level2" className="field" {...field("city")} />
        </Field>
        <Field label="Restaurant format" htmlFor={`${uid}-format`}>
          <select className="field" {...field("format")}>
            {FORMATS.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </Field>
        {intent === "demo" && (
          <>
            <Field label="Size" htmlFor={`${uid}-size`}>
              <select className="field" {...field("size")}>
                {SIZES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="Current billing system" optional htmlFor={`${uid}-currentSystem`}>
              <input type="text" placeholder="Paper, another POS, none" className="field" {...field("currentSystem")} />
            </Field>
          </>
        )}
      </div>

      <Field
        label={intent === "demo" ? "What would you like to see?" : "Your question"}
        optional
        htmlFor={`${uid}-message`}
      >
        <textarea
          rows={4}
          placeholder={
            intent === "demo"
              ? "For example: kitchen screens for two stations, QR ordering, using our existing printer"
              : "Hardware, onboarding, training or anything else"
          }
          className="field resize-y"
          {...field("message")}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary sm:min-w-[14rem]">
          Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-sm leading-6 text-ink-muted sm:max-w-xs sm:text-right">
          Next, you choose WhatsApp or email to send it from your own phone or computer.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  errorId,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  errorId?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {required && (
          <span className="text-danger" aria-hidden="true">
            {" "}
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
        {optional && <span className="font-normal text-ink-muted"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className={cn("field-error")}>
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
