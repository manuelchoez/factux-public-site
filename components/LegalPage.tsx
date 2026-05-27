type LegalSection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <div className="container-shell section-space">
      <div className="max-w-4xl">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 text-4xl font-semibold text-ink md:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate">{intro}</p>
      </div>
      <div className="mt-10 space-y-5">
        {sections.map((section) => (
          <section key={section.title} className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
