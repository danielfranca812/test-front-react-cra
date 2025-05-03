import "./index.css";

export function Inputs({
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
