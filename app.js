:root {
  --bg: #eff6ff;
  --bg-soft: #f7f9fd;
  --panel: #ffffff;
  --primary: #111827;
  --primary-2: #1d4ed8;
  --primary-3: #2563eb;
  --muted: #5e6c7d;
  --text: #18212d;
  --line: rgba(15, 23, 42, 0.08);
  --success: #0f9f6e;
  --warning: #d97706;
  --danger: #dc2626;
  --shadow: 0 18px 38px rgba(15, 23, 42, 0.09);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #eef5ff 0%, #f7f9fd 100%);
}

a {
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: min(1200px, calc(100% - 30px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 88px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 15px;
}

.brand-logo {
  width: 72px;
  height: 72px;
  border-radius: 16px;
}

.brand-kicker {
  margin: 0;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}

.brand h1 {
  margin: 0;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: var(--primary);
  letter-spacing: 0.06em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.main-nav a,
.auth-footer-links a {
  color: var(--muted);
  font-weight: 600;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.85rem 1.2rem;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-2), var(--primary));
  color: white;
  box-shadow: 0 12px 24px rgba(29, 78, 216, 0.18);
}

.btn-secondary {
  background: #eef4ff;
  color: var(--primary-2);
}

.btn-ghost {
  background: white;
  border: 1px solid var(--line);
  color: var(--text);
}

.full {
  width: 100%;
}

.hero {
  padding: 4.5rem 0 2.5rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 34px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.7rem;
  color: var(--primary-2);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-copy h2 {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 4.2rem);
  letter-spacing: -0.06em;
  line-height: 1.08;
  color: var(--primary);
}

.hero-copy p {
  margin: 1rem 0 0;
  line-height: 1.75;
  color: var(--muted);
  max-width: 610px;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 1.5rem;
}

.hero-points {
  list-style: none;
  margin: 1.7rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px 16px;
  color: var(--text);
  font-weight: 600;
}

.hero-points li::before {
  content: "✓";
  color: var(--success);
  margin-right: 8px;
}

.panel-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.login-mini {
  padding: 1.5rem;
}

.panel-head {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
}

.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 5px rgba(15, 159, 110, 0.14);
}

.login-mini h3 {
  margin: 1rem 0 1.2rem;
  font-size: 1.9rem;
}

.mini-login-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  background: #f5f9ff;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.mini-login-grid strong {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.mini-login-grid p {
  margin: 0.5rem 0 0;
  color: var(--text);
  font-weight: 600;
}

.mini-form {
  display: grid;
  gap: 0.9rem;
}

label {
  display: block;
  margin-top: 0.85rem;
}

label span {
  display: block;
  margin-bottom: 0.45rem;
  color: var(--muted);
  font-size: 0.84rem;
  font-weight: 600;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 12px;
  background: #fbfdff;
  color: var(--text);
  padding: 0.9rem 0.95rem;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: rgba(29, 78, 216, 0.45);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08);
}

.auth-body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.auth-shell {
  width: min(700px, calc(100% - 24px));
  margin: 50px auto;
}

.auth-panel {
  padding: 2rem;
}

.auth-brand {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 1.5rem;
}

.auth-brand h2 {
  margin: 0.2rem 0 0;
  color: var(--primary);
  font-size: clamp(1.2rem, 2vw, 2rem);
  letter-spacing: 0.05em;
}

.auth-segment {
  display: grid;
  gap: 1rem;
}

.login-tab-group {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.tab-btn {
  border: 1px solid var(--line);
  background: #f8fbff;
  color: var(--text);
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  font-weight: 700;
  cursor: pointer;
}

.tab-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.auth-google {
  margin-top: 0.2rem;
}

.auth-footer-links {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}

.stats-strip,
.module-section,
.dashboard-section,
.leave-section,
.security-section,
.contact-section,
.page-shell {
  padding: 3rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.stat-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 1.3rem 1rem;
}

.stat-label {
  display: block;
  color: var(--muted);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 800;
}

.stat-card strong {
  display: block;
  margin-top: 0.8rem;
  font-size: clamp(1.7rem, 2vw, 2.6rem);
  color: var(--primary);
  letter-spacing: -0.05em;
}

.stat-card small {
  display: block;
  margin-top: 0.5rem;
  color: var(--muted);
}

.section-heading {
  text-align: center;
  margin-bottom: 1.8rem;
}

.section-heading.left-align {
  text-align: left;
}

.compact {
  margin-bottom: 1rem;
}

.section-heading h3 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.8rem);
  color: var(--primary);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.icon {
  display: inline-flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #dbeafe, #edf5ff);
  font-size: 1.6rem;
}

.feature-card h4 {
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
  color: var(--primary);
}

.feature-card p {
  margin: 0;
  line-height: 1.8;
  color: var(--muted);
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 330px 1fr;
  gap: 22px;
}

.search-panel,
.request-card,
.contact-info,
.contact-brief,
.student-search-panel,
.student-result,
.request-form,
.admin-card,
.sidebar {
  padding: 1.4rem;
}

.search-panel h4,
.request-card h3,
.contact-info h3,
.contact-brief h4,
.student-search-panel h3,
.student-result h3,
.request-form h3,
.admin-card h3,
.sidebar h3 {
  margin-top: 0;
}

.student-summary {
  margin-top: 1.3rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}

.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 0.7rem;
  color: var(--muted);
}

.summary-line strong {
  color: var(--primary);
}

.main-dashboard {
  display: grid;
  gap: 18px;
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.mini-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.2rem 1rem;
  box-shadow: var(--shadow);
}

.mini-card.success {
  background: linear-gradient(135deg, rgba(15, 159, 110, 0.08), rgba(15, 159, 110, 0.02));
}

.mini-card.warning {
  background: linear-gradient(135deg, rgba(217, 119, 6, 0.08), rgba(217, 119, 6, 0.02));
}

.mini-card.danger {
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.08), rgba(220, 38, 38, 0.02));
}

.mini-label {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 800;
}

.mini-card strong {
  display: block;
  margin-top: 0.7rem;
  font-size: 2rem;
  color: var(--primary);
}

.table-wrap {
  overflow: hidden;
}

.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 0.8rem;
}

.table-header h3,
.table-header h4 {
  margin: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  background: #f5f8ff;
  text-align: left;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.8rem 0.7rem;
  border-bottom: 1px solid var(--line);
}

tbody td {
  padding: 0.85rem 0.7rem;
  border-bottom: 1px solid var(--line);
  color: var(--text);
}

.status {
  display: inline-block;
  padding: 0.33rem 0.6rem;
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 700;
}

.status.good {
  background: rgba(15, 159, 110, 0.12);
  color: var(--success);
}

.status.warning {
  background: rgba(217, 119, 6, 0.12);
  color: var(--warning);
}

.status.danger {
  background: rgba(220, 38, 38, 0.12);
  color: var(--danger);
}

.leave-grid,
.contact-grid,
.leave-page-grid,
.admin-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.request-form,
.admin-card {
  width: 100%;
}

.security-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 1.5rem 1.4rem;
}

.security-panel h3 {
  margin: 0;
  font-size: clamp(1.6rem, 2vw, 2.3rem);
}

.security-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
}

.security-badges span {
  display: inline-block;
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  background: #edf4ff;
  color: var(--primary-2);
  font-size: 0.8rem;
  font-weight: 700;
}

.contact-info ul,
.check-list,
.sidebar ul,
.approval-list ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-info ul {
  display: grid;
  gap: 0.8rem;
  color: var(--muted);
  margin: 1rem 0 1.3rem;
}

.check-list {
  display: grid;
  gap: 0.8rem;
  color: var(--text);
  font-weight: 600;
  margin-top: 1rem;
}

.check-list li::before {
  content: "✓";
  color: var(--success);
  margin-right: 8px;
}

.page-shell {
  min-height: 80vh;
}

.dashboard-shell,
.admin-shell,
.student-portal {
  display: grid;
  gap: 24px;
}

.dashboard-shell {
  grid-template-columns: 240px 1fr;
}

.sidebar {
  align-self: start;
}

.sidebar ul {
  display: grid;
  gap: 10px;
  margin-top: 1rem;
}

.sidebar li {
  padding: 0.7rem 0.8rem;
  border-radius: 12px;
  background: #f5f8ff;
}

.sidebar li.active {
  background: var(--primary);
}

.sidebar a {
  color: var(--text);
  font-weight: 600;
}

.sidebar li.active a {
  color: white;
}

.table-panel {
  padding: 1.3rem;
}

.student-search-panel {
  margin-bottom: 0;
}

.grid-two {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.student-result {
  margin-top: 1rem;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.result-grid {
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.result-item {
  background: #f5f8ff;
  border-radius: 18px;
  padding: 1rem;
  border: 1px solid var(--line);
}

.result-item span {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.result-item strong {
  display: block;
  margin-top: 0.5rem;
  font-size: 1.2rem;
}

.approval-list ul {
  display: grid;
  gap: 12px;
  margin-top: 1rem;
}

.approval-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 0.8rem 0.9rem;
}

.approval-list li strong,
.approval-list li span {
  display: block;
}

.approval-list button {
  border: 0;
  background: #e7f7ee;
  color: var(--success);
  border-radius: 10px;
  padding: 0.55rem 0.8rem;
  font-weight: 700;
  cursor: pointer;
}

.admin-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.admin-contact {
  padding: 1rem;
}

.hidden {
  display: none;
}

.site-footer {
  padding: 1.3rem 0 2rem;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  border-top: 1px solid var(--line);
  padding-top: 1rem;
}

@media (max-width: 980px) {
  .hero-grid,
  .dashboard-layout,
  .dashboard-shell,
  .leave-grid,
  .contact-grid,
  .leave-page-grid,
  .admin-grid,
  .feature-grid,
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .dashboard-shell {
    grid-template-columns: 1fr;
  }

  .result-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .security-panel {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 760px) {
  .nav-wrap {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.9rem 0;
  }

  .main-nav {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-grid,
  .feature-grid,
  .stats-grid,
  .leave-grid,
  .contact-grid,
  .leave-page-grid,
  .admin-grid,
  .result-grid,
  .grid-two,
  .security-badges {
    grid-template-columns: 1fr;
    display: grid;
  }

  .hero-points,
  .mini-grid {
    grid-template-columns: 1fr;
  }

  .table-wrap {
    overflow-x: auto;
  }

  table {
    min-width: 680px;
  }

  .auth-footer-links,
  .admin-card-header,
  .result-header,
  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}
