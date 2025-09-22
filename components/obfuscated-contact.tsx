"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

interface ObfuscatedContactProps {
  type: "email" | "phone"
  obfuscatedText: string
  realValue: string
  href: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function ObfuscatedContact({ 
  type, 
  obfuscatedText, 
  realValue, 
  href, 
  variant = "default"
}: ObfuscatedContactProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleReveal = () => {
    setIsRevealed(true)
  }

  const Icon = type === "email" ? Mail : Phone

  if (isRevealed) {
    return (
      <Button variant={variant} asChild>
        <a href={href}>
          <Icon className="h-4 w-4 mr-2" />
          {realValue}
        </a>
      </Button>
    )
  }

  return (
    <Button 
      variant={variant}
      onClick={handleReveal}
      type="button"
    >
      <Icon className="h-4 w-4 mr-2" />
      <span className="blur-sm select-none">
        {obfuscatedText}
      </span>
    </Button>
  )
}