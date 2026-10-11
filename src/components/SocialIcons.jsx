// Brand logos as inline SVGs, so the page doesn't depend on any icon library version.

function Svg({ children, className = "h-4 w-4", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      {children}
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <Svg {...props}>
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1z" />
    </Svg>
  );
}

export function InstagramIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM16.5 2h-9A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2zm3.7 14.5a3.7 3.7 0 0 1-3.7 3.7h-9a3.7 3.7 0 0 1-3.7-3.7v-9a3.7 3.7 0 0 1 3.7-3.7h9a3.7 3.7 0 0 1 3.7 3.7z" />
    </Svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM9 9h2.9v1.7c.4-.8 1.5-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.4V21h-3v-6c0-1.4 0-3.3-2-3.3s-2.4 1.6-2.4 3.2V21H9z" />
    </Svg>
  );
}

export function DribbbleIcon(props) {
  return (
    <Svg {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M3 10c5 .3 10-.6 14.5-4M7 20c2-5 6-8 13-7.5M9 3c3 3.5 5.5 10 6 18.5" strokeLinecap="round" />
    </Svg>
  );
}

export function BehanceIcon(props) {
  return (
    <Svg {...props}>
      <path d="M8.2 11.4c.9-.4 1.5-1.2 1.5-2.4C9.7 6.8 8 6 6 6H1v12h5.2c2.2 0 4.1-1 4.1-3.4 0-1.5-.8-2.7-2.1-3.2zM3.4 8h2.3c.9 0 1.6.3 1.6 1.2 0 .9-.6 1.3-1.5 1.3H3.4zm2.5 8H3.4v-3.3h2.6c1 0 1.8.4 1.8 1.6S7 16 5.9 16zM17.6 9.2c-2.7 0-4.5 2-4.5 4.5 0 2.7 1.7 4.5 4.5 4.5 2.1 0 3.4-.9 4.1-2.9h-2.2c-.2.7-1.1 1.1-1.8 1.1-1.3 0-2.1-.8-2.1-2.1h6.2c.2-2.8-1.3-5.1-4.2-5.1zm-2 3.7c.1-1.1.8-1.8 1.9-1.8 1.1 0 1.7.7 1.8 1.8zM15 6.6h5v1.3h-5z" />
    </Svg>
  );
}
