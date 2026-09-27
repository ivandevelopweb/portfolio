import type { FormEvent } from "react";
import type { SiteContent } from "../content";

import digitalSprintImage from "../../digitalsprint.png";
import mathCalmImage from "../../mathcalm.png";
import pixelHuntImage from "../../pixelhunt.png";
import veloraImage from "../../velora.png";
import kyivLegalImage from "../../kyiv-legal.png";
import { ArrowUpRightIcon } from "./Icons";

const projects = [
  {
    title: "Velora",
    image: veloraImage,
    url: "https://velora-shopping.netlify.app/",
  },
  {
    title: "Kyiv Legal Group",
    image: kyivLegalImage,
    url: "https://kyiv-legal.netlify.app/",
  },
  {
    title: "Digital Sprint",
    image: digitalSprintImage,
    url: "https://digitalsprint.netlify.app",
  },
  {
    title: "Math Tutor",
    image: mathCalmImage,
    url: "https://mathcalm.netlify.app",
  },
  {
    title: "Pixel Hunt",
    image: pixelHuntImage,
    url: "https://pixelhunting.netlify.app/",
  },
];

export function ProjectsSection({ content }: { content: SiteContent }) {
  return (
    <section
      id="projects"
      className="projects section"
      data-nav-section
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <h2 id="projects-title">{content.projectsTitle}</h2>
            <p>{content.projectsIntro}</p>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project, index) => {
            const projectCopy = content.projects[index];
            return (
              <article
                className={
                  "project-case" + (index % 2 === 1 ? " project-reverse" : "")
                }
                key={project.title}
              >
                <a
                  className="project-image-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={content.ui.projectLink(project.title)}
                >
                  <img
                    src={project.image}
                    alt={project.title + " website preview"}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </a>
                <div className="project-copy">
                  <p className="project-meta">
                    <span>0{index + 1}</span>
                    <span className="project-meta-divider" aria-hidden="true">
                      /
                    </span>
                    <span>{projectCopy.category}</span>
                  </p>
                  <h3>{project.title}</h3>
                  <p className="project-description">
                    {projectCopy.description}
                  </p>
                  <a
                    className="text-link project-action"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content.projectAction}
                    <ArrowUpRightIcon />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ content }: { content: SiteContent }) {
  return (
    <section
      id="services"
      className="services section"
      data-nav-section
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <h2 id="services-title">{content.servicesTitle}</h2>
            <p>{content.servicesIntro}</p>
          </div>
        </div>

        <ol className="service-list">
          {content.services.map((service, index) => (
            <li className="service-row" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ol>

        <a href="#contact" className="text-link section-cta">
          {content.contactCta}
          <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
}

export function ProcessSection({ content }: { content: SiteContent }) {
  return (
    <section
      id="process"
      className="process section"
      aria-labelledby="process-title"
    >
      <div className="container process-layout">
        <div className="process-intro">
          <h2 id="process-title">{content.processTitle}</h2>
          <p>{content.processIntro}</p>
        </div>
        <ol className="process-list">
          {content.processSteps.map((step, index) => (
            <li className="process-step" key={step.title}>
              <span className="process-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

type ContactProps = {
  content: SiteContent;
  sending: boolean;
  status: { text: string; type: "success" | "error" | "" };
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ContactSection({
  content,
  sending,
  status,
  onSubmit,
}: ContactProps) {
  return (
    <section
      id="contact"
      className="contact section"
      data-nav-section
      aria-labelledby="contact-title"
    >
      <div className="container contact-layout">
        <div className="contact-copy">
          <h2 id="contact-title">{content.contactTitle}</h2>
          <p>{content.contactIntro}</p>

          <a
            className="contact-telegram"
            href="https://t.me/ivandevweb"
            target="_blank"
            rel="noreferrer"
          >
            <span>{content.contactTelegram}</span>
            <span className="contact-telegram-handle">
              @ivandevweb <ArrowUpRightIcon />
            </span>
          </a>

          <a className="contact-email" href="mailto:vandevweb@gmail.com">
            vandevweb@gmail.com
          </a>
          <nav className="social-links" aria-label={content.ui.socialLinks}>
            <a
              href="https://github.com/ivandevelopweb"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.instagram.com/ivandevelopweb/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
          </nav>
        </div>

        <div className="contact-form-wrap">
          <h3>{content.formTitle}</h3>
          <p className="form-intro">{content.formIntro}</p>
          <form className="contact-form" onSubmit={onSubmit}>
            <Field
              id="contact-name"
              label={content.formLabels[0]}
              placeholder={content.formPlaceholders[0]}
              name="name"
              autoComplete="name"
            />
            <Field
              id="contact-telegram"
              label={content.formLabels[1]}
              placeholder={content.formPlaceholders[1]}
              name="telegram"
              autoComplete="off"
            />
            <div className="form-field">
              <label htmlFor="contact-message">{content.formLabels[2]}</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={content.formPlaceholders[2]}
                maxLength={3000}
                autoComplete="off"
                required
                aria-describedby="contact-status"
              />
            </div>
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-company">{content.formLabels[3]}</label>
              <input
                id="contact-company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="button button-primary form-submit"
              disabled={sending}
              aria-busy={sending}
            >
              {sending ? content.messages[1] : content.send}
              <ArrowUpRightIcon />
            </button>
            <p
              id="contact-status"
              className="contact-form-status"
              data-status={status.type}
              role={status.type === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              {status.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  name,
  autoComplete,
}: {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  autoComplete: string;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        maxLength={100}
        autoComplete={autoComplete}
        required
        aria-describedby="contact-status"
      />
    </div>
  );
}
