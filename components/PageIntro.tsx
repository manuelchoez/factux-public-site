import Link from 'next/link';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta?: {
    href: string;
    label: string;
  };
};

export function PageIntro({ eyebrow, title, description, cta }: PageIntroProps) {
  return (
    <div className="max-w-4xl">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-5 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-base leading-7 text-slate sm:text-lg sm:leading-8">{description}</p>
      {cta ? (
        <div className="mt-8">
          <Link href={cta.href} className="button-primary w-full sm:w-auto">
            {cta.label}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
