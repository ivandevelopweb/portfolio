import type { MouseEvent } from "react";
import type { Locale, SiteContent } from "../content";
import { labels, routes } from "../content";

const navTargets = ["projects", "services", "about", "contact"];
const localeOrder: Record<Locale, Locale[]> = {
  eng: ["eng", "ua", "rus"],
  ua: ["ua", "eng", "rus"],
  rus: ["rus", "eng", "ua"],
};

type HeaderProps = {
  activeSection: string;
  content: SiteContent;
  languageOpen: boolean;
  locale: Locale;
  menuOpen: boolean;
  onAnchorClick: () => void;
  onLanguageChange: (
    event: MouseEvent<HTMLAnchorElement>,
    locale: Locale,
  ) => void;
  onToggleLanguage: () => void;
  onToggleMenu: () => void;
  languageRef: React.RefObject<HTMLDivElement | null>;
};

export function Header({
  activeSection,
  content,
  languageOpen,
  locale,
  menuOpen,
  onAnchorClick,
  onLanguageChange,
  onToggleLanguage,
  onToggleMenu,
  languageRef,
}: HeaderProps) {
  return (
    <header className={"site-header" + (menuOpen ? " is-menu-open" : "")}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={onAnchorClick}>
          Iv<span>an</span>
        </a>

        <nav
          className={"primary-navigation" + (menuOpen ? " is-open" : "")}
          aria-label={content.ui.navigation}
        >
          <ul className="nav-menu" id="site-navigation">
            {content.nav.map((name, index) => {
              const target = navTargets[index];
              return (
                <li key={target}>
                  <a
                    href={"#" + target}
                    className={
                      "nav-link" +
                      (activeSection === target ? " is-active" : "") +
                      (index === 3 ? " nav-contact" : "")
                    }
                    aria-current={
                      activeSection === target ? "location" : undefined
                    }
                    onClick={onAnchorClick}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <div
            className={"language-switcher" + (languageOpen ? " is-open" : "")}
            ref={languageRef}
          >
            <button
              className="language-trigger"
              type="button"
              aria-label={content.ui.language}
              aria-expanded={languageOpen}
              aria-controls="language-options"
              onClick={onToggleLanguage}
            >
              <span>{labels[locale]}</span>
              <svg aria-hidden="true" viewBox="0 0 12 8" width="12" height="8">
                <path
                  d="m1 1 5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div id="language-options" className="language-menu">
              {localeOrder[locale].map((item) => (
                <a
                  key={item}
                  className="language-option"
                  href={routes[item]}
                  aria-current={item === locale ? "page" : undefined}
                  onClick={(event) => onLanguageChange(event, item)}
                >
                  {labels[item]}
                </a>
              ))}
            </div>
          </div>

          <button
            className={"menu-toggle" + (menuOpen ? " is-open" : "")}
            type="button"
            aria-label={menuOpen ? content.ui.closeMenu : content.ui.openMenu}
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
