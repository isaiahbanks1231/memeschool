const fs = require('fs');
const path = require('path');

const files = {
  'package.json': `{
  "name": "memeacademy",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "15.1.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.15.0",
    "lenis": "^1.1.18",
    "lucide-react": "^0.469.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "@types/node": "^22.10.5",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "postcss": "^8.4.49",
    "tailwindcss": "^4.0.0-beta.8",
    "@tailwindcss/postcss": "^4.0.0-beta.8"
  }
}`,

  'next.config.js': `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: { unoptimized: true },
}
module.exports = nextConfig`,

  'tsconfig.json': `{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}`,

  'postcss.config.mjs': `/** @type {import('postcss-load-config').Config} */
const config = { plugins: { '@tailwindcss/postcss': {} } }
export default config`,

  'tailwind.config.ts': `import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(240 10% 3.9%)',
        foreground: 'hsl(0 0% 98%)',
        primary: 'hsl(263 70% 50.4%)',
        border: 'hsl(240 3.7% 15.9%)',
      },
      animation: {
        'aurora': 'aurora 20s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg)' },
          '50%': { transform: 'translate(0%, 10%) rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config`,

  'app/globals.css': `@import "tailwindcss";

@layer base {
  :root {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --primary: 263 70% 50.4%;
    --radius: 0.75rem;
  }
  * { @apply border-border; }
  body { @apply bg-background text-foreground antialiased; }
  html { scroll-behavior: smooth; }
}

.aurora-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: hsl(240 10% 3.9%);
}

.aurora-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: aurora 20s ease-in-out infinite;
}

.aurora-blob-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.3));
  top: -200px;
  left: -100px;
}

.aurora-blob-2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(139, 92, 246, 0.4));
  top: 20%;
  right: -150px;
  animation-delay: -5s;
}

.aurora-blob-3 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.2));
  bottom: -100px;
  left: 30%;
  animation-delay: -10s;
}

.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.text-gradient {
  background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.noise {
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0.03;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}`,

  'lib/utils.ts': `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,

  'app/layout.tsx': `import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MemeAcademy | Free Memecoin Education',
  description: 'Learn cryptocurrency fundamentals, wallet security, and scam prevention.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={\`\${geistSans.variable} font-sans antialiased bg-background text-foreground\`}>
        {children}
      </body>
    </html>
  )
}`,

  'app/page.tsx': `'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Shield, BookOpen, Users, ArrowRight, Star, ChevronDown, Wallet, AlertTriangle, Lock, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

// Navigation
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'}\`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">
            Meme<span className="text-violet-400">Academy</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {['Learn', 'Safety', 'Community', 'FAQ'].map((item) => (
            <a key={item} href={\`#\${item.toLowerCase()}\`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-xl glass text-sm text-white hover:bg-white/10 transition-colors">Sign In</button>
          <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.5)]">Start Learning</button>
        </div>
      </div>
    </motion.header>
  )
}

// Aurora Background
function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <motion.div className="aurora-blob aurora-blob-1" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity }} />
      <motion.div className="aurora-blob aurora-blob-2" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity, delay: 2 }} />
      <motion.div className="aurora-blob aurora-blob-3" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 18, repeat: Infinity, delay: 4 }} />
      <div className="noise" />
    </div>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/80">Free Education for Everyone</span>
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Master Memecoins</span><br />
          <span className="text-white/90">Without the Risk</span>
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
          Learn the fundamentals of cryptocurrency, wallet security, and how to spot scams before you invest a single dollar.
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-primary text-white font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 rounded-xl glass text-white font-medium hover:bg-white/10 transition-colors">
            View Curriculum
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// Logo Marquee
function LogoMarquee() {
  const partners = ['MetaMask', 'Phantom', 'Coinbase', 'Ledger', 'Rainbow', 'Trust Wallet']
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden">
      <p className="text-center text-sm text-white/40 uppercase tracking-widest mb-12">Learn with popular wallets</p>
      <div className="flex overflow-hidden">
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="flex gap-16 items-center shrink-0">
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-xl glass opacity-50">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white/60">{partner[0]}</div>
              <span className="text-white/60 font-medium whitespace-nowrap">{partner}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Bento Grid
function BentoGrid() {
  const features = [
    { icon: Wallet, title: 'Wallet Basics', desc: 'Set up, secure, and manage your crypto wallet. Understand seed phrases and private keys.', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, title: 'Security First', desc: 'Best practices for keeping your assets safe with 2FA and hardware wallets.', color: 'from-emerald-500 to-teal-500' },
    { icon: AlertTriangle, title: 'Spot Scams', desc: 'Identify red flags, rug pulls, and fraudulent projects before losing money.', color: 'from-orange-500 to-red-500' },
    { icon: BookOpen, title: 'Tokenomics 101', desc: 'Understand supply, demand, liquidity, and how to evaluate projects.', color: 'from-violet-500 to-purple-500' },
    { icon: Lock, title: 'Risk Management', desc: 'Never invest more than you can afford to lose. Portfolio strategies.', color: 'from-pink-500 to-rose-500' },
    { icon: Users, title: 'Community', desc: 'Join our Discord for real-time discussions and peer learning.', color: 'from-amber-500 to-yellow-500' },
  ]

  return (
    <section id="learn" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Everything You Need to <span className="text-gradient-primary">Get Started</span></h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">A structured learning path from complete beginner to confident participant.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="group glass rounded-3xl p-8">
              <div className={\`w-12 h-12 rounded-xl bg-gradient-to-br \${feature.color} flex items-center justify-center mb-6\`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats
function Stats() {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Students', value: '12.5K+' },
            { label: 'Scams Prevented', value: '850+' },
            { label: 'Lessons', value: '45K+' },
            { label: 'Community', value: '3.2K+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials
function Testimonials() {
  const testimonials = [
    { quote: "I almost fell for a scam before finding MemeAcademy. The lessons on red flags saved me from losing my savings.", author: "Alex M.", role: "Beginner" },
    { quote: "Finally, a resource that doesn't promise get-rich-quick schemes. Just solid education.", author: "Sarah K.", role: "Crypto Curious" },
    { quote: "The wallet security module alone was worth it. I learned things I never knew about protecting my assets.", author: "James R.", role: "New Investor" },
  ]

  return (
    <section id="community" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Trusted by <span className="text-gradient-primary">Thousands</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass rounded-3xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-white/80 mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">{t.author[0]}</div>
                <div>
                  <div className="font-medium text-white">{t.author}</div>
                  <div className="text-sm text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const items = [
    { q: "Is MemeAcademy really free?", a: "Yes, completely free. We believe education should be accessible to everyone." },
    { q: "Do you give financial advice?", a: "Absolutely not. We're purely educational. We don't recommend any specific cryptocurrencies." },
    { q: "What makes memecoins risky?", a: "They're highly speculative with extreme volatility. Most have no intrinsic value. Prices can crash 90% in hours." },
    { q: "How do I spot scams?", a: "Red flags include anonymous teams, guaranteed returns promises, and locked liquidity concerns." },
  ]

  return (
    <section id="faq" className="py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient-primary">Questions</span></h2>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className={\`rounded-2xl border border-white/10 overflow-hidden \${openIndex === i ? 'bg-white/[0.05]' : 'bg-white/[0.02]'}\`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="text-lg font-medium text-white/90">{item.q}</span>
                <ChevronDown className={\`w-5 h-5 text-white/50 transition-transform \${openIndex === i ? 'rotate-180' : ''}\`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-white/60">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Meme<span className="text-violet-400">Academy</span></span>
          </div>
          <div className="flex gap-4">
            {[MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-white/40 text-center max-w-3xl mx-auto">
          Disclaimer: MemeAcademy is for educational purposes only. We do not provide financial advice. Cryptocurrency investments carry substantial risk of loss.
        </p>
        <p className="text-sm text-white/40 text-center mt-8">© 2024 MemeAcademy. All rights reserved.</p>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="relative">
      <AuroraBackground />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <BentoGrid />
      <Stats />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}`
};

// Create project structure
const dirs = ['app', 'components', 'hooks', 'lib', 'public/images'];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created: ${dir}/`);
  }
});

// Write all files
Object.entries(files).forEach(([filepath, content]) => {
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filepath, content);
  console.log(`Created: ${filepath}`);
});

console.log('\n✅ Project created successfully!');
console.log('\nNext steps:');
console.log('  npm install');
console.log('  npm run dev');