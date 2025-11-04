import toolkitData from "../../../toolkit-data";
import Tool from "./Tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";

export default function About() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const tools = useMemo(
    () => toolkitData.map((tool) => <Tool key={tool.id} {...tool} />),
    []
  );

  function handleIconClick() {
    setIsInfoVisible((prev) => !prev);
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
        <h1>
          My Toolkit 💻{" "}
          <span className="toolkit-info">
            {isInfoVisible && (
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
