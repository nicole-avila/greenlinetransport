import './globals.css';
import Navbar from './components/Navbar/Navbar';
import { Suspense } from 'react';
import Footer from './components/Footer/Footer';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Green Line Transport',
  description:
    'Green Line Transport erbjuder pålitliga och miljövänliga transporttjänster i hela Sverige med fokus på punktlighet och helhetslösningar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script
          src='https://www.google.com/recaptcha/api.js'
          async
          defer
        ></script>
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
