'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-foreground/10 group-hover:border-foreground/20 transition-all duration-300 shadow-lg shadow-black/10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nadir_logo-removebg-preview-epBDYMgwcqPEWq4sYip5TwoHg7U7Se.png"
                alt="Nadir Technologies Logo"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-foreground hidden sm:inline">
              Nadir
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Work With Us
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Work With Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
