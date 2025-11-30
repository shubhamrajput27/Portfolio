import { motion, useReducedMotion } from 'framer-motion';

interface Skill {
  name: string;
  id: string;
}

const skills: Skill[] = [
  { name: 'Python', id: 'python' },
  { name: 'C', id: 'c' },
  { name: 'C++', id: 'cpp' },
  { name: 'Java', id: 'java' },
  { name: 'HTML', id: 'html' },
  { name: 'CSS', id: 'css' },
  { name: 'JavaScript', id: 'javascript' },
  { name: 'React', id: 'react' },
  { name: 'Node.js', id: 'nodejs' },
  { name: 'Express.js', id: 'express' },
  { name: 'MongoDB', id: 'mongodb' },
  { name: 'MySQL', id: 'mysql' },
  { name: 'PostgreSQL', id: 'postgres' },
  { name: 'Git', id: 'git' },
  { name: 'Figma', id: 'figma' },
  { name: 'Tailwind CSS', id: 'tailwind' },
  { name: 'Vercel', id: 'vercel' },
  { name: 'PHP', id: 'php' },
];

export default function SkillsGrid() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-800">🛠️ My Skills</h3>
          <p className="text-gray-500 mt-2">Technologies I work with</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 justify-items-center items-center"
        >
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center">
              {(() => {
                const hover = reduceMotion ? undefined : { scale: 1.12, y: -4, rotate: 3 };
                const tap = reduceMotion ? undefined : { scale: 0.95, y: 0 };
                const transition: any = reduceMotion ? undefined : { type: 'spring' as const, stiffness: 300, damping: 18 };

                return (
                  <motion.img
                    src={`https://skillicons.dev/icons?i=${skill.id}&theme=dark`}
                    alt={skill.name}
                    className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain focus:outline-none focus:ring-2 focus:ring-primary rounded touch-manipulation"
                    loading="lazy"
                    {...(hover && { whileHover: hover })}
                    {...(tap && { whileTap: tap })}
                    {...(transition && { transition })}
                    tabIndex={0}
                    aria-label={skill.name}
                  />
                );
              })()}
              <span className="mt-3 text-sm text-gray-700 font-bold">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
