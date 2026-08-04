import {
  BarChart3,
  CloudCog,
  Factory,
  GraduationCap,
  Handshake,
  Headphones,
  Landmark,
  Layers3,
  LineChart,
  PackageCheck,
  Rocket,
  Scale,
  ShieldCheck,
  Sprout,
  Target,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type ValueProp = {
  title: string
  description: string
  icon: LucideIcon
}

export type ServicePillar = {
  number: string
  title: string
  slug: string
  description: string
  icon: LucideIcon
}

export const valueProps: ValueProp[] = [
  {
    title: 'Innovative Solutions',
    description: 'Modern digital systems tailored to how your business actually works.',
    icon: Layers3,
  },
  {
    title: 'Reliable Support',
    description: 'Practical guidance and responsive partnership from idea to delivery.',
    icon: Headphones,
  },
  {
    title: 'Scalable Growth',
    description: 'Cloud-ready foundations built to support the next stage of expansion.',
    icon: Rocket,
  },
  {
    title: 'Measurable Results',
    description: 'Clear outcomes, useful reporting, and decisions backed by data.',
    icon: BarChart3,
  },
]

export const servicePillars: ServicePillar[] = [
  {
    number: '01',
    title: 'Digital Solutions',
    slug: 'digital-solutions',
    description: 'Websites, apps, e-commerce, SEO, and UI/UX for modern brands.',
    icon: Layers3,
  },
  {
    number: '02',
    title: 'Cloud & DevOps Services',
    slug: 'cloud-devops-services',
    description: 'AWS architecture, CI/CD, containers, infrastructure, and monitoring.',
    icon: CloudCog,
  },
  {
    number: '03',
    title: 'Business Automation',
    slug: 'business-automation',
    description: 'Workflow automation, custom systems, integrations, and dashboards.',
    icon: Workflow,
  },
  {
    number: '04',
    title: 'Business Advisory',
    slug: 'business-advisory',
    description: 'Strategy, research, risk, compliance, and process improvement.',
    icon: Landmark,
  },
  {
    number: '05',
    title: 'Business Development & Management',
    slug: 'business-development-management',
    description: 'Growth strategy, operations support, project management, and teams.',
    icon: Handshake,
  },
  {
    number: '06',
    title: 'Academy',
    slug: 'academy',
    description: 'Technical and business training for emerging professionals and teams.',
    icon: GraduationCap,
  },
  {
    number: '07',
    title: 'Agribusiness',
    slug: 'agribusiness',
    description: 'Sector-focused support for agricultural value chains and growth.',
    icon: Sprout,
  },
  {
    number: '08',
    title: 'Manufacturing',
    slug: 'manufacturing',
    description: 'Operational support for production, systems, and business scale.',
    icon: Factory,
  },
  {
    number: '09',
    title: 'Import & Export',
    slug: 'import-export',
    description: 'Trade-focused guidance for sourcing, markets, and commercial flow.',
    icon: PackageCheck,
  },
]

export const whyChooseUs: ValueProp[] = [
  {
    title: 'Scalable Solutions',
    description: 'Built for growth, flexibility, and long-term business resilience.',
    icon: Scale,
  },
  {
    title: 'Reliable Support',
    description: 'A steady partner through planning, implementation, and optimization.',
    icon: Headphones,
  },
  {
    title: 'Secure Infrastructure',
    description: 'Enterprise-minded foundations for systems, data, and cloud operations.',
    icon: ShieldCheck,
  },
  {
    title: 'Measurable Results',
    description: 'Delivery guided by clear priorities, metrics, and business outcomes.',
    icon: Target,
  },
]

export const techBadges = ['AWS', 'Kubernetes', 'Docker', 'Terraform']

export const heroStats = [
  { value: '09', label: 'Service pillars' },
  { value: 'Cloud', label: 'Delivery ready' },
  { value: 'B2B', label: 'Growth focused' },
]

export const operatingModel = [
  { label: 'Cloud architecture', icon: CloudCog },
  { label: 'Secure infrastructure', icon: ShieldCheck },
  { label: 'Performance delivery', icon: LineChart },
]
