// import { Navigation } from "@shared/ui";
import { Navigation } from '@shared/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Loading...',
  },
  description: 'The description from RootLayout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ width: '100%' }}>
          <Navigation />
        </header>
        <div
          id="container"
          style={{ display: 'flex', height: '100%', flexFlow: 'column nowrap' }}
        >
          {/*  children: page component */}
          {children}
        </div>
      </body>
    </html>
  );
}
