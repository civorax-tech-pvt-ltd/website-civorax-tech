import ContactHeroSection from '@/sections/contact/ContactHeroSection'
import ContactFormSection from '@/sections/contact/ContactFormSection'
import DirectChannelsSection from '@/sections/contact/DirectChannelsSection'
import EngagementTimelineSection from '@/sections/contact/EngagementTimelineSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with CivoraX. < 24h reply, architecture audits, and dedicated support from Dharan, Nepal.',
  openGraph: {
    title: 'Contact CivoraX — Get in Touch',
    description: 'Get in touch with CivoraX. < 24h reply, architecture audits, and dedicated support from Dharan, Nepal.',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <DirectChannelsSection />
      <EngagementTimelineSection />
    </>
  )
}
