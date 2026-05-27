import { LegalPage } from '@/components/LegalPage';

export const metadata = {
  title: 'Terminos y condiciones',
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terminos y condiciones"
      intro="Base inicial para tus terminos del sitio. La version definitiva debe cerrarse con las condiciones comerciales y legales de FactuX."
      sections={[
        {
          title: '1. Alcance del sitio',
          body: 'Este sitio presenta informacion comercial e institucional sobre FactuX. Su contenido no sustituye propuestas, contratos ni acuerdos particulares.',
        },
        {
          title: '2. Uso permitido',
          body: 'El usuario se compromete a utilizar el sitio de forma licita, sin afectar su seguridad, disponibilidad o integridad.',
        },
        {
          title: '3. Propiedad intelectual',
          body: 'La marca, diseno, textos y elementos visuales del sitio pertenecen a FactuX o a sus respectivos titulares, salvo indicacion distinta.',
        },
      ]}
    />
  );
}
