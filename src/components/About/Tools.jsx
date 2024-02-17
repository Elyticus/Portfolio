/* eslint-disable react/prop-types */
export default function Tool(props) {
  return (
    <div className="tool-logo">
      {props.id === props.id && (
        <div className="tools-wrapper">
          <img className="toolkit-icon" src={props.image} alt={props.title} />
          <p className="toolkit-name">{props.name}</p>
        </div>
      )}
    </div>
  );
}
