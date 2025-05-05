import "./index.css";

export function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  ...props
}) {
  return (
    <div className="input-group">
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={`input ${error ? "error" : ""}`}
        onChange={onChange}
        {...props}
      />
      {error && <span className="error-mesage">{error}</span>}
    </div>
  );
}
