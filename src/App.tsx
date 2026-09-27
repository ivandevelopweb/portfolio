import type { FormEvent, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ArrowUpRightIcon } from "./components/Icons";
import {
  ContactSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
} from "./components/WorkSections";
import { content, type Locale, routes } from "./content";

const sectionIds = ["projects", "services", "about", "contact"];

function localeFromPath(): Locale {
  if (window.location.pathname.startsWith("/ua")) return "ua";
  if (window.location.pathname.startsWith("/rus")) return "rus";
  return "eng";
}

export function App() {
  const [locale, setLocale] = useState<Locale>(localeFromPath);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formStatus, setFormStatus] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });
  const [sending, setSending] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const page = content[locale];

  const navigate = (nextLocale: Locale, replace = false) => {
    localStorage.setItem("ivan-language", nextLocale);
    window.history[replace ? "replaceState" : "pushState"](
      {},
      "",
      routes[nextLocale],
    );
    setLocale(nextLocale);
    setLanguageOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    const saved = localStorage.getItem("ivan-language") as Locale | null;
    const browser = (navigator.languages?.[0] || navigator.language || "en")
      .slice(0, 2)
      .toLowerCase();
    const preferred = saved || browser;

    if (
      window.location.pathname === "/" &&
      ["ua", "uk", "rus", "ru"].includes(preferred)
    ) {
      navigate(preferred === "ua" || preferred === "uk" ? "ua" : "rus", true);
    }

    const onPopState = () => setLocale(localeFromPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      locale === "eng" ? "en" : locale === "ua" ? "uk" : "ru";
    document.title = page.documentTitle;

    const metadata: Array<[string, string, string]> = [
      ['meta[name="description"]', "content", page.description],
      ['meta[property="og:title"]', "content", page.documentTitle],
      ['meta[property="og:description"]', "content", page.description],
      ['meta[name="twitter:title"]', "content", page.documentTitle],
      ['meta[name="twitter:description"]', "content", page.description],
    ];
    metadata.forEach(([selector, attribute, value]) => {
      document.querySelector(selector)?.setAttribute(attribute, value);
    });
  }, [locale, page]);

  useEffect(() => {
    const updateActiveSection = () => {
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      let current = "home";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 140) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useEffect(() => {
    const closeOutside = (event: globalThis.MouseEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const handleLocaleLink = (
    event: MouseEvent<HTMLAnchorElement>,
    nextLocale: Locale,
  ) => {
    event.preventDefault();
    navigate(nextLocale);
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (
      !String(data.name || "").trim() ||
      !String(data.telegram || "").trim() ||
      !String(data.message || "").trim()
    ) {
      setFormStatus({ text: page.messages[0], type: "error" });
      return;
    }

    setSending(true);
    setFormStatus({ text: "", type: "" });
    try {
      const response = await fetch("/.netlify/functions/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed request");
      form.reset();
      setFormStatus({ text: page.messages[2], type: "success" });
    } catch {
      setFormStatus({ text: page.messages[3], type: "error" });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <a className="skip-link" href="#home">
        {page.ui.skipToContent}
      </a>
      <div className="background-grid" aria-hidden="true" />
      <Header
        activeSection={activeSection}
        content={page}
        languageOpen={languageOpen}
        locale={locale}
        menuOpen={menuOpen}
        onAnchorClick={() => setMenuOpen(false)}
        onLanguageChange={handleLocaleLink}
        onToggleLanguage={() => setLanguageOpen((value) => !value)}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        languageRef={languageRef}
      />
      <main id="main-content">
        <Hero content={page} />
        <ProjectsSection content={page} />
        <ServicesSection content={page} />
        <ProcessSection content={page} />
        <AboutSection content={page} />
        <ContactSection
          content={page}
          sending={sending}
          status={formStatus}
          onSubmit={submitForm}
        />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#home">
            Ivan<span aria-hidden="true">.</span>
          </a>
          <span className="footer-role">{page.footerRole}</span>
          <a className="footer-email" href="mailto:vandevweb@gmail.com">
            {page.footerEmail} <ArrowUpRightIcon />
          </a>
          <span className="footer-copyright">
            © {new Date().getFullYear()} Ivan
          </span>
        </div>
      </footer>
    </>
  );
}
