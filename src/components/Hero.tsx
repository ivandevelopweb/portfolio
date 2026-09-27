import veloraImage from "../../velora.png";
import type { SiteContent } from "../content";
import { ArrowUpRightIcon } from "./Icons";

export function Hero({ content }: { content: SiteContent }) {
  return (
    <section id="home" className="hero" data-nav-section>
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1>{content.heroTitle}</h1>
          <p className="hero-description">{content.heroDescription}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              {content.projectsCta}
              <ArrowUpRightIcon />
            </a>
            <a href="#contact" className="button button-secondary">
              {content.contactCta}
            </a>
          </div>
          <p className="hero-services">{content.heroServices}</p>
        </div>

        <aside className="hero-preview" aria-label={content.ui.featuredProject}>
          <div className="preview-heading">
            <div>
              <span className="preview-type">{content.heroPreviewType}</span>
              <strong>Velora</strong>
            </div>
            <a
              href="https://velora-shopping.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {content.heroPreviewLink}
              <ArrowUpRightIcon />
            </a>
          </div>
          <a
            className="preview-image-link"
            href="https://velora-shopping.netlify.app/"
            target="_blank"
            rel="noreferrer"
            aria-label={content.ui.projectLink("Velora")}
          >
            <img
              src={veloraImage}
              alt={content.heroPreviewAlt}
              className="preview-image"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </a>
          <div className="preview-caption">
            <span>01</span>
            <span>{content.heroPreviewType}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
