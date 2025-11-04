/* eslint-disable react/prop-types */
export default function Projects({
  image,
  title,
  description,
  code,
  codeLinks,
  live,
  liveLinks,
}) {
  return (
    <div className="project-wrapper">
      <div className="project">
        <img className="project-image" src={image} alt={title} />
        <p className="project-title">{title}</p>
        <p className="project-description">{description}</p>
        <div className="anchor-links">
          <a
            rel="noreferrer"
            target="_blank"
            className="project-links"
            href={codeLinks}
          >
            {code}
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="project-links"
            href={liveLinks}
          >
            {live}
          </a>
        </div>
      </div>
    </div>
  );
}
