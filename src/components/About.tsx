import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about-us" className="py-32 px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter">
          The <span className="text-vibe-blue">Philosophy</span>
        </h2>
        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
          <p>
            I am a <span className="text-white font-medium">Vibe Coder</span>. To me, code isn't just a set of instructions; it's a medium for digital expression. I curate aesthetics through logic, ensuring every pixel resonates with intent.
          </p>
          <p>
            As an <span className="text-white font-medium">EEE Student</span> (Electrical and Electronic Engineering) passionate about modern technology and art, I am constantly exploring the intersection of hardware, software, and aesthetics. My goal is to build spaces that don't just function, but feel alive.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 pt-8">
          <div>
            <div className="text-3xl font-bold text-vibe-purple">3</div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mt-1">Vibes Curated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-vibe-blue">∞</div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mt-1">GPA / Logic</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative aspect-square max-w-sm mx-auto lg:ml-auto"
      >
        <div className="absolute inset-0 bg-vibe-blue/20 blur-[100px] rounded-full" />
        <div className="relative z-10 w-full h-full glass rounded-[4rem] overflow-hidden p-2">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" 
            alt="Tech Setup"
            className="w-full h-full object-cover rounded-[3.5rem] grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-12 -right-12 w-24 h-24 border-t-2 border-r-2 border-vibe-purple/30 rounded-tr-3xl" />
        <div className="absolute -bottom-12 -left-12 w-24 h-24 border-b-2 border-l-2 border-vibe-blue/30 rounded-bl-3xl" />
      </motion.div>
    </section>
  );
}
