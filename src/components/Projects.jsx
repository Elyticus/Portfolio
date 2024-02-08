/* eslint-disable react/prop-types */
export default function Projects(props) {
  return (
    <div>
      {props.id === props.id && (
        <div className="project">
          <img className="project-image" src={props.image} alt={props.title} />
          <p className="project-title">{props.title}</p>
          <p className="project-description">{props.description}</p>
          <div className="anchor-links">
            <a
              rel="noreferrer"
              target="_blank"
              className="project-links"
              href={props.codeLinks}
            >
              {props.code}
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="project-links"
              href={props.liveLinks}
            >
              {props.live}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
