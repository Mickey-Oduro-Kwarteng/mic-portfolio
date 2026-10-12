import { useState } from "react";
import { MapPin, Mail, Phone, Send, Check } from "lucide-react";
import { PROFILE, SOCIALS } from "../data/content";
import { Button, focusRing } from "./ui";

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  textarea = false,
}) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <Tag
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 3 : undefined}
        value={value}
        onChange={onChange}
        placeholder={`${label}${required ? "*" : ""}`}
        aria-invalid={!!error}
        className={`w-full resize-none border-0 border-b bg-transparent px-0 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:outline-none focus:ring-0 ${
          error ? "border-red-500" : "border-slate-200"
        }`}
      />
      {error && (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      )}
    </label>
  );
}

// Separate backend (Render, Railway…): set VITE_API_URL=https://your-backend.onrender.com
// Left empty, it uses the Vercel function in /api/contact.js instead.
const API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export default function Contact() {
  // `website` is a honeypot: hidden from people, but bots fill it in.
  const empty = {
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
    website: "",
  };
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setServerError("");
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter an email address like name@example.com.";
    if (!form.budget.trim()) next.budget = "Enter a rough budget.";
    if (!form.subject.trim()) next.subject = "Enter a subject.";
    if (!form.message.trim())
      next.message = "Tell me a little about the project.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSent(true);
      setForm(empty);
    } catch (err) {
      setServerError(
        `Your message couldn't be sent (${err.message}). Please try again, or email me directly at ${PROFILE.email}.`,
      );
    } finally {
      setSending(false);
    }
  };

  const info = [
    { icon: MapPin, label: "Address", value: PROFILE.address },
    {
      icon: Mail,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: PROFILE.phone,
      href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
    },
  ];

  return (
    <section id="contact" className="relative z-10 px-6 pt-24">
      <div className="mx-auto -mb-24 grid max-w-6xl gap-12 rounded-xl bg-white px-6 py-12 md:grid-cols-2 md:px-12">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">
            Let's discuss your project
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-slate-500">
            Share a few details and I'll get back to you. Prefer email or a
            call? Use the details below.
          </p>

          <ul className="mt-10 space-y-6">
            {info.map(({ icon: Icon, label, value, href }, i) => (
              <li key={label} className="flex items-center gap-4">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-md ${
                    i === 0
                      ? "bg-purple-600 text-white"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className={`rounded text-sm font-medium text-slate-900 hover:text-purple-600 ${focusRing}`}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-slate-900">
                      {value}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <ul className="mt-10 flex gap-2">
            {SOCIALS.map(({ label, icon: Icon, href }, i) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors ${focusRing} ${
                    i === 0
                      ? "bg-purple-600 text-white"
                      : "text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {sent ? (
            <div
              className="flex h-full flex-col items-start justify-center"
              role="status"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                <Check className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Message sent
              </h3>
              <p className="mt-2 text-slate-500">
                Thanks — I'll reply within two working days.
              </p>
              <div className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-2">
              <p className="mb-4 text-sm leading-relaxed text-slate-500">
                Fields marked * are required.
              </p>
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={update}
                error={errors.name}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                error={errors.email}
                required
              />
              <Field
                label="Location"
                name="location"
                value={form.location}
                onChange={update}
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Budget"
                  name="budget"
                  value={form.budget}
                  onChange={update}
                  error={errors.budget}
                  required
                />
                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={update}
                  error={errors.subject}
                  required
                />
              </div>
              <Field
                label="Message"
                name="message"
                value={form.message}
                onChange={update}
                error={errors.message}
                required
                textarea
              />

              {/* Honeypot — keep hidden. Real visitors never see or fill this. */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                }}
              >
                <label>
                  Leave this empty
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={update}
                  />
                </label>
              </div>

              {serverError && (
                <p
                  role="alert"
                  className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {serverError}
                </p>
              )}

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={sending}
                  className={`inline-flex items-center gap-2 rounded-md bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`}
                >
                  {sending ? "Sending…" : "Send message"}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
