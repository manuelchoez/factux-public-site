import { FaqPreview } from '@/components/FaqPreview';
import { PageIntro } from '@/components/PageIntro';
import { PricingCards } from '@/components/PricingCards';
import { SectionHeading } from '@/components/SectionHeading';
import { SmartLink } from '@/src/components/SmartLink';
import { useDocumentMeta } from '@/src/hooks/useDocumentMeta';

const metrics = [
  { value: '24/7', label: 'Disponibilidad para operar y revisar tu negocio' },
  { value: '1 panel', label: 'Emisores, productos, clientes y comprobantes en un solo lugar' },
  { value: 'Escalable', label: 'Base lista para crecer con automatizacion y nuevos canales' },
];

const benefits = [
  {
    title: 'Control con criterio empresarial',
    description:
      'FactuX ordena la operacion con una experiencia pensada para emisores que necesitan precision, trazabilidad y velocidad.',
  },
  {
    title: 'Imagen profesional frente a tus clientes',
    description:
      'Cada interaccion comunica seriedad. Tu negocio proyecta confianza desde el primer comprobante emitido.',
  },
  {
    title: 'Preparado para nuevos canales',
    description:
      'La plataforma se presta para integraciones, automatizacion y experiencias conversacionales sin rehacer tu base operativa.',
  },
];

const workflow = [
  'Configura tu emisor y la informacion fiscal clave.',
  'Administra productos, clientes y secuencias desde un panel claro.',
  'Emite con orden, control y una operacion lista para escalar.',
];

export function HomePage() {
  useDocumentMeta();

  return (
    <>
      <section className="container-shell section-space pt-6 sm:pt-10 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
          <div className="space-y-6 sm:space-y-8">
            <span className="eyebrow">Facturacion moderna para emisores en Ecuador</span>
            <div className="space-y-5 sm:space-y-6">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl">
                Un sitio serio para una plataforma que debe inspirar confianza real.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate sm:text-lg sm:leading-8">
                FactuX ayuda a profesionales, firmas y pequenas empresas a operar con una presencia
                mas ejecutiva, una administracion mas clara y una base tecnologica lista para crecer.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <SmartLink href="/contacto" className="button-primary w-full sm:w-auto">
                Solicitar demostracion
              </SmartLink>
              <SmartLink href="/precios" className="button-secondary w-full sm:w-auto">
                Ver planes
              </SmartLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.value} className="card-surface p-5">
                  <div className="text-2xl font-semibold text-ink">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface relative overflow-hidden p-5 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(113,199,192,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(207,164,92,0.18),transparent_28%)]" />
            <div className="relative space-y-5 sm:space-y-6">
              <div className="rounded-[24px] bg-ink p-5 text-white sm:p-6">
                <div className="text-sm uppercase tracking-[0.24em] text-white/60">FactuX Platform</div>
                <div className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                  Una experiencia limpia, sobria y lista para ventas, soporte y crecimiento.
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/70">Operacion ordenada</div>
                    <div className="mt-2 text-lg font-semibold sm:text-xl">Emisores, usuarios y productos</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/70">Direccion comercial</div>
                    <div className="mt-2 text-lg font-semibold sm:text-xl">Sitio publico con tono premium</div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {workflow.map((step, index) => (
                  <div key={step} className="rounded-[22px] border border-ink/10 bg-white p-5">
                    <div className="text-sm font-semibold text-gold">0{index + 1}</div>
                    <p className="mt-3 text-sm leading-6 text-slate">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell section-space pt-8">
        <SectionHeading
          eyebrow="Ventajas clave"
          title="La presencia publica debe vender con claridad y sin verse improvisada."
          description="El sitio se disena para posicionar a FactuX como una solucion confiable, sobria y tecnicamente seria."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="card-surface p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">{benefit.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell section-space">
        <PageIntro
          eyebrow="Planes"
          title="Precios pensados para equipos que valoran orden, criterio y escalabilidad."
          description="Una estructura clara para presentar oferta comercial sin ruido visual y con una narrativa orientada a cierre."
          cta={{ href: '/precios', label: 'Explorar planes' }}
        />
        <div className="mt-10">
          <PricingCards />
        </div>
      </section>

      <section className="container-shell section-space">
        <FaqPreview />
      </section>
    </>
  );
}
