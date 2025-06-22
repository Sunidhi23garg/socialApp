import './globals.css';
import Navbar from '@/components/Navbar';
import SessionProvider from '@/components/SessionProvider';

export const metadata = {
  title: 'Buzzgram',
  description: 'A simple social media platform built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-gray-200">
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
