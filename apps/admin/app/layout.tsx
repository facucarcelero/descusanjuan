import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './styles.css';

export const metadata: Metadata = {
  title: 'Descu San Juan · Administración',
  description: 'Consola administrativa de Descu San Juan.',
};

type RootLayoutProperties = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProperties): ReactNode {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
