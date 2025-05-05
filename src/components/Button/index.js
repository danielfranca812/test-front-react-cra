import ReactLoading from "react-loading";

import "./index.css";

export function Button({
  loading = null,
  children,
  variant = "primary",
  ...props
}) {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {loading ? (
        <ReactLoading
          className="react-loading"
          width={28}
          height={28}
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
