'use-client';
import { Footer, Header } from '@/components/component/server';
import { workSans } from './layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <div className="layout-grid">
          <header className="header">
            <Header></Header>
          </header>

          <div className="main-area">
            <main className="content">{children}</main>

            <footer className="footer">
              <Footer />
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
