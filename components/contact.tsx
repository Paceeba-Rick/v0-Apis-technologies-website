'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium">GET IN TOUCH</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Let&apos;s Start Your Journey
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Have questions or ready to transform your business? Reach out to our team and let&apos;s discuss your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-card border-border text-foreground placeholder:text-foreground/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-card border-border text-foreground placeholder:text-foreground/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="bg-card border-border text-foreground placeholder:text-foreground/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your project..."
                  rows={5}
                  required
                  className="bg-card border-border text-foreground placeholder:text-foreground/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Email</h4>
                  <a href="mailto:hello@apis.tech" className="text-foreground/70 hover:text-primary transition-colors">
                    hello@apis.tech
                  </a>
                  <p className="text-sm text-foreground/60 mt-1">We&apos;ll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Phone</h4>
                  <a href="tel:+233123456789" className="text-foreground/70 hover:text-primary transition-colors">
                    +233 (0) 123 456 789
                  </a>
                  <p className="text-sm text-foreground/60 mt-1">Mon-Fri, 9 AM - 6 PM GMT</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Location</h4>
                  <p className="text-foreground/70">
                    Accra, Ghana
                    <br />
                    West Africa
                  </p>
                  <p className="text-sm text-foreground/60 mt-1">Serving clients globally</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About Footer */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AT</span>
                </div>
                <span className="font-bold">Apis</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Building intelligent solutions for Africa&apos;s future.
              </p>
            </div>

            {/* Links */}
            <div>
              <h5 className="font-bold text-foreground mb-4">Product</h5>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-bold text-foreground mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="font-bold text-foreground mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/60 text-sm">
              © 2024 Apis Technologies. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
