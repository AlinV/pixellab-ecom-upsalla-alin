'use-client';

import { Work_Sans } from 'next/font/google';
import './globals.css';
import { css } from '@emotion/css';
import { Footer, Header } from '@/components/component/server';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Pixellab Ecom Upsalla',
  description: 'Our first ecommerce app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <div className="layout-grid">
          <header className="header">
            <Header></Header>
          </header>

          <div className="main-area h-full">
            <main className="content h-full min-h-80 mb-24">{children}</main>

            <footer className="footer">
              <Footer></Footer>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
