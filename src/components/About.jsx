import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export function About() {
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
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Tentang Kami
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            consectetur vitae ratione? Neque dolore eos a vel cupiditate
            blanditiis quos, dolorem placeat ullam ab hic aliquid ipsa
            architecto corrupti eligendi.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 max-w-2xl lg:max-w-none"
        >
          <li>
            <ul role="list" className="grid grid-cols-2 flex-col gap-y-8">
                <li>
                  <h3 className="font-display text-lg leading-7 text-slate-900">
                    Lorem, ipsum.
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
                </li>
                <li>
                  <h3 className="font-display text-lg leading-7 text-slate-900">
                    Lorem, ipsum.
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
                </li>
                <li>
                  <h3 className="font-display text-lg leading-7 text-slate-900">
                    Lorem, ipsum.
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
                </li>
                <li>
                  <h3 className="font-display text-lg leading-7 text-slate-900">
                    Lorem, ipsum.
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
                </li>
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  )
}
