import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { skillCategories } from "../data/mockData";
import SkillIcon from "../components/SkillIcon";

const Skills: React.FC = () => {
  const allSkills = useMemo(
    () => skillCategories.flatMap((category) => category.skills),
    []
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Section title="My Skills">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {allSkills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{
              y: -6,
              scale: 1.05,
              boxShadow: "0 0 20px rgba(56,189,248,0.5)",
              transition: { type: "spring", stiffness: 300 },
            }}
            className="relative group p-6 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/40 hover:border-cyan-400/60 hover:from-slate-800/60 hover:to-slate-900/40 shadow-lg overflow-hidden transition-all duration-300"
          >
            {/* Floating animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />

            <motion.div
              whileHover={{ rotateY: 10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="z-10 w-14 h-14 mb-2"
            >
              <SkillIcon iconId={skill.iconId} className="w-full h-full" />
            </motion.div>

            <p className="z-10 text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
              {skill.name}
            </p>

            {/* Glow line effect on hover */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-sky-500"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
