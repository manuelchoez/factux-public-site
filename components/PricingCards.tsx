const plans = [
  {
    name: 'Essential',
    price: '$29',
    description: 'Para profesionales y operaciones pequenas que necesitan una base sobria y ordenada.',
    features: ['Panel de administracion claro', 'Gestion de emisor y catalogo', 'Base lista para crecer'],
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Para negocios que necesitan mas estructura, roles y una experiencia operativa mejor dirigida.',
    features: ['Usuarios y roles', 'Control mas amplio del negocio', 'Base comercial mas robusta'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'A medida',
    description: 'Para implementaciones con integraciones, automatizacion y una capa institucional mas fuerte.',
    features: ['Acompanamiento consultivo', 'Prioridad en integraciones', 'Ruta de escalamiento'],
  },
];

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={`card-surface p-8 ${plan.featured ? 'relative border-gold/40 bg-ink text-white' : ''}`}
        >
          {plan.featured ? (
            <div className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Recomendado
            </div>
          ) : null}
          <div className={`text-sm uppercase tracking-[0.24em] ${plan.featured ? 'text-white/60' : 'text-slate'}`}>
            {plan.name}
          </div>
          <div className="mt-5 text-4xl font-semibold">{plan.price}</div>
          <p className={`mt-4 text-sm leading-7 ${plan.featured ? 'text-white/80' : 'text-slate'}`}>
            {plan.description}
          </p>
          <div className="mt-8 space-y-3">
            {plan.features.map((feature) => (
              <div
                key={feature}
                className={`rounded-2xl px-4 py-3 text-sm ${plan.featured ? 'bg-white/8 text-white' : 'bg-[#f4f7fb] text-slate'}`}
              >
                {feature}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
