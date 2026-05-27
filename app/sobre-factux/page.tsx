import { PageIntro } from '@/components/PageIntro';

const principles = [
  'Disenar tecnologia que proyecte seriedad desde el primer contacto.',
  'Reducir friccion operativa para emisores con necesidades reales de control.',
  'Construir una base lista para integraciones, nuevos canales y crecimiento sostenible.',
];

export const metadata = {
  title: 'Sobre FactuX',
};

export default function AboutPage() {
  return (
    <div className="container-shell section-space">
      <PageIntro
        eyebrow="Sobre FactuX"
        title="FactuX nace para que la operacion administrativa deje de sentirse improvisada."
        description="La marca debe hablar con tono serio, visual sobrio y una promesa clara: ayudar a emitir, ordenar y crecer con mejor criterio operativo."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="card-surface p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-ink">Nuestra direccion</h2>
          <p className="mt-5 text-base leading-8 text-slate">
            FactuX busca posicionarse como una plataforma confiable para profesionales y negocios
            que necesitan una operacion administrativa mas ordenada. La prioridad no es solo emitir,
            sino hacerlo con una experiencia que transmita control, claridad y madurez.
          </p>
          <p className="mt-5 text-base leading-8 text-slate">
            Esta presencia publica responde a esa misma idea: un sitio elegante, sin excesos,
            orientado a conversion y a reputacion comercial.
          </p>
        </section>

        <section className="card-surface p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-ink">Principios</h2>
          <div className="mt-6 space-y-4">
            {principles.map((item, index) => (
              <div key={item} className="rounded-2xl border border-ink/10 bg-white p-5">
                <div className="text-sm font-semibold text-gold">0{index + 1}</div>
                <p className="mt-2 text-sm leading-7 text-slate">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
