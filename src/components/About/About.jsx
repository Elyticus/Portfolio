import toolkitData from "../../../toolkit-data";
import Tool from "./Tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function About() {
  const [setIcon, isSetIcon] = useState(false);

  const tools = toolkitData.map((tool) => {
    return <Tool key={tool.id} {...tool} />;
  });

  function handleIconClick() {
    isSetIcon(!setIcon);
  }

  return (
    <div className="container-about slider-thumb-about">
      <div className="about">
        <div className="image-about-section"></div>
        <div className="about-text-section">
          <h1>About Me 👨🏻‍💻</h1>
          <p>
            Hello again! Thank you for scrolling this far. I graduated{" "}
            <span className="green-text">IT School </span>
            and completed the{" "}
            <span className="green-text">
              Scrimba Front End Developer Career Path
            </span>
            .
          </p>

          <p>
            I am a self-taught learner with a passion for pushing the boundaries
            of the web. Digital art captivates me, and I aspire to excel in web
            development and find{" "}
            <span className="green-text">the soft spot of technology</span>.
          </p>
        </div>
      </div>
      <div className="toolkit">
        <h1 className="">
          My Toolkit 💻{" "}
          <span className="toolkit-info">
            {setIcon && (
              <span className="info-text">
                <span className="info-message">
                  <span className="subinfo-icon">
                    <FontAwesomeIcon
                      className="circle-info-inside"
                      icon={faCircleInfo}
                    />
                  </span>
                  Your company uses a different stack? No worries! I love to
                  learn.
                  <span>
                    <FontAwesomeIcon
                      onClick={handleIconClick}
                      className="close-btn"
                      icon={faCircleXmark}
                    />
                  </span>
                </span>
              </span>
            )}
            <FontAwesomeIcon
              style={{ color: "#01ffb7" }}
              className="circle-info"
              icon={faCircleInfo}
              onClick={handleIconClick}
            />
          </span>
        </h1>
        <div className="tools-container">{tools}</div>
      </div>
    </div>
  );
}
