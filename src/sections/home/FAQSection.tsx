import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We build systems for retailers, restaurants, distributors, and service businesses across Nepal — primarily in Koshi Province. Our products are designed around the constraints these businesses face daily: intermittent power, unreliable internet, and complex IRD compliance.',
  },
  {
    question: 'How long does deployment take?',
    answer: 'Most systems go live within 2–4 weeks. We start with a discovery call, move to configuration, and run pilot testing before full rollout. Named engineers and weekly calls keep everything transparent.',
  },
  {
    question: 'Do you handle IRD compliance?',
    answer: 'Yes. Our systems include automated VAT computation, consecutive secure invoice numbering, and one-click XML report generation that passes IRD audits. No manual configuration required.',
  },
  {
    question: 'What happens when the internet goes down?',
    answer: 'Our offline-first architecture queues transactions locally and syncs automatically when the connection returns. Your business never stops, even during load-shedding or network outages.',
  },
  {
    question: 'Do I own the source code?',
    answer: 'Yes — full source ownership. No subscriptions, no lock-in. We build it, you keep the code forever. You can modify, extend, or migrate it at any time.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'Named engineers, weekly progress calls, and responsive support throughout deployment and beyond. We don\'t hand off to a generic help desk — the people who built your system remain your point of contact.',
  },
]

export default function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="FAQ"
            heading="Frequently Asked Questions"
            subheading="Everything you need to know about working with us."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                style={{ borderBottomColor: 'var(--border-light)' }}
              >
                <AccordionTrigger
                  className="text-base py-5 hover:no-underline"
                  style={{ color: 'var(--bg-primary)' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-[15px] leading-relaxed"
                  style={{ color: 'var(--text-body)' }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
