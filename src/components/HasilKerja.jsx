import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import backgroundImage from '@/images/background-faqs.jpg'
import backgroundImage1 from '@/images/background-auth.jpg'

const testimonials = [
  [
    {
      image: '/activity1.jpg',
    },
    {
      image: '/activity5.jpg',
    },
    {
      image: '/activity9.jpg',
    },
    {
      image: '/activity4.jpg',
    },
    {
      image: '/staff2.jpg',
    },
    {
      image: '/staff1.jpg',
    },
  ],
  [
    {
      image: '/activity10.jpg',
    },
    {
      image: '/activity2.jpg',
    },
    {
      image: '/activity6.jpg',
    },
    {
      image: '/document2.jpg',
    },
    {
      image: '/document4.jpg',
    },
    {
      image: '/document5.jpg',
    },
  ],
  [
    {
      image: '/activity7.jpg',
    },
    {
      image: '/activity8.jpg',
    },
    {
      image: '/document3.jpg',
    },
    {
      image: '/staff3.jpg',
    },
    {
      image: '/document1.jpg',
    },
    {
      image: '/activity3.jpg',
    },
  ],
]

export function HasilKerja() {
  return (
    <section
      id="hasil"
      aria-label="Hasil Kerja"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Hasi Kerja Kami
          </h2>
          
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Berikut adalah beberapa hasil kerja kami yang telah kami lakukan
            bersama dengan klien kami.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-900/10">
                      <Image
                        src={testimonial.image}
                        alt="Portfolio"
                        width={1000}
                        height={1000}
                        unoptimized
                      />
                    </figure>
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
