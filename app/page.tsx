import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Portfolio />
      <Contact />
    </div>
  )
}
