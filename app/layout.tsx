import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kush Casino официальный сайт — игра онлайн и рабочее зеркало',
  description: 'Kush Casino официальный сайт: понятный гид по входу, зеркалу и игре онлайн. Узнайте, как проверить адрес, выбрать формат и комфортно пользоваться сервисом с телефона.',
  generator: 'v0.app',
  alternates: { canonical: 'https://kush6casino.vercel.app/' },
  icons: { icon: '/kush-casino-favicon.png', apple: '/kush-casino-favicon.png' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#11100e', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className="bg-background"><head><link rel="canonical" href="https://kush6casino.vercel.app/" /></head><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

