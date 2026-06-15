const STORAGE_KEY = "hanok-guide-theme";
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const backdrop = document.querySelector(".sidebar-backdrop");
const navLinks = [...document.querySelectorAll(".sidebar-nav a")];
const sections = [...document.querySelectorAll(".doc-section")];

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
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
});

function setSidebar(open) {
  document.body.classList.toggle("sidebar-open", open);
  if (backdrop) backdrop.hidden = !open;
}

menuToggle?.addEventListener("click", () => {
  setSidebar(!document.body.classList.contains("sidebar-open"));
});

backdrop?.addEventListener("click", () => setSidebar(false));

navLinks.forEach((link) => {
  link.addEventListener("click", () => setSidebar(false));
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    const id = visible.target.id;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  },
  {
    rootMargin: "-22% 0px -62% 0px",
    threshold: [0.1, 0.25, 0.5, 0.75],
  }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setSidebar(false);
});
