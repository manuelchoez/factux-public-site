type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate sm:text-lg sm:leading-8">{description}</p>
    </div>
  );
}
