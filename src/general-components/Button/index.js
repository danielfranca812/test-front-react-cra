import ReactLoading from "react-loading";
import "./index.css";

export function Buttons({
  loading = null,
  children,
  variant = "btn-primary",
  ...props
}) {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {loading ? (
        <ReactLoading
          className="react-loading"
          type="spin"
          color="#ffffff"
          delay={0}
        />
      ) : (
        <>{children}</>
      )}
    </button>
  );
}
