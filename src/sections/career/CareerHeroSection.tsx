'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '../../components/ScrollReveal'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog"

export default function CareerHeroSection() {
  return (
    <section className="flex items-center justify-center text-center px-4 bg-bg-primary min-h-[80vh] pt-40 pb-24">
      <div className="max-w-[720px]">
        <ScrollReveal>
          <span className="label-text text-text-secondary">CAREERS</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] tracking-tighter">
            <span className="text-white">Build software that</span>
            <br />
            <em className="text-accent-light">works under real conditions.</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto text-text-secondary">
            We hire engineers who build production systems, not demos that break in the field. Throw your ideas into production.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="#openings"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] bg-accent-light text-bg-primary py-3.5 px-8"
          >
            View Openings
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Internship Alert Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300 bg-transparent border border-border-dark py-3.5 px-8 hover:border-accent-light"
              >
                Internship Track
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-bg-secondary border-border-dark">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-white">Internships Currently Unavailable</AlertDialogTitle>
                <AlertDialogDescription className="text-text-secondary">
                  We are not currently accepting internship applications for the Q3 2026 session. 
                  Please check back in early 2027 or follow our social channels for updates.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-accent-light text-bg-primary hover:bg-white border-none">
                  Understood
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ScrollReveal>
      </div>
    </section>
  )
}