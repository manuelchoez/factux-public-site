import { LegalPage } from '@/components/LegalPage';

export const metadata = {
  title: 'Politica de privacidad',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Politica de privacidad"
      intro="Este documento puede ajustarse con tu texto legal definitivo. Por ahora deja una base profesional, clara y lista para revision juridica."
      sections={[
        {
          title: '1. Informacion recopilada',
          body: 'FactuX puede recopilar datos de contacto, informacion de negocio y datos necesarios para atender solicitudes comerciales, operativas o de soporte.',
        },
        {
          title: '2. Uso de la informacion',
          body: 'La informacion se utiliza para responder consultas, coordinar demostraciones, mejorar la experiencia digital y sostener la relacion comercial con el usuario o empresa interesada.',
        },
        {
          title: '3. Conservacion y seguridad',
          body: 'FactuX adopta medidas razonables para proteger la informacion y limitar el acceso a personal o proveedores autorizados.',
        },
      ]}
    />
  );
}
