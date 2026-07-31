'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Shield, BookOpen, Users, ArrowRight, Star, ChevronDown, Wallet, AlertTriangle, Lock, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Image from "next/image";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'}`}
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
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a
  href="https://t.me/cryptovicfeed?text=I%20would%20like%20to%20get%20started%20on%20the%20FREE%20memecoin%20course%2C%20my%20name%20is%20"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-4 py-2 rounded-xl glass text-sm text-white hover:bg-white/10 transition-colors">
    Sign In
  </button>
</a>
          <a
  href="https://t.me/memecoinbootcamp"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.5)]">
    Start Learning
  </button>
</a>
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
         <a
  href="https://t.me/memecoinbootcamp"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-8 py-4 rounded-xl bg-primary text-white font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all">
    Start Your Journey
    <ArrowRight className="w-4 h-4" />
  </button>
</a>
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
  const partners = [
    { name: "MetaMask", logo: "/logos/metamask.png" },
    { name: "Phantom", logo: "/logos/phantom.png" },
    { name: "Coinbase Wallet", logo: "/logos/coinbase.png" },
    { name: "Ledger", logo: "/logos/ledger.png" },
    { name: "Rainbow", logo: "/logos/rainbow.png" },
    { name: "Trust Wallet", logo: "/logos/trustwallet.png" },
  ]

  return (
    <section className="py-20 border-y border-white/5 overflow-hidden">
      <p className="text-center text-sm text-white/40 uppercase tracking-widest mb-12">
        Learn with popular wallets
      </p>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 items-center shrink-0"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-xl glass opacity-80 hover:opacity-100 transition-all"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={34}
                height={34}
                className="rounded-lg grayscale hover:grayscale-0 transition-all"
              />

              <span className="text-white/70 font-medium whitespace-nowrap">
                {partner.name}
              </span>
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
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
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
            <div key={i} className={`rounded-2xl border border-white/10 overflow-hidden ${openIndex === i ? 'bg-white/[0.05]' : 'bg-white/[0.02]'}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="text-lg font-medium text-white/90">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
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


function JoinCTA() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-[32px] p-10 md:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="inline-flex items-center rounded-full bg-violet-500/10 border border-violet-500/20 px-4 py-2 mb-6">
                <span className="text-violet-300 text-sm font-medium">
                  Join 100% Free
                </span>
              </div>

              <h2 className="text-5xl font-bold text-white mb-6">
                Start Learning
                <br />
                <span className="text-gradient">
                  Today
                </span>
              </h2>

              <p className="text-white/60 text-lg mb-8">
                Join the Telegram community and access beginner lessons,
                wallet guides, scam prevention, and daily educational content.
              </p>

              <a
                href="https://t.me/memecoinbootcamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 rounded-xl bg-primary text-white font-semibold">
                  Join Telegram
                </button>
              </a>
            </div>

            <div className="flex justify-center">
              <img
                src="/qrcode.png"
                alt="Telegram QR Code"
                className="rounded-3xl w-80 shadow-2xl"
              />
            </div>

          </div>
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

function FloatingTelegram() {
  return (
    <a
      href="https://t.me/memecoinbootcamp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        //className="bg-[#229ED9] rounded-full shadow-[0_0_45px_rgba(34,158,217,.5)] w-16 h-16 flex items-center justify-center"
      >
        <Image
          src="/logos/telegram.png"
          alt="Telegram"
          width={60}
          height={60}
        />
      </motion.div>
    </a>
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
      <JoinCTA />
      <Footer />
      <FloatingTelegram />
    </main>
  )
}