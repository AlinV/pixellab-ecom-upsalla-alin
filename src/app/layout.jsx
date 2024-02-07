'use-client';

import { Work_Sans } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components/component/server';
import { CartContext, UiContext } from '@/contexts';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Pixellab Ecom Upsalla',
  description: 'Our first ecommerce app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <UiContext>
          <CartContext>
            <div className="layout-grid">
              <header className="header relative z-10">
                <Header></Header>
              </header>

              <div className="main-area h-full">
                <main className="content h-full min-h-80 mb-40">
                  {children}
                </main>

                <footer className="footer">
                  <Footer></Footer>
                </footer>
              </div>
            </div>
          </CartContext>
        </UiContext>
      </body>
    </html>
  );
}
