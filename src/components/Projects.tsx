import { motion } from 'motion/react';

const projects = [
  {
    title: 'Electro Premium',
    category: 'E-Commerce',
    description: 'A premium electronics store with a focus on high-end audio gear.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    size: 'large',
    link: 'https://electropremium.netlify.app/'
  },
  {
    title: 'Cover Page',
    category: 'Academic Tool',
    description: 'A professional cover page generator for lab reports and assignments.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop',
    size: 'medium',
    link: 'https://covermint.netlify.app/'
  },
  {
    title: 'UniMate',
    category: 'Android App',
    description: 'A comprehensive academic companion app for university students.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    size: 'small'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-bold tracking-tighter"
        >
          Curated <span className="text-vibe-purple">Vibes</span>
        </motion.h2>
        <p className="text-white/50 mt-4 max-w-md">
          A collection of digital aesthetics curated through code, logic, and pure vibes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl glass block",
              project.link ? "cursor-pointer" : "cursor-default",
              project.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : '',
              project.size === 'medium' ? 'lg:col-span-2' : ''
            )}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
              <span className="text-xs font-mono text-vibe-purple mb-2">{project.category}</span>
              <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="text-sm text-white/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

// Helper function for the component
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
