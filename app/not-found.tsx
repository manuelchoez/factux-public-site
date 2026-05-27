import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-shell section-space">
      <div className="card-surface max-w-3xl p-10">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 text-4xl font-semibold text-ink md:text-5xl">
          Esta pagina no existe.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">
          El enlace que intentaste abrir no esta disponible. Puedes volver al inicio
          o continuar con las secciones principales del sitio.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="button-primary">
            Ir al inicio
          </Link>
          <Link href="/contacto" className="button-secondary">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
