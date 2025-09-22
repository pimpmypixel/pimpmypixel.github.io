"use client"

import { useState } from "react"

interface ObfuscatedReferenceProps {
  obfuscatedText: string
  realText: string
}

export function ObfuscatedReference({ obfuscatedText, realText }: ObfuscatedReferenceProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleReveal = () => {
    setIsRevealed(true)
  }

  if (isRevealed) {
    return <span>{realText}</span>
  }

  return (
    <span
      className="blur-sm select-none cursor-pointer hover:blur-none transition-all duration-200"
      onClick={handleReveal}
      title="Click to reveal"
    >
      {obfuscatedText}
    </span>
  )
}