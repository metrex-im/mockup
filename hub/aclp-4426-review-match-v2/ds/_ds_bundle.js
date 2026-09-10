/* ActiMedi · Kneefresh DS bundle — core components only (trimmed for mockup) */
(() => {

const __ds_ns = (window.ActiMediKneefreshDesignSystem_75d675 = window.ActiMediKneefreshDesignSystem_75d675 || {});
const __ds_scope = {};
(__ds_ns.__errors = __ds_ns.__errors || []);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// Avatar
try { (() => {
const SIZES = { sm: 32, md: 40, lg: 48, xl: 64 };
function Avatar({ src, name = "", size = "md", style, ...rest }) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.trim().slice(0, 2).toUpperCase();
  return React.createElement("span", _extends({ style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: dim, height: dim, flex: "none", borderRadius: 999, overflow: "hidden", background: "var(--am-blue-100)", color: "var(--am-blue-700)", fontFamily: "var(--am-font-head)", fontWeight: 700, fontSize: dim * 0.36, ...style } }, rest), src ? React.createElement("img", { src: src, alt: name, style: { width: "100%", height: "100%", objectFit: "cover" } }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Avatar", error: String((e && e.message) || e) }); }

// Badge
try { (() => {
const TONES = {
  brand: { bg: "var(--am-blue-50)", fg: "var(--am-blue-700)" },
  navy: { bg: "var(--am-blue-100)", fg: "var(--am-navy)" },
  sky: { bg: "var(--am-sky-50)", fg: "var(--am-sky-900)" },
  positive: { bg: "var(--am-status-positive-bg)", fg: "var(--am-status-positive)" },
  cautionary: { bg: "var(--am-status-cautionary-bg)", fg: "var(--am-status-cautionary)" },
  destructive: { bg: "var(--am-status-destructive-bg)", fg: "var(--am-status-destructive)" },
  yellow: { bg: "var(--am-yellow-100)", fg: "var(--am-yellow-700)" },
  neutral: { bg: "var(--am-ink-50)", fg: "var(--am-text-alternative)" },
  solid: { bg: "var(--am-blue)", fg: "#fff" }
};
function Badge({ children, tone = "brand", size = "md", dot = false, style, ...rest }) {
  const t = TONES[tone] || TONES.brand;
  const pad = size === "sm" ? "2px 8px" : "4px 12px";
  const fs = size === "sm" ? 11 : 12;
  return React.createElement("span", _extends({ style: { display: "inline-flex", alignItems: "center", gap: 6, padding: pad, borderRadius: "var(--am-radius-pill)", background: t.bg, color: t.fg, fontFamily: "var(--am-font-head)", fontSize: fs, fontWeight: 700, letterSpacing: "-0.005em", lineHeight: 1.4, whiteSpace: "nowrap", ...style } }, rest), dot && React.createElement("span", { style: { width: 6, height: 6, borderRadius: 999, background: "currentColor" } }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Badge", error: String((e && e.message) || e) }); }

// Card
try { (() => {
const SURFACES = {
  light: { background: "#fff", color: "var(--am-text-strong)", border: "1px solid var(--am-line)", shadow: "var(--am-shadow-sm)" },
  sunken: { background: "var(--am-surface-sunken)", color: "var(--am-text-strong)", border: "none", shadow: "none" },
  brand: { background: "var(--am-blue)", color: "#fff", border: "none", shadow: "var(--am-shadow-brand)" },
  navy: { background: "var(--am-navy)", color: "#fff", border: "none", shadow: "var(--am-shadow-lg)" },
  sky: { background: "var(--am-sky-50)", color: "var(--am-navy)", border: "1px solid var(--am-sky-100)", shadow: "none" },
  yellow: { background: "var(--am-yellow)", color: "var(--am-black)", border: "none", shadow: "var(--am-shadow-md)" },
  dark: { background: "var(--am-surface-dark-elev)", color: "#fff", border: "1px solid var(--am-line-on-dark)", shadow: "var(--am-shadow-lg)" }
};
const RADII = { md: "var(--am-radius-lg)", lg: "var(--am-radius-xl)", xl: "var(--am-radius-2xl)", xxl: "var(--am-radius-3xl)" };
const PADS = { sm: 16, md: 20, lg: 24, xl: 28 };
function Card({ surface = "light", radius = "lg", padding = "md", interactive = false, style, children, ...rest }) {
  const s = SURFACES[surface] || SURFACES.light;
  const [hover, setHover] = React.useState(false);
  return React.createElement("div", _extends({ onMouseEnter: () => interactive && setHover(true), onMouseLeave: () => interactive && setHover(false), style: { background: s.background, color: s.color, border: s.border, borderRadius: RADII[radius] || RADII.lg, padding: PADS[padding] ?? PADS.md, boxShadow: interactive && hover ? "var(--am-shadow-md)" : s.shadow, transform: interactive && hover ? "translateY(-2px)" : "none", transition: "box-shadow var(--am-dur-fast) var(--am-ease), transform var(--am-dur-fast) var(--am-ease)", cursor: interactive ? "pointer" : "default", ...style } }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Card", error: String((e && e.message) || e) }); }

// Icon
try { (() => {
const AM_ICONS = {
  "chevron-left": "M15 18l-6-6 6-6",
  "chevron-right": "M9 18l6-6-6-6",
  "chevron-up": "M18 15l-6-6-6 6",
  "chevron-down": "M6 9l6 6 6-6",
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "arrow-left": "M19 12H5M11 18l-6-6 6-6",
  "plus": "M12 5v14M5 12h14",
  "close": "M18 6L6 18M6 6l12 12",
  "check": "M20 6L9 17l-5-5",
  "search": "M21 21l-4.3-4.3M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
  "mic": "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3",
  "lock": "M5 11h14a0 0 0 0 1 0 0v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a0 0 0 0 1 0 0zM8 11V7a4 4 0 0 1 8 0v4",
  "eye": "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  "bookmark": "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
  "timer": "M12 14v-4M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 2h6",
  "dumbbell": "M14.4 14.4L9.6 9.6M18.66 17.66l1.42 1.42a1 1 0 0 0 1.41 0l1.41-1.41a1 1 0 0 0 0-1.42l-1.42-1.42M5.34 6.34L3.92 4.92a1 1 0 0 0-1.41 0L1.1 6.33a1 1 0 0 0 0 1.42l1.42 1.42M21.5 14.5l-7-7M9.5 16.5l-7-7",
  "home": "M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5",
  "info": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",
  "alert-triangle": "M10.3 4l-8 14a2 2 0 0 0 1.7 3h16a2 2 0 0 0 1.7-3l-8-14a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01",
  "check-circle": "M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4L12 14.1l-3-3",
  "bell": "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0",
  "trash": "M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6",
  "user": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  "calendar": "M8 2v4M16 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  "activity": "M22 12h-4l-3 9L9 3l-3 9H2",
  "play": "M6 4l14 8-14 8V4z",
  "flame": "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5-.5 2-2 3-3 3 .5-3-1-6-4-8 .5 4-2 5.5-3.5 8A7 7 0 0 0 12 22z",
  "heart": "M19 14c1.5-1.5 3-3.4 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.1 1.5 4 3 5.5l7 7z",
  "settings": "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.74.66 1.65 1.65 0 0 1-3.32 0 1.65 1.65 0 0 0-2.74-.66l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 1 0-3.3 1.65 1.65 0 0 0-.66-2.74l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 1 3.3 0 1.65 1.65 0 0 0 2.74.66l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9z"
};
function Icon({ name, size = 20, color = "currentColor", strokeWidth = 1.75, style, className, ...rest }) {
  const d = AM_ICONS[name];
  if (!d) return null;
  const paths = d.split("M").filter(Boolean).map(p => "M" + p.trim());
  return React.createElement("svg", _extends({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", className: className, style: { display: "block", flex: "none", ...style }, "aria-hidden": "true" }, rest), paths.map((p, i) => React.createElement("path", { key: i, d: p })));
}
Object.assign(__ds_scope, { AM_ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Icon", error: String((e && e.message) || e) }); }

// Button
try { (() => {
const SIZES = {
  lg: { height: 56, padding: "0 28px", font: 17, gap: 8, icon: 20 },
  md: { height: 48, padding: "0 24px", font: 16, gap: 8, icon: 20 },
  sm: { height: 40, padding: "0 18px", font: 15, gap: 6, icon: 16 },
  xs: { height: 32, padding: "0 14px", font: 14, gap: 6, icon: 16 }
};
const VARIANTS = {
  primary: { background: "var(--am-blue)", color: "#fff", border: "1.5px solid transparent", shadow: "var(--am-shadow-brand)" },
  secondary: { background: "#fff", color: "var(--am-blue)", border: "1.5px solid var(--am-blue)", shadow: "none" },
  tertiary: { background: "transparent", color: "var(--am-blue)", border: "1.5px solid transparent", shadow: "none" },
  destructive: { background: "var(--am-status-destructive)", color: "#fff", border: "1.5px solid transparent", shadow: "none" },
  yellow: { background: "var(--am-yellow)", color: "var(--am-black)", border: "1.5px solid transparent", shadow: "none" }
};
function Button({ children, variant = "primary", size = "md", iconLeft, iconRight, fullWidth = false, disabled = false, style, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const filled = variant === "primary" || variant === "destructive" || variant === "yellow";
  let bg = v.background;
  if (!disabled && filled) {
    if (active) bg = `color-mix(in srgb, ${v.background}, #000 12%)`; else if (hover) bg = `color-mix(in srgb, ${v.background}, #000 5%)`;
  }
  if (!disabled && !filled && (hover || active)) {
    bg = active ? "var(--am-blue-100)" : "var(--am-blue-50)";
  }
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: s.gap, height: s.height, padding: s.padding, width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--am-font-head)", fontSize: s.font, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1,
    borderRadius: "var(--am-radius-pill)", border: v.border,
    background: disabled ? "var(--am-ink-100)" : bg,
    color: disabled ? "var(--am-text-disable)" : v.color,
    boxShadow: disabled ? "none" : hover ? v.shadow : v.shadow === "var(--am-shadow-brand)" ? "var(--am-shadow-sm)" : v.shadow,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--am-dur-press) var(--am-ease), box-shadow var(--am-dur-fast) var(--am-ease)",
    WebkitTapHighlightColor: "transparent", userSelect: "none", ...style
  };
  return React.createElement("button", _extends({ type: "button", disabled: disabled, style: base, onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setActive(false); }, onMouseDown: () => setActive(true), onMouseUp: () => setActive(false) }, rest),
    iconLeft && React.createElement(__ds_scope.Icon, { name: iconLeft, size: s.icon }), children, iconRight && React.createElement(__ds_scope.Icon, { name: iconRight, size: s.icon }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Button", error: String((e && e.message) || e) }); }

// Checkbox
try { (() => {
function Checkbox({ checked, defaultChecked = false, onChange, disabled = false, label, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => { if (disabled) return; if (!isControlled) setInternal(!on); onChange && onChange(!on); };
  return React.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", ...style } },
    React.createElement("span", _extends({ role: "checkbox", "aria-checked": on, onClick: toggle, style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, flex: "none", borderRadius: 6, background: on ? "var(--am-blue)" : "#fff", border: on ? "1.5px solid var(--am-blue)" : "1.5px solid var(--am-line-strong)", transition: "background var(--am-dur-fast) var(--am-ease), border-color var(--am-dur-fast) var(--am-ease)", opacity: disabled ? 0.5 : 1 } }, rest), on && React.createElement(__ds_scope.Icon, { name: "check", size: 15, color: "#fff", strokeWidth: 2.5 })),
    label && React.createElement("span", { style: { fontFamily: "var(--am-font-body)", fontSize: 15, color: "var(--am-text-neutral)" } }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Checkbox", error: String((e && e.message) || e) }); }

// Chip
try { (() => {
function Chip({ children, selected = false, icon, onClick, disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return React.createElement("button", _extends({ type: "button", disabled: disabled, onClick: onClick, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: { display: "inline-flex", alignItems: "center", gap: 6, height: 36, padding: icon ? "0 14px 0 12px" : "0 16px", borderRadius: "var(--am-radius-md)", border: selected ? "1.5px solid var(--am-blue)" : "1px solid var(--am-line)", background: selected ? "var(--am-blue-50)" : hover ? "var(--am-ink-30)" : "#fff", color: selected ? "var(--am-blue-700)" : "var(--am-text-neutral)", fontFamily: "var(--am-font-body)", fontSize: 14, fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, transition: "background var(--am-dur-fast) var(--am-ease), border-color var(--am-dur-fast) var(--am-ease)", WebkitTapHighlightColor: "transparent", ...style } }, rest), icon && React.createElement(__ds_scope.Icon, { name: icon, size: 16 }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Chip", error: String((e && e.message) || e) }); }

// IconButton
try { (() => {
const SIZES = { lg: 56, md: 48, sm: 40, xs: 32 };
const ICON = { lg: 24, md: 20, sm: 20, xs: 16 };
function IconButton({ icon, variant = "ghost", size = "md", shape = "pill", disabled = false, label, style, ...rest }) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const variants = {
    primary: { bg: "var(--am-blue)", color: "#fff", border: "none" },
    ghost: { bg: "transparent", color: "var(--am-text-neutral)", border: "none" },
    outline: { bg: "#fff", color: "var(--am-text-neutral)", border: "1px solid var(--am-line)" }
  };
  const v = variants[variant] || variants.ghost;
  let bg = v.bg;
  if (!disabled) {
    if (variant === "primary") bg = active ? "var(--am-blue-700)" : hover ? "var(--am-blue-500)" : v.bg; else bg = active ? "var(--am-blue-100)" : hover ? "var(--am-blue-50)" : v.bg;
  }
  return React.createElement("button", _extends({ type: "button", "aria-label": label, title: label, disabled: disabled, onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setActive(false); }, onMouseDown: () => setActive(true), onMouseUp: () => setActive(false), style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: dim, height: dim, borderRadius: shape === "pill" ? "var(--am-radius-pill)" : "var(--am-radius-md)", border: v.border, background: disabled ? "var(--am-ink-100)" : bg, color: disabled ? "var(--am-text-disable)" : variant === "primary" ? "#fff" : hover ? "var(--am-blue)" : v.color, cursor: disabled ? "not-allowed" : "pointer", transition: "background var(--am-dur-press) var(--am-ease), color var(--am-dur-fast) var(--am-ease)", WebkitTapHighlightColor: "transparent", ...style } }, rest), React.createElement(__ds_scope.Icon, { name: icon, size: ICON[size] || 20 }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "IconButton", error: String((e && e.message) || e) }); }

// Input
try { (() => {
function Input({ label, hint, error, iconLeft, iconRight, disabled = false, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? "var(--am-status-destructive)" : focus ? "var(--am-blue)" : "var(--am-line)";
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, ...style } },
    label && React.createElement("label", { htmlFor: inputId, style: { fontFamily: "var(--am-font-body)", fontSize: 14, fontWeight: 600, color: "var(--am-text-neutral)" } }, label),
    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, height: 52, padding: "0 16px", background: disabled ? "var(--am-ink-50)" : "#fff", border: `${focus && !error ? 2 : 1}px solid ${borderColor}`, borderRadius: "var(--am-radius-lg)", boxShadow: focus && !error ? "0 0 0 4px rgba(30,90,240,0.12)" : "none", transition: "border-color var(--am-dur-fast) var(--am-ease), box-shadow var(--am-dur-fast) var(--am-ease)" } },
      iconLeft && React.createElement(__ds_scope.Icon, { name: iconLeft, size: 20, color: "var(--am-text-assistive)" }),
      React.createElement("input", _extends({ id: inputId, disabled: disabled, onFocus: () => setFocus(true), onBlur: () => setFocus(false), style: { flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", fontFamily: "var(--am-font-body)", fontSize: 16, fontWeight: 400, color: "var(--am-text-strong)" } }, rest)),
      iconRight && React.createElement(__ds_scope.Icon, { name: iconRight, size: 20, color: "var(--am-text-assistive)" })),
    (hint || error) && React.createElement("span", { style: { fontFamily: "var(--am-font-body)", fontSize: 12, color: error ? "var(--am-status-destructive)" : "var(--am-text-alternative)" } }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Input", error: String((e && e.message) || e) }); }

// Progress
try { (() => {
function Progress({ value = 0, max = 100, variant = "linear", size = 64, thickness = 6, color = "var(--am-blue)", track = "var(--am-ink-100)", showLabel = false, style }) {
  const pct = Math.max(0, Math.min(1, value / max));
  if (variant === "circular") {
    const r = (size - thickness) / 2;
    const c = 2 * Math.PI * r;
    return React.createElement("span", { style: { position: "relative", display: "inline-flex", width: size, height: size, ...style } },
      React.createElement("svg", { width: size, height: size, style: { transform: "rotate(-90deg)" } },
        React.createElement("circle", { cx: size / 2, cy: size / 2, r: r, fill: "none", stroke: track, strokeWidth: thickness }),
        React.createElement("circle", { cx: size / 2, cy: size / 2, r: r, fill: "none", stroke: color, strokeWidth: thickness, strokeLinecap: "round", strokeDasharray: c, strokeDashoffset: c * (1 - pct), style: { transition: "stroke-dashoffset 400ms var(--am-ease)" } })),
      showLabel && React.createElement("span", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--am-font-num)", fontWeight: 700, fontSize: size * 0.26, color: "var(--am-text-strong)", fontFeatureSettings: '"tnum"' } }, Math.round(pct * 100), "%"));
  }
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, ...style } },
    React.createElement("div", { style: { height: thickness, borderRadius: 999, background: track, overflow: "hidden" } },
      React.createElement("div", { style: { width: `${pct * 100}%`, height: "100%", borderRadius: 999, background: color, transition: "width 400ms var(--am-ease)" } })),
    showLabel && React.createElement("span", { style: { fontFamily: "var(--am-font-num)", fontSize: 12, fontWeight: 700, color: "var(--am-text-alternative)", fontFeatureSettings: '"tnum"' } }, Math.round(pct * 100), "%"));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Progress", error: String((e && e.message) || e) }); }

// Radio
try { (() => {
function Radio({ checked, defaultChecked = false, onChange, disabled = false, label, name, value, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const select = () => { if (disabled) return; if (!isControlled) setInternal(true); onChange && onChange(value ?? true); };
  return React.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", ...style } },
    React.createElement("span", _extends({ role: "radio", "aria-checked": on, onClick: select, style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, flex: "none", borderRadius: 999, background: "#fff", border: on ? "1.5px solid var(--am-blue)" : "1.5px solid var(--am-line-strong)", transition: "border-color var(--am-dur-fast) var(--am-ease)", opacity: disabled ? 0.5 : 1 } }, rest), on && React.createElement("span", { style: { width: 11, height: 11, borderRadius: 999, background: "var(--am-blue)" } })),
    label && React.createElement("span", { style: { fontFamily: "var(--am-font-body)", fontSize: 15, color: "var(--am-text-neutral)" } }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Radio", error: String((e && e.message) || e) }); }

// SegmentedControl
try { (() => {
function SegmentedControl({ options = [], value, defaultValue, onChange, style, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (options[0] && options[0].value));
  const current = isControlled ? value : internal;
  const select = v => { if (!isControlled) setInternal(v); onChange && onChange(v); };
  return React.createElement("div", _extends({ role: "tablist", style: { display: "inline-flex", gap: 4, padding: 4, background: "var(--am-surface-sunken)", borderRadius: "var(--am-radius-pill)", ...style } }, rest), options.map(opt => {
    const active = opt.value === current;
    return React.createElement("button", { key: opt.value, type: "button", role: "tab", "aria-selected": active, onClick: () => select(opt.value), style: { padding: "8px 18px", border: "none", borderRadius: "var(--am-radius-pill)", background: active ? "#fff" : "transparent", color: active ? "var(--am-blue)" : "var(--am-text-alternative)", fontFamily: "var(--am-font-head)", fontSize: 14, fontWeight: 700, boxShadow: active ? "var(--am-shadow-xs)" : "none", cursor: "pointer", whiteSpace: "nowrap", transition: "background var(--am-dur-fast) var(--am-ease), color var(--am-dur-fast) var(--am-ease)" } }, opt.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "SegmentedControl", error: String((e && e.message) || e) }); }

// Stat
try { (() => {
function Stat({ label, value, unit, delta, deltaTone = "positive", icon, onDark = false, style }) {
  const labelColor = onDark ? "var(--am-ontext-alternative)" : "var(--am-text-alternative)";
  const valueColor = onDark ? "#fff" : "var(--am-text-strong)";
  const deltaColors = { positive: "var(--am-status-positive)", cautionary: "var(--am-status-cautionary)", destructive: "var(--am-status-destructive)" };
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, ...style } },
    React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--am-font-body)", fontSize: 13, fontWeight: 500, color: labelColor } }, icon && React.createElement(__ds_scope.Icon, { name: icon, size: 16, color: labelColor }), label),
    React.createElement("span", { style: { display: "flex", alignItems: "baseline", gap: 4 } },
      React.createElement("span", { style: { fontFamily: "var(--am-font-num)", fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", color: valueColor, fontFeatureSettings: '"tnum"' } }, value),
      unit && React.createElement("span", { style: { fontFamily: "var(--am-font-body)", fontSize: 15, fontWeight: 600, color: labelColor } }, unit)),
    delta != null && React.createElement("span", { style: { fontFamily: "var(--am-font-num)", fontSize: 13, fontWeight: 700, color: deltaColors[deltaTone], fontFeatureSettings: '"tnum"' } }, delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Stat", error: String((e && e.message) || e) }); }

// Switch
try { (() => {
function Switch({ checked, defaultChecked = false, onChange, disabled = false, label, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => { if (disabled) return; if (!isControlled) setInternal(!on); onChange && onChange(!on); };
  const track = React.createElement("span", _extends({ role: "switch", "aria-checked": on, onClick: toggle, style: { position: "relative", display: "inline-block", width: 48, height: 28, flex: "none", borderRadius: 999, background: disabled ? "var(--am-ink-100)" : on ? "var(--am-blue)" : "var(--am-ink-200)", cursor: disabled ? "not-allowed" : "pointer", transition: "background var(--am-dur-fast) var(--am-ease)", ...style } }, rest),
    React.createElement("span", { style: { position: "absolute", top: 3, left: on ? 23 : 3, width: 22, height: 22, borderRadius: 999, background: "#fff", boxShadow: "0 1px 3px rgba(12,30,107,0.25)", transition: "left var(--am-dur-fast) var(--am-ease)" } }));
  if (!label) return track;
  return React.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer" } }, track, React.createElement("span", { style: { fontFamily: "var(--am-font-body)", fontSize: 15, color: "var(--am-text-neutral)" } }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "Switch", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;
__ds_ns.Badge = __ds_scope.Badge;
__ds_ns.Button = __ds_scope.Button;
__ds_ns.Card = __ds_scope.Card;
__ds_ns.Checkbox = __ds_scope.Checkbox;
__ds_ns.Chip = __ds_scope.Chip;
__ds_ns.AM_ICONS = __ds_scope.AM_ICONS;
__ds_ns.Icon = __ds_scope.Icon;
__ds_ns.IconButton = __ds_scope.IconButton;
__ds_ns.Input = __ds_scope.Input;
__ds_ns.Progress = __ds_scope.Progress;
__ds_ns.Radio = __ds_scope.Radio;
__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;
__ds_ns.Stat = __ds_scope.Stat;
__ds_ns.Switch = __ds_scope.Switch;

})();
