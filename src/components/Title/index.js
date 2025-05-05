import './index.css';

export function Title({ level, children, className, ...props }) {
  const Tag = `h${level}`;

  return (
    <Tag className={`title title-${level} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
