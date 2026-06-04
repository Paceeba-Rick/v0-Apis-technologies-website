'use client'

import { Lightbulb, Target, Globe, Zap } from 'lucide-react'

export function About() {
  return (
    <div id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium">ABOUT US</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Pioneering Digital Innovation in Africa
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Nadir Technologies is a leading software and innovation company dedicated to solving real-world problems through technology and digital transformation.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Our Story</h3>
            <p className="text-foreground/70 text-lg">
              Founded with a vision to become Africa&apos;s leading technology company, Nadir Technologies is building a portfolio of innovative products and solutions that address critical market needs. Starting with Doyin—our flagship campus commerce platform—we&apos;re expanding into fintech, enterprise SaaS, and digital services.
            </p>
            <p className="text-foreground/70 text-lg">
              We combine deep local market knowledge with global engineering excellence to create products that scale. Our goal is to build the infrastructure and tools that power the next generation of African businesses, helping them find strength and rise high.
            </p>
          </div>
          <div className="relative h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-primary/40">
              <Lightbulb size={120} />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Target className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-foreground/70">
              To deliver innovative software solutions and digital transformation services that empower businesses to thrive in the digital economy while maintaining the highest standards of security, scalability, and excellence.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-foreground/70">
              To be the leading software innovation company that bridges the gap between African businesses and world-class technology solutions, fostering sustainable growth and digital excellence across the continent.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Why Choose Nadir?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all hover:bg-card/80">
              <Zap className="text-primary mb-4" size={32} />
              <h4 className="text-lg font-bold mb-2">Innovation-Driven</h4>
              <p className="text-foreground/70 text-sm">
                We stay at the forefront of technology, delivering cutting-edge solutions that give you competitive advantage.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all hover:bg-card/80">
              <Target className="text-primary mb-4" size={32} />
              <h4 className="text-lg font-bold mb-2">Local Expertise</h4>
              <p className="text-foreground/70 text-sm">
                Deep understanding of African markets combined with global best practices and standards.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all hover:bg-card/80">
              <Globe className="text-primary mb-4" size={32} />
              <h4 className="text-lg font-bold mb-2">Global Standards</h4>
              <p className="text-foreground/70 text-sm">
                Enterprise-grade security, scalability, and reliability meeting international compliance requirements.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all hover:bg-card/80">
              <Lightbulb className="text-primary mb-4" size={32} />
              <h4 className="text-lg font-bold mb-2">Proven Track Record</h4>
              <p className="text-foreground/70 text-sm">
                Trusted by leading companies across Africa with successful projects and satisfied clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
