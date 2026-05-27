import { PageIntro } from '@/components/PageIntro';

const contactCards = [
  {
    title: 'Demostraciones comerciales',
    body: 'Agenda una presentacion para revisar el enfoque de FactuX, el panel y la ruta de implementacion.',
  },
  {
    title: 'Consultas institucionales',
    body: 'Si buscas alianzas, integraciones o una propuesta para tu operacion, este canal debe verse serio y claro.',
  },
  {
    title: 'Soporte previo a la compra',
    body: 'Resuelve dudas sobre alcance, estructura de planes y mejores practicas para emisores.',
  },
];

export const metadata = {
  title: 'Contacto',
};

export default function ContactPage() {
  return (
    <div className="container-shell section-space">
      <PageIntro
        eyebrow="Contacto"
        title="Una pagina de contacto simple, limpia y lista para captar oportunidades reales."
        description="Por ahora queda lista para integrarse con tu canal comercial preferido: formulario, WhatsApp, correo o CRM."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="card-surface p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-ink">Canales sugeridos</h2>
          <div className="mt-6 space-y-4">
            {contactCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-ink/10 bg-white p-5">
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card-surface p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-ink">Hablemos</h2>
          <form className="mt-6 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Nombre</span>
              <input
                type="text"
                placeholder="Tu nombre"
                className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-aqua"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Correo</span>
              <input
                type="email"
                placeholder="tu@empresa.com"
                className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-aqua"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Empresa</span>
              <input
                type="text"
                placeholder="Nombre de tu negocio"
                className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-aqua"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Mensaje</span>
              <textarea
                placeholder="Cuéntanos que necesitas"
                rows={5}
                className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-aqua"
              />
            </label>
            <button type="submit" className="button-primary w-full sm:w-fit">
              Enviar solicitud
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
