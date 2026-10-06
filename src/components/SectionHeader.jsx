export default function SectionHeader({ title, subtitle, id, children }) {
  return <div className="section-heading">
    <div><h2 id={id}>{title}</h2><p>{subtitle}</p></div>
    {children}
  </div>;
}
