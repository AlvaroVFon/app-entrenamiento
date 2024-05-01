import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hybrid Training App',
  description: 'A hybrid training app for all your fitness needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-dark text-white min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
