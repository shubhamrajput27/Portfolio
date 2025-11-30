import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { userProfile } from '../../data/Data'
import FloatingTech from '../Hero/FloatingTech'

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // animate progress to 100 over ~1500ms
    const total = 1500
    const interval = 30
    const steps = Math.ceil(total / interval)
    let current = 0
    const id = setInterval(() => {
      current += 1
      const value = Math.min(100, Math.round((current / steps) * 100))
      setProgress(value)
      if (value >= 100) clearInterval(id)
    }, interval)

    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fffaf0] dark:bg-dark-secondary overflow-hidden">
      {/* Floating tech icons in the background (visible behind content) */}
      <div className="absolute inset-0 z-0 opacity-70">
        <FloatingTech />
      </div>

      <div className="w-full max-w-5xl px-6 z-10">
        <div className="relative text-center">
          {/* floating tech icon to the left of the name */}
          <motion.div
            className="absolute -left-20 md:-left-40 top-1/2 -translate-y-1/2 w-20 h-20 md:w-36 md:h-36 flex items-center justify-center"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="https://skillicons.dev/icons?i=react&theme=light"
              alt="tech icon"
              className="w-14 h-14 md:w-24 md:h-24 object-contain opacity-90"
            />
          </motion.div>

          <h1 className="font-extrabold leading-tight">
            <span className="block text-[56px] md:text-[120px] lg:text-[140px] text-gray-900">{userProfile.name.split(' ')[0]}</span>
            <span className="block text-[56px] md:text-[120px] lg:text-[140px] text-orange-500">{userProfile.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <div className="mt-2">
            <span className="text-lg md:text-xl text-gray-600">Full Stack Developer</span>
          </div>

          <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto">{userProfile.tagline}</p>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="w-72 md:w-1/2 lg:w-1/3">
            <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.15 }}
                className="h-full bg-linear-to-r from-orange-400 via-red-400 to-orange-500"
              />
            </div>
            <div className="text-center mt-3 text-sm text-gray-600">{progress}%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
