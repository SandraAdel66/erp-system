'use client'

import Image from 'next/image'
import avatar from './icons/avatar.png'

interface WelcomeBannerProps {
  name: string
}

export default function WelcomeBanner({ name }: WelcomeBannerProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-2xl p-6 shadow-md flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold">Welcome {name}</h2>
        <p className="mt-1 opacity-90 text-sm">We hope you have a great day!</p>
      </div>

      <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">
        <Image
          src={avatar}
          alt="avatar"
          width={90}
          height={90}
          className="rounded-full"
        />
      </div>
    </div>
  )
}
