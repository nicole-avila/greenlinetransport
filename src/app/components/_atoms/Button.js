import "./Button.css";
export default function Button({ type, text, disabled }) {
  return (
    <button className="button" type={type} disabled={disabled}>
      {text}
    </button>
  );
}
