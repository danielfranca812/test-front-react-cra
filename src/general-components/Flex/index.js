import "./index.css";

export function Flex({
  children,
  direction = "row",
  align = "stretch",
  justify = "flex-start",
  gap = "1rem",
  wrap = "nowrap",
  className = "",
  ...props
}) {
  return (
    <div
      className={`flex-container ${className}`}
      style={{
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap,
        flexWrap: wrap,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
