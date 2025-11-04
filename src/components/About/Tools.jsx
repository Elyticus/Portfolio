/* eslint-disable react/prop-types */
export default function Tool({ image, title, name }) {
  return (
    <div className="tool-logo">
      <div className="tools-wrapper">
        <img className="toolkit-icon" src={image} alt={title} />
        <p className="toolkit-name">{name}</p>
      </div>
    </div>
  );
}
