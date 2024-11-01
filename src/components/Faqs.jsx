import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Apakah Media Biro Jasa legal?',
      answer:
        'Media Biro Jasa adalah sebuah perusahaan jasa pengurusan surat-surat kendaraan berbadan hukum resmi yang bergerak dengan sesuai dengan peraturan yang berlaku.',
    },
    {
      question: 'Wilayah mana saja yang dapat ditangani oleh Media Biro Jasa?',
      answer:
        'Media Biro Jasa melayani pengurusan surat-surat kendaraan bermotor di seluruh Indonesia.',
    },
  ],
  [
    {
      question: 'Berapa biaya jasa untuk mengurus surat-surat kendaraan?',
      answer:
        'Biaya jasa kami berbeda-beda tergantung jenis pelayanan yang Anda butuhkan. Silahkan hubungi kami untuk estimasi biaya.',
    },
  ],
  [
    {
      question: 'Berapa lama durasi pengurusan surat-surat kendaraan?',
      answer:
        'Durasi pengurusan surat-surat kendaraan bermotor berbeda-beda tergantung jenis pelayanan yang Anda butuhkan. Silahkan hubungi kami untuk estimasi durasi.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Berikut adalah beberapa pertanyaan yang sering diajukan oleh klien
            kami.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-md text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
