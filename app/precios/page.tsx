import { PageIntro } from '@/components/PageIntro';
import { PricingCards } from '@/components/PricingCards';

export const metadata = {
  title: 'Precios',
};

export default function PricingPage() {
  return (
    <div className="container-shell section-space">
      <PageIntro
        eyebrow="Precios"
        title="Planes con presentacion ejecutiva y un lenguaje comercial claro."
        description="La pagina de precios esta pensada para comunicar valor sin caer en promociones agresivas ni tablas confusas."
      />
      <div className="mt-10">
        <PricingCards />
      </div>
    </div>
  );
}
