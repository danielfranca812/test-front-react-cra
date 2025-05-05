import './index.css';

export function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  ...props
}) {
  return (
    <div className="select-group">
      {label && <label htmlFor={name}>{label}</label>}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'select error' : 'select'}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
