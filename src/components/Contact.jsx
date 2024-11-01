import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const alamat = [
  {
    nama: 'Kantor Pusat',
    alamat:
      'Jl. Raya Tajur No.130 C (depan BCA), Pakuan, Bogor Selatan, Kota Bogor, Jawa Barat 16134',
  },
  {
    nama: 'Pandu Raya, Bogor',
    alamat:
      'Jl. Pandu Raya D2 no.4, RT.04/RW.13, Bantarjati, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16121',
  },
  {
    nama: 'Cibubur/Cileungsi',
    alamat:
      'Perumahan Griya Kenari Mas (dekat Bank BJB/BRI) Blok A3 No. 18, Bogor, Jawa Barat 16820',
  },
  {
    nama: 'Cinere, Depok',
    alamat:
      'Jl. Cinere Raya GG. Sengon No.7A, RT.001/RW.008, Cinere, Kec. Cinere, Kota Depok, Jawa Barat 16514',
  },
  {
    nama: 'Bandar Lampung 1',
    alamat:
      'Jl. Yasir Hadi Broto, Tj. Gading, Kec. Tanjungkarang Timur, Kota Bandar Lampung, Lampung 35227',
  },
  {
    nama: 'Bandar Lampung 2',
    alamat:
      'Jl. Jendral Suprapto Gg. Bintara II No. 41, Tj. Karang, Lampung, 35127',
  },
]

const kontak = [
  {
    nama: 'Telepon',
    nomor: '(0251) 8315015',
  },
  {
    nama: 'WhatsApp',
    nomor: '+6287770008879',
  },
]

export function Contact() {
  return (
    <section
      id="kontak"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mb-16 mx-auto max-w-2xl lg:mx-0" >
          <h2
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Kontak
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Informasi mengenai kontak
          </p>
        </div>
        <div className="flex max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:flex-row flex-col justify-between gap-16">
          <div className="w-full">
            <div className="grid grid-cols-2 gap-8">
              {alamat.map((item, index) => (
                <div key={index}>
                  <h2 className="mb-4 font-semibold text-slate-900">
                    {item.nama}
                  </h2>
                  <p className="text-slate-700">{item.alamat}</p>
                </div>
              ))}
            </div>
            <hr className="my-16" />
            <div className="grid grid-cols-2 gap-8">
              {kontak.map((item, index) => (
                <div key={index}>
                  <h2 className="mb-4 font-semibold text-slate-900">
                    {item.nama}
                  </h2>
                  <p className="text-slate-700">{item.nomor}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[641px] rounded-xl overflow-hidden">
            <div className="h-full w-full bg-slate-600"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
