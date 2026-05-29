import { useEffect } from 'react';

const defaultTitle = 'FactuX | Facturacion inteligente para emisores en Ecuador';

export function useDocumentMeta(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | FactuX` : defaultTitle;
  }, [title]);
}
