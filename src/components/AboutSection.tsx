import type { SiteContent } from "../content";
import profileImage from "../../profile.png";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
];

export function AboutSection({ content }: { content: SiteContent }) {
  return (
    <section
      id="about"
      className="about section"
      data-nav-section
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <figure className="about-portrait">
          <img
            src={profileImage}
            alt={content.aboutRole}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{content.aboutLocation}</figcaption>
        </figure>

        <div className="about-copy">
          <p className="about-role">{content.aboutRole}</p>
          <h2 id="about-title">{content.aboutTitle}</h2>
          <p className="about-description">{content.about}</p>

          <div className="technology-list">
            <h3>{content.techTitle}</h3>
            <p>{technologies.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
