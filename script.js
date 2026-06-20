/* ── Theme ── */
const STORAGE_KEY = "hanok-guide-theme";
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");

function preferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  if (themeLabel) themeLabel.textContent = theme === "dark" ? "다크" : "라이트";
}

applyTheme(preferredTheme());
themeToggle?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

/* ── Mobile sidebar ── */
const menuToggle = document.querySelector(".menu-toggle");
const backdrop = document.querySelector(".sidebar-backdrop");
const navLinks = [...document.querySelectorAll(".sidebar-nav a")];

function setSidebar(open) {
  document.body.classList.toggle("sidebar-open", open);
  if (backdrop) backdrop.hidden = !open;
}

menuToggle?.addEventListener("click", () => setSidebar(!document.body.classList.contains("sidebar-open")));
backdrop?.addEventListener("click", () => setSidebar(false));
navLinks.forEach((link) => link.addEventListener("click", () => setSidebar(false)));
window.addEventListener("keydown", (e) => { if (e.key === "Escape") setSidebar(false); });

/* ── Active section highlight (sidebar + TOC) ── */
const tocLinks = [...document.querySelectorAll(".toc a")];
const sections = [...document.querySelectorAll(".doc-section")];

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = visible.target.id;
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
    tocLinks.forEach((a) => a.classList.toggle("toc-active", a.getAttribute("href") === `#${id}`));
  },
  { rootMargin: "-16% 0px -62% 0px", threshold: [0.05, 0.2, 0.4, 0.6] }
);
sections.forEach((s) => observer.observe(s));

/* ── Tabs ── */
document.querySelectorAll(".tab-group").forEach((group) => {
  const btns = [...group.querySelectorAll(".tab-btn")];
  const panels = [...group.querySelectorAll(".tab-panel")];

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => { p.hidden = true; });
      btn.classList.add("active");
      const target = group.querySelector(`#tab-${btn.dataset.panel}`);
      if (target) target.hidden = false;
    });
  });
});

/* ── FAQ: prevent default marker, custom toggle ── */
document.querySelectorAll(".faq-list details summary").forEach((summary) => {
  summary.addEventListener("click", (e) => {
    // native <details> handles toggle, just prevent double-fire
  });
});
