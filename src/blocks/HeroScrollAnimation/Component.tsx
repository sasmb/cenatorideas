import React from 'react'
import HeroScrollAnimation from '@/components/ui/hero-scroll-animation'

type Block = {
  blockType: 'heroScrollAnimation'
}

export const HeroScrollAnimationComponent: React.FC<Block> = () => {
  return <HeroScrollAnimation />
}
