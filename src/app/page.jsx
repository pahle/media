import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Layanan } from '@/components/Layanan'
import { Contact } from '@/components/Contact'
import { HasilKerja } from '@/components/HasilKerja'
import { Berita } from '@/components/Berita'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <About />
        <Layanan />
        <CallToAction />
        <HasilKerja />
        <Faqs />
        <Berita />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
