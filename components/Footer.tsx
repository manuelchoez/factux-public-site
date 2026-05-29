import { siteConfig } from '@/lib/siteConfig';
import { SmartLink } from '@/src/components/SmartLink';

const footerGroups = [
  {
    title: 'Sitio',
    links: [
      { href: '/', label: 'Home' },
      { href: '/precios', label: 'Precios' },
      { href: '/sobre-factux', label: 'Sobre FactuX' },
      { href: '/contacto', label: 'Contacto' },
    ],
  },
  {
    title: 'Soporte comercial',
    links: [
      { href: siteConfig.appLoginUrl, label: 'Iniciar sesion' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contacto', label: 'Agenda una demo' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/politica-de-privacidad', label: 'Privacidad' },
      { href: '/terminos', label: 'Terminos' },
      { href: '/cookies', label: 'Cookies' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="container-shell pb-8 pt-6 sm:pb-10 sm:pt-8">
      <div className="card-surface px-5 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <div className="text-sm uppercase tracking-[0.24em] text-slate">FactuX</div>
            <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
              Una presencia publica sobria, confiable y preparada para convertir.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate">
              El objetivo no es solo verse bien. Es comunicar criterio, control y seriedad
              comercial desde el primer scroll.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                  {group.title}
                </h3>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <SmartLink key={link.href} href={link.href} className="text-sm text-slate transition hover:text-ink">
                      {link.label}
                    </SmartLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
