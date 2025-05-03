import { useEffect } from "react";
import "./index.css";

export function Toast({ type, onClose, message }) {
  useEffect(() => {
    const time = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(time);
  }, [onClose]);

  return <div className={`toast ${type}`}>{message}</div>;
}
