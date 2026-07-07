Next.js 15 with TypeScript, Tailwind CSS v3.4.19, shadcn/ui

Components (40+):
  accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb,
  button-group, button, calendar, card, carousel, chart, checkbox, collapsible,
  command, context-menu, dialog, drawer, dropdown-menu, empty, field, form,
  hover-card, input-group, input-otp, input, item, kbd, label, menubar,
  navigation-menu, pagination, popover, progress, radio-group, resizable,
  scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner,
  spinner, switch, table, tabs, textarea, toggle-group, toggle, tooltip

Usage:
  import { Button } from '@/components/ui/button'
  import { Card, CardHeader, CardTitle } from '@/components/ui/card'

Structure:
  src/app/             Next.js App Router (pages, layout, globals.css)
  src/sections/        Page sections (home, about, products, career, contact)
  src/components/      Shared components (Header, Footer, blocks, mockups)
  src/hooks/           Custom hooks
  src/lib/             Utilities (cn helper, etc.)
  src/types/           Type definitions
  tailwind.config.js   Tailwind theme, custom tokens, animations
  next.config.ts       Next.js config
  postcss.config.js    PostCSS for Tailwind