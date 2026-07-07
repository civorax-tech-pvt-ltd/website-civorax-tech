'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import ScrollReveal from '../../components/ScrollReveal'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  platform: z.string().optional(),
  message: z.string().min(10, 'Please provide at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      platform: 'Retail POS',
      message: '',
    },
  })

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="section-padding bg-white dark:bg-bg-primary">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Contact Info + Map */}
          <div className="flex flex-col">
            <ScrollReveal>
              <span className="label-text text-accent-dark">WORK WITH US</span>
              <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-primary tracking-tight">
                Let&apos;s build something that works.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-body">
                Tell us about your operations: branches, volumes, current systems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent-badge">
                  <Mail size={18} className="text-accent-dark" />
                </div>
                <div>
                  <p className="text-base font-medium text-text-primary">info@civorax.com</p>
                  <p className="label-text mt-0.5 text-text-body text-[10px]">DIRECT STUDIO EMAIL</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent-badge">
                  <MapPin size={18} className="text-accent-dark" />
                </div>
                <div>
                  <p className="text-sm text-text-body">
                    <span className="font-medium text-text-primary">CivoraX Tech Pvt. Ltd.</span><br />
                    Putali Line-12, Dharan,<br />
                    Koshi Province, Nepal
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent-badge">
                  <Clock size={18} className="text-accent-dark" />
                </div>
                <div>
                  <p className="text-sm text-text-body">
                    Sunday — Friday<br />
                    09:00 AM to 06:00 PM NPT
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Map */}
            <ScrollReveal delay={0.2} className="mt-8 flex-1">
              <div className="rounded-2xl overflow-hidden h-full border border-border-light">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56515.23754881395!2d87.270706!3d26.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1931a15f3c97b%3A0x11b0a3c4c2b8e0c0!2sDharan%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="300"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CivoraX Tech - Dharan, Nepal"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.15} className="flex flex-col">
            <form
              className="rounded-2xl p-8 md:p-10 flex-1 bg-bg-light"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="label-text block mb-2 text-text-body text-[11px]">
                    Client Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 bg-bg-white text-text-primary focus:border-accent-light ${
                      errors.name ? 'border border-red-500' : 'border border-border-light'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-xs mt-1.5 text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="label-text block mb-2 text-text-body text-[11px]">
                    Direct Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 bg-bg-white text-text-primary focus:border-accent-light ${
                      errors.email ? 'border border-red-500' : 'border border-border-light'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-xs mt-1.5 text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="platform" className="label-text block mb-2 text-text-body text-[11px]">
                    Target Core Platform
                  </label>
                  <select
                    id="platform"
                    {...register('platform')}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 bg-bg-white text-text-primary border border-border-light focus:border-accent-light"
                  >
                    <option>Retail POS</option>
                    <option>Enterprise ERP</option>
                    <option>Custom Web Portal</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="label-text block mb-2 text-text-body text-[11px]">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none bg-bg-white text-text-primary focus:border-accent-light ${
                      errors.message ? 'border border-red-500' : 'border border-border-light'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-xs mt-1.5 text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg py-3.5 text-[15px] font-semibold transition-all duration-300 bg-bg-primary text-text-white hover:bg-accent-light hover:text-bg-primary disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      Inquiry Sent
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Inquiry
                    </>
                  )}
                </button>

                {submitted && (
                  <p role="status" className="text-center text-sm text-accent-dark">
                    We&apos;ll respond within 24 hours. Check your inbox.
                  </p>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
