import toolkitData from "../../toolkit-data";
import Tool from "./Tools";

export default function About() {
  const tools = toolkitData.map((tool) => {
    return <Tool key={tool.id} {...tool} />;
  });

  return (
    <div className="container-about slider-thumb-about">
      <div className="about">
        <div className="image-about-section"></div>
        <div className="about-text-section">
          <h1>About Me 👨🏻‍💻</h1>
          <p>
            Hello again! Thank you for scrolling this far. I recently graduated{" "}
            <span className="green-text">
              Scrimba Front End Developer Career Path
            </span>
            .
          </p>

          <p>
            I am a self-taught learner with a passion for pushing the boundaries
            of the web. Digital art captivates me, and I aspire to excel in web
            development, striving for excellence.
          </p>
        </div>
      </div>
      <div className="toolkit">
        <h1>My Toolkit 💻</h1>
        <div className="tools-container">{tools}</div>
      </div>
    </div>
  );
}
