import projectsData from "../projects-data";
import Projects from "./Projects";

export default function Main() {
  const projects = projectsData.map((project) => {
    return <Projects key={project.id} {...project} />;
  });
  return (
    <main>
      <p className="proj green-text">Things I made:</p>

      <div className="project-section">
        <div className="project-display">{projects}</div>
      </div>
    </main>
  );
}
