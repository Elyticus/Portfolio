/* eslint-disable react/prop-types */
export default function Tool(props) {
  return (
    <div className="tool-logo">
      {props.id === props.id && (
        <div>
          <img className="toolkit-icon" src={props.image} alt={props.title} />
        </div>
      )}
    </div>
  );
}
