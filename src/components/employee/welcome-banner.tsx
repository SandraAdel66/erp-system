'use client'

import Image from 'next/image'
import avatar from './icons/avatar.png'

interface WelcomeBannerProps {
  name: string
}

export default function WelcomeBanner({ name }: WelcomeBannerProps) {
  return (
    <div className="relative overflow-visible bg-gradient-to-r from-[#1D4ED8] to-[#C0EFDB] text-white rounded-2xl p-8 shadow-md flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold">Welcome {name}</h2>
        <p className="mt-1 opacity-90 text-sm">We hope you have a great day!</p>
      </div>

      <div className="absolute right-4 bottom-0 w-28 h-28 md:right-6 md:bottom-0 md:w-36 md:h-36 bg-white/10 flex items-center justify-center">
        <Image
          src={avatar}
          alt="avatar"
          width={144}
          height={144}
          className="object-cover rounded-full"
        />
      </div>
    </div>
  )
}
