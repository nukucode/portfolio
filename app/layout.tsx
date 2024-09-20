import localFont from "next/font/local";
import "./globals.css";
import Transition from '../components/Transition';


//👇 Configure our local font object
const ottercoFont = localFont({
  src: [
    {
      path: "../public/fonts/otterco_fonts/Otterco-Light.otf",
      weight: '100'
    },
    {
      path: "../public/fonts/otterco_fonts/Otterco-Regular.otf",
      weight: '400'
    },
    {
      path: "../public/fonts/otterco_fonts/OttercoDisplay-Medium.otf",
      weight: '500'
    },
    {
      path: "../public/fonts/otterco_fonts/OttercoDisplay-SemiBold.otf",
      weight: '600'
    }

  ],
  variable: '--font-otterco'
})

export const metadata = {
  title: 'Ankit Yadav: Software Developer',
  description: 'Hi, I Ankit Yadav: Software Developer Fron India',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/favicon/favicon-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ottercoFont.variable}`}>
      <body>
        <Transition>
          {children}
        </Transition>
      </body>
    </html>
  )
}
