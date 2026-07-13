/**
 * The site's signature divider: a thin rule with a sugar-crystal diamond.
 * `tone="sage"` is reserved for garden/outdoor sections.
 */
export default function SugarLine({
  tone = "caramel",
  className = "",
}: {
  tone?: "caramel" | "sage";
  className?: string;
}) {
  return (
    <div role="presentation" className={`sugar-line ${className}`}>
      <span className={`crystal ${tone === "sage" ? "crystal--sage" : ""}`} />
    </div>
  );
}
