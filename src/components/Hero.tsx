import { motion } from 'motion/react';
import { Github, Linkedin, Globe, Mail, FileText } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Mail, href: 'mailto:miftahulnoman14@gmail.com', label: 'Email' },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-12 py-8 z-50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          Noman
        </motion.div>
        
        <div className="flex items-center gap-12 text-sm font-medium text-white/70">
          {['About Us', 'Projects', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 items-center gap-12 z-10">
        
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-4 text-center lg:text-left"
        >
          <span className="text-vibe-purple font-medium tracking-widest uppercase text-sm">Hello, I'm</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-none">
            Miftahul <br /> Noman
          </h1>
        </motion.div>

        {/* Center Image/Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center"
        >
          <div className="relative w-48 h-48 lg:w-72 lg:h-72">
            {/* Energy Aura */}
            <div className="absolute inset-0 bg-vibe-purple/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-vibe-blue/10 blur-[60px] rounded-full animate-pulse delay-700" />
            
            {/* The Image */}
            <img 
              src="/images/profile.png" 
              alt="Miftahul Noman"
              className="w-full h-full object-cover object-top scale-105 rounded-3xl relative z-10 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 right-4 glass px-3 py-2 rounded-xl z-20 hidden lg:block"
            >
              <div className="text-[10px] font-mono text-vibe-purple mb-1">VIBE CODING</div>
              <div className="w-16 h-1 bg-vibe-purple/30 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full bg-vibe-purple"
                />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 left-4 glass px-3 py-2 rounded-xl z-20 hidden lg:block"
            >
              <div className="text-[10px] font-mono text-vibe-blue">EEE STUDENT</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-4 text-center lg:text-right"
        >
          <span className="text-vibe-blue font-medium tracking-widest uppercase text-sm">Creative</span>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none text-white/90">
            Developer <br /> & Designer
          </h2>
        </motion.div>
      </div>

      {/* Social Links Rail */}
      <div className="fixed left-12 bottom-12 flex flex-col gap-6 z-50">
        {socialLinks.map((social, i) => (
          <motion.a
            key={social.label}
            href={social.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="text-white/40 hover:text-vibe-purple transition-all hover:scale-110"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </div>

      {/* Resume Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed right-12 bottom-12 z-50"
      >
        <button className="glass px-6 py-3 rounded-full flex items-center gap-3 text-sm font-medium hover:bg-white/10 transition-all group">
          <span>RESUME</span>
          <FileText size={16} className="text-vibe-purple group-hover:scale-110 transition-transform" />
        </button>
      </motion.div>

      {/* Background Energy Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vibe-purple/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}
