import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Media Biro Jasa',
    default: 'Urusan Pajak Kendaraan Seluruh Indonesia',
  },
  description:
    'Media Biro Jasa melayani pengurusan surat-surat kendaraan seperti STNK, BPKB, Pajak Kendaraan, Mutasi, KIR, BBN, dan lainnya ke Seluruh Wilayah Indonesia',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
