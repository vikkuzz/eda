import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// import LayoutPage from "@/components/LayoutPage";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Работа курьером Яндекса",
  description:
    "Отправь заявку на работу в Яндекс-еду с этой страницы, и мы будем платить тебе премию!",
  keywords: ["курьер Яндекс", "Яндекс еда", "работа Яндекс", "стать курьером"],
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    yandex: "6b2e4a0d7bf6c1e0",
  },
  openGraph: {
    images: [
      {
        url: "https://www.yandex-together.ru/orig.jfif",
        width: 800,
        height: 600,
      },
    ],
    url: "https://www.yandex-together.ru/",
    title: "Работа курьером Яндекса",
    description:
      "Отправь заявку на работу в Яндекс-еду с этой страницы, и мы будем платить тебе премию!",
    site_name: "Вместе с Яндексом",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="metrika-counter" defer strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(100297263, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`}
        </Script>
        <AntdRegistry>
          {/* <LayoutPage> */}
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
          {/* </LayoutPage> */}
        </AntdRegistry>
      </body>
    </html>
  );
}
