:root {
  --bg: #020617;
  --bg-alt: #020617;
  --surface: #030712;
  --surface-soft: #0b1120;
  --border: #1f2937;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --gold: #facc15;
  --gold-soft: rgba(250, 204, 21, 0.14);
  --radius-lg: 18px;
  --radius-full: 999px;
  --shadow-soft: 0 20px 50px rgba(0, 0, 0, 0.75);
}

/* BASIC RESET */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #111827 0, #020617 55%, #000 100%);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

/* LAYOUT */
.container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

.row {
  display: flex;
  gap: 12px;
}

.between {
  justify-content: space-between;
}

.center {
  align-items: center;
}

/* TOPBAR */
.topbar {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(18px);
  background: linear-gradient(to bottom, rgba(3,7,18,0.96), rgba(3,7,18,0.8), transparent);
  border-bottom: 1px solid rgba(148,163,184,0.25);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 14px;
  background: radial-gradient(circle at 15% 0%, #facc15, #854d0e 70%, #020617);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 20px;
  color: #020617;
  box-shadow: 0 0 18px rgba(250,204,21,0.8);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.brand-sub {
  font-size: 11px;
  color: var(--muted);
}

.nav {
  display: flex;
  gap: 10px;
  font-size: 14px;
}

.nav-link {
  position: relative;
  padding: 8px 12px;
  border-radius: 999px;
  color: var(--muted);
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 4px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.18s ease-out;
}

.nav-link:hover {
  color: #f9fafb;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* BUTTONS */
.btn-primary,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  border-radius: 999px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease, color 0.12s ease;
}

.btn-primary {
  background: radial-gradient(circle at 10% 0%, #facc15, #854d0e);
  color: #020617;
  box-shadow: 0 18px 50px rgba(250,204,21,0.68);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 60px rgba(250,204,21,0.85);
}

.btn-ghost {
  background: rgba(15,23,42,0.9);
  color: var(--text);
  border: 1px solid rgba(148,163,184,0.4);
}

.btn-ghost:hover {
  background: rgba(15,23,42,1);
  transform: translateY(-1px);
}

.btn-link {
  font-size: 13px;
  color: var(--gold);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.btn-link.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* HERO */
.hero {
  padding: 40px 0 32px;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1.1fr);
  gap: 28px;
  align-items: center;
}

.eyebrow {
  color: var(--gold);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin-bottom: 8px;
}

.hero h1 {
  font-size: clamp(30px, 4vw, 40px);
  line-height: 1.1;
  margin: 0 0 12px;
}

.hero-sub {
  margin: 0 0 16px;
  color: var(--muted);
  max-width: 38rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 11px;
  padding: 4px 9px;
  border-radius: 999px;
  border: 1px solid rgba(148,163,184,0.4);
  background: rgba(15,23,42,0.9);
  color: var(--muted);
}

.gold-text {
  color: var(--gold);
}

/* HERO PREVIEW */
.hero-preview {
  position: relative;
  display: flex;
  justify-content: center;
}

.device {
  background: radial-gradient(circle at top, #111827, #020617 60%);
  border-radius: 24px;
  border: 1px solid rgba(148,163,184,0.4);
  box-shadow: var(--shadow-soft);
  padding: 12px;
}

.device.desktop {
  width: 100%;
  max-width: 360px;
}

.device.mobile {
  position: absolute;
  right: -10px;
  bottom: -10px;
  width: 180px;
  border-radius: 26px;
}

.device-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  font-size: 11px;
  color: var(--muted);
}

.dots {
  display: flex;
  gap: 4px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #4b5563;
}

.device-title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

/* Fake KPIs */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 8px;
  margin-bottom: 14px;
}

.kpi-card {
  background: linear-gradient(135deg, rgba(15,23,42,0.9), rgba(17,24,39,0.9));
  border-radius: 14px;
  padding: 8px;
  border: 1px solid rgba(148,163,184,0.25);
}

.kpi-label {
  font-size: 11px;
  color: var(--muted);
}

.kpi-value {
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-top: 2px;
}

.kpi-foot {
  display: block;
  font-size: 10px;
  color: #22c55e;
}

/* Chart bars */
.chart-bar {
  display: flex;
  gap: 6px;
  align-items: flex-end;
  height: 70px;
}

.chart-col {
  flex: 1;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(to top, rgba(250,204,21,0.1), rgba(250,204,21,0.85));
}

/* Mobile mockup */
.mobile-body {
  background: radial-gradient(circle at top, #111827, #020617 60%);
  border-radius: 18px;
  padding: 10px;
}

.mobile-kpi {
  border-radius: 14px;
  padding: 8px 10px;
  background: rgba(15,23,42,0.95);
  border: 1px solid rgba(148,163,184,0.3);
  margin-bottom: 10px;
}

.mobile-label {
  font-size: 11px;
  color: var(--muted);
}

.mobile-value {
  display: block;
  font-size: 16px;
  font-weight: 600;
}

.mobile-foot {
  display: block;
  font-size: 10px;
  color: var(--muted);
}

.mobile-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 6px;
}

.mobile-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  background: rgba(15,23,42,0.95);
  border-radius: 10px;
  padding: 6px 8px;
}

.pill {
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 999px;
  background: var(--gold-soft);
  color: var(--gold);
}

.pill-muted {
  background: rgba(148,163,184,0.16);
  color: var(--muted);
}

.pill-warning {
  background: rgba(250,204,21,0.18);
  color: var(--gold);
}

/* SECTIONS */
.section {
  padding: 40px 0;
}

.section-alt {
  background: radial-gradient(circle at top, #020617, #000 70%);
}

.section-head {
  text-align: center;
  margin-bottom: 24px;
}

.section-head h2 {
  font-size: 24px;
  margin: 0 0 8px;
}

.section-head p {
  margin: 0;
  color: var(--muted);
  max-width: 34rem;
  margin-left: auto;
  margin-right: auto;
}

.section-head.left {
  text-align: left;
  max-width: 40rem;
}

/* PRODUCT CARDS */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 18px;
}

.product-card {
  background: linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85));
  border-radius: var(--radius-lg);
  padding: 16px 16px 14px;
  border: 1px solid rgba(148,163,184,0.34);
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.product-card h3 {
  margin: 0;
  font-size: 17px;
}

.badge {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 999px;
  background: var(--gold-soft);
  color: var(--gold);
}

.card-text {
  font-size: 13px;
  color: var(--muted);
  margin: 0;
}

.card-list {
  list-style: none;
  margin: 4px 0 0;
  padding-left: 18px;
  font-size: 12px;
  color: #d1d5db;
}

.card-list li {
  position: relative;
  margin-bottom: 3px;
}

.card-list li::before {
  content: "•";
  position: absolute;
  left: -10px;
  color: var(--gold);
}

.card-footer {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

/* SECTORES GRID */
.sectores-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 16px;
}

.sector-card {
  background: rgba(15,23,42,0.96);
  border-radius: var(--radius-lg);
  padding: 14px;
  border: 1px solid rgba(148,163,184,0.32);
}

.sector-card h3 {
  margin: 0 0 6px;
  font-size: 15px;
}

.sector-card p {
  margin: 0;
  font-size: 13px;
  color: var(--muted);
}

.sector-tag {
  font-size: 11px;
  margin-top: 8px;
  color: var(--gold);
}

/* CONTACTO */
.contact-grid {
  display: grid;
  grid-template-columns: minmax(0,1.1fr) minmax(0,1fr);
  gap: 22px;
  align-items: flex-start;
}

.contact-list {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  font-size: 13px;
  color: var(--muted);
}

.contact-list li {
  margin-bottom: 6px;
}

.contact-form {
  background: rgba(15,23,42,0.96);
  border-radius: var(--radius-lg);
  padding: 16px 16px 14px;
  border: 1px solid rgba(148,163,184,0.36);
}

.field {
  margin-bottom: 10px;
}

.field label {
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
  color: #e5e7eb;
}

.field input,
.field textarea {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(148,163,184,0.45);
  background: #020617;
  color: var(--text);
  padding: 8px 9px;
  font-size: 13px;
  outline: none;
}

.field input:focus,
.field textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 1px rgba(250,204,21,0.35);
}

.field textarea {
  resize: vertical;
}

.btn-primary.full {
  width: 100%;
  margin-top: 4px;
}

.form-note {
  margin: 6px 0 0;
  font-size: 11px;
  color: var(--muted);
}

/* FOOTER */
.footer {
  border-top: 1px solid rgba(148,163,184,0.25);
  padding: 14px 0;
  background: rgba(3,7,18,0.96);
}

.footer-text {
  font-size: 11px;
  color: var(--muted);
}

.footer-text.small {
  font-size: 10px;
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: minmax(0,1fr);
  }
  .hero-preview {
    order: -1;
    margin-bottom: 10px;
  }
  .card-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
  .sectores-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
  .contact-grid {
    grid-template-columns: minmax(0,1fr);
  }
}

@media (max-width: 640px) {
  .nav {
    display: none;
  }
  .card-grid {
    grid-template-columns: minmax(0,1fr);
  }
  .sectores-grid {
    grid-template-columns: minmax(0,1fr);
  }
  .device.desktop {
    max-width: 100%;
  }
  .device.mobile {
    display: none;
  }
}
