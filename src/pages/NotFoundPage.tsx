import { SmartLink } from '@/src/components/SmartLink';
import { useDocumentMeta } from '@/src/hooks/useDocumentMeta';

export function NotFoundPage() {
  useDocumentMeta('404');

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
          <SmartLink href="/" className="button-primary">
            Ir al inicio
          </SmartLink>
          <SmartLink href="/contacto" className="button-secondary">
            Contacto
          </SmartLink>
        </div>
      </div>
    </div>
  );
}
