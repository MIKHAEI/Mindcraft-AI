'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FOOTER_LINKS } from '@/constants'

export const LandingFooter = () => (
  <nav className="px-4 sm:px-8 pt-8 pb-8 sm:pb-20 xl:pb-8 bg-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
    <Link href="/" className="hidden sm:flex items-center">
      <div className="relative h-8 w-8 mr-4">
        <Image src="/logo.png" alt="Jarvis logo" fill />
      </div>
    </Link>
    <div className="text-white text-[15px] text-center">
      &copy; <span className="font-bold">MINDCRAFT-AI</span>{' '}
      {new Date().getFullYear()}. All rights reserved.
    </div>
    
  </nav>
)
