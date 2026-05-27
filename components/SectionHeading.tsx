type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate">{description}</p>
    </div>
  );
}
