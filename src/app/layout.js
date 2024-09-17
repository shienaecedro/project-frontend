import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import { Inter } from 'next/font/google'
import BootstrapClient from './/components/BootstrapClient.js';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Development',
  description: 'In development phase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}