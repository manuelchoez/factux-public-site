const items = [
  {
    question: 'A quien va dirigido FactuX?',
    answer:
      'A emisores, profesionales independientes y pequenas empresas que necesitan una operacion administrativa mas ordenada y una imagen comercial mas seria.',
  },
  {
    question: 'El sitio publico puede crecer a futuro?',
    answer:
      'Si. La base permite agregar formularios reales, blog, analitica, integraciones comerciales y contenido institucional sin rehacer la estructura.',
  },
  {
    question: 'Se puede conectar con el sistema privado?',
    answer:
      'Si. Este sitio esta separado del backoffice, pero puede enlazarse facilmente a login, demos, funnels o automatizaciones comerciales.',
  },
];

export function FaqPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="max-w-xl">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Respuestas claras antes de la llamada comercial.</h2>
        <p className="mt-5 text-lg leading-8 text-slate">
          Una buena seccion de preguntas frecuentes evita friccion, aclara expectativas y refuerza la percepcion de orden.
        </p>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <article key={item.question} className="card-surface p-6">
            <h3 className="text-xl font-semibold text-ink">{item.question}</h3>
            <p className="mt-3 text-sm leading-7 text-slate">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
