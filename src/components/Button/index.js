import ReactLoading from "react-loading";
import "./index.css";

export function Buttons({ type, disabled, loading, text }) {
  return (
    <button className="btn" type={type} disabled={disabled}>
      {loading ? (
        <ReactLoading
          className="react-loading"
          type="spin"
          color="#ffffff"
          delay={0}
        />
      ) : (
        <>{text}</>
      )}
    </button>
  );
}
