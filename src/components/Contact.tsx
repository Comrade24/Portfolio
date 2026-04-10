import { motion } from 'motion/react';
import { Send, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const email = 'miftahulnoman14@gmail.com';
  const whatsapp = '8801870059769';

  return (
    <section id="contact" className="py-32 px-12 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter">
          Let's <span className="text-vibe-purple">Connect</span>
        </h2>
        <p className="text-white/60">
          Interested in a collaboration or just want to talk about vibes? Drop me a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass p-8 rounded-3xl flex flex-col items-center gap-4 group hover:border-vibe-purple/50 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-vibe-purple/10 flex items-center justify-center group-hover:bg-vibe-purple/20 transition-colors">
              <Mail className="text-vibe-purple" size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">Email Me</h3>
              <p className="text-sm text-white/40">{email}</p>
            </div>
          </motion.a>

          <motion.a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass p-8 rounded-3xl flex flex-col items-center gap-4 group hover:border-vibe-blue/50 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-vibe-blue/10 flex items-center justify-center group-hover:bg-vibe-blue/20 transition-colors">
              <MessageSquare className="text-vibe-blue" size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">WhatsApp</h3>
              <p className="text-sm text-white/40">+{whatsapp}</p>
            </div>
          </motion.a>
        </div>
        
        <form className="space-y-4 mt-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full glass px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-vibe-purple/50 transition-all"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full glass px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-vibe-purple/50 transition-all"
            />
          </div>
          <textarea 
            placeholder="Message" 
            rows={4}
            className="w-full glass px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-vibe-purple/50 transition-all"
          />
          <button className="w-full bg-vibe-purple hover:bg-vibe-purple/80 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all group">
            <span>SEND MESSAGE</span>
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
