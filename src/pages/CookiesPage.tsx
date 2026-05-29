import { LegalPage } from '@/components/LegalPage';
import { useDocumentMeta } from '@/src/hooks/useDocumentMeta';

export function CookiesPage() {
  useDocumentMeta('Politica de cookies');

  return (
    <LegalPage
      eyebrow="Legal"
      title="Politica de cookies"
      intro="Base lista para personalizar segun las herramientas reales de analitica, seguimiento y preferencias que termines usando."
      sections={[
        {
          title: '1. Que son las cookies',
          body: 'Las cookies son pequenos archivos que ayudan a reconocer visitas, recordar preferencias y medir el uso del sitio.',
        },
        {
          title: '2. Finalidades',
          body: 'FactuX puede usar cookies para funcionamiento basico del sitio, analitica de uso y mejora de la experiencia digital.',
        },
        {
          title: '3. Control del usuario',
          body: 'El usuario puede administrar o deshabilitar cookies desde la configuracion de su navegador, con el entendimiento de que algunas funciones podrian verse limitadas.',
        },
      ]}
    />
  );
}
