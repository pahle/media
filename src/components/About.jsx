import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export function About() {
  return (
    <section
      id="tentang"
      aria-labelledby="Tentang Kami"
      className="relative overflow-hidden py-20 sm:py-32"
    >
      <Container className="relative">
        {/* <div className="mx-auto max-w-5xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl text-slate-900 sm:text-4xl"
          >
            Tentang Kami
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Perusahaan berbadan hukum resmi berdiri sejak tahun 2003, didukung
            oleh staff manajemen yang profesional di bidangnya. Hingga saat ini
            Kami telah banyak bermitra dengan perusahaan seperti Leasing, Bank,
            Showroom, Instansi Pemerintah, BUMN serta perusahaan-perusahaan
            lainnya yang terdapat di JABODETABEK. Fokus bidang usaha Kami adalah
            pengurusan surat-surat kendaraan bermotor di seluruh wilayah
            Indonesia.
          </p>
        </div> */}
        <div className="mx-auto md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Tentang Kami
          </h2>
          <p className="mt-8 text-justify text-lg tracking-tight text-slate-700">
            <b>Perusahaan berbadan hukum resmi berdiri sejak tahun 2003</b>,
            didukung oleh staff manajemen yang profesional di bidangnya. Hingga
            saat ini Kami telah banyak{' '}
            <b>
              bermitra dengan perusahaan seperti Leasing, Bank, Showroom,
              Instansi Pemerintah, BUMN
            </b>{' '}
            serta perusahaan-perusahaan lainnya yang terdapat di JABODETABEK.
            Fokus bidang usaha Kami adalah pengurusan surat-surat kendaraan
            bermotor di <b>seluruh wilayah Indonesia</b>.
          </p>
          <h3 className='mt-8 text-lg text-left font-bold italic tracking-tight text-slate-900'>&quot;Mudah, Cepat, Terpercaya&quot;</h3>
        </div>
        {/* <ul
          role="list"
          className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <li>
            <h3 className="font-display text-lg leading-7 text-slate-900">
              Perpanjangan Pajak
            </h3>
            <p className="text-md mt-4 text-slate-700">
              Pembayaran pajak rutin kendaraan atau yang disebut pembayaran
              Pajak Kendaraan Bermotor (PKB) setiap tahun dan ganti STNK plat 5
              tahun.
            </p>
          </li>
          <li>
            <h3 className="font-display text-lg leading-7 text-slate-900">
              Balik Nama
            </h3>
            <p className="text-md mt-4 text-slate-700">
              Pengalihan kepemilikan kendaraan bermotor dari pemilik pertama ke
              pemilik kedua, dan seterusnya.
            </p>
          </li>
          <li>
            <h3 className="font-display text-lg leading-7 text-slate-900">
              KIR Mobil
            </h3>
            <p className="text-md mt-4 text-slate-700">
              Pengujian kendaraan bermotor sebagai tanda bahwa kendaraan
              tersebut layak digunakan secara teknis di jalan raya, khususnya
              bagi kendaraan yang membawa angkutan penumpang dan barang.
            </p>
          </li>
          <li>
            <h3 className="font-display text-lg leading-7 text-slate-900">
              Mutasi Antar Wilayah
            </h3>
            <p className="text-md mt-4 text-slate-700">
              Proses registrasi ulang kendaraan karena pemilik kendaraan pindah
              domisili atau daerah tempat tinggal.
            </p>
          </li>
        </ul> */}
      </Container>
    </section>
  )
}
