import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import InsuranceTypes from '@/components/InsuranceTypes'
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <InsuranceTypes />
      <Testimonials />
      <AboutUs />
      <ContactSection />
    </div>
  )
}