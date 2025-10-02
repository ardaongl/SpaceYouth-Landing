'use client'

import { motion } from 'framer-motion'
import { Menu, X, User } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import spaceYouthIcon from '@/images/1.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={spaceYouthIcon} alt="SpaceYouth logo" width={45} height={45} className="rounded-md" />
            <h1 className={`relative top-[2px] text-xl font-bold text-white/90`}>SpaceYouth</h1>
          </motion.div>


          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <motion.button
                className={`relative flex items-center space-x-2 text-white/90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                whileHover={{ scale: 1.05 }}
              >
                <User size={20} />
                <span className={`text-sm font-medium text-white/90`}>Giriş yapın</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent border-0">
              <div className="flex items-center space-x-4 px-3 py-2">
                <Link href="/login">
                  <button className={`relative flex items-center space-x-2 text-white/90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}>
                    <User size={20} />
                    <span className={`text-sm text-white/90`}>Giriş yapın</span>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
