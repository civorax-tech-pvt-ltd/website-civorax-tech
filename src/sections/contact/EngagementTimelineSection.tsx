import ScrollReveal from '../../components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Inquiry Triage',
    description: 'Your form submission is reviewed by a lead architect within 24 hours. We acknowledge receipt immediately and flag any urgent operational blockers.',
  },
  {
    number: '02',
    title: 'Discovery Call',
    description: 'A 45-minute video or in-person call to understand your branch structure, transaction volumes, hardware inventory, and the specific failure modes you need solved.',
  },
  {
    number: '03',
    title: 'Architecture Proposal',
    description: 'We deliver a written architecture document, fixed-scope deliverable list, timeline, and transparent cost breakdown. No vague estimates, no surprise change orders.',
  },
  {
    number: '04',
    title: 'Kickoff & Onboarding',
    description: 'Once the proposal is signed, we schedule the kickoff workshop, provision your staging environment, and begin the engagement with named engineers and weekly status calls.',
  },
]

export default function EngagementTimelineSection() {
  return (
    <section className="section-padding bg-white dark:bg-bg-primary">
      <div className="content-max-width">
        <ScrollReveal>
          <span className="label-text text-accent-dark">ENGAGEMENT TIMELINE</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-primary tracking-tight">
            After you send an inquiry.
          </h2>
          <p className="mt-3 text-base leading-relaxed max-w-[560px] text-text-body">
            A predictable four-step path from first contact to kickoff. Every step has a documented SLA and a named owner on our team.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[30px] left-0 right-0 h-0.5 z-0 bg-border-light" />

          <ScrollReveal stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-mono text-5xl font-bold block text-[rgba(132,204,22,0.35)]">
                  {step.number}
                </span>
                <h3 className="mt-4 text-[22px] font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  {step.description}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}