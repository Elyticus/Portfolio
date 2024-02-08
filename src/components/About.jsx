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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos,
            modi, doloremque sequi ipsam dolor sapiente ullam beatae inventore
            adipisci minus provident quaerat, dicta animi consectetur odit alias
            velit nam!
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
