import { FaqPreview } from '@/components/FaqPreview';
import { PageIntro } from '@/components/PageIntro';
import { useDocumentMeta } from '@/src/hooks/useDocumentMeta';

export function FaqPage() {
  useDocumentMeta('FAQ');

  return (
    <div className="container-shell section-space">
      <PageIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes con tono claro, sobrio y comercialmente util."
        description="Esta seccion reduce friccion antes de una conversacion comercial o una demostracion."
      />
      <div className="mt-10">
        <FaqPreview />
      </div>
    </div>
  );
}
