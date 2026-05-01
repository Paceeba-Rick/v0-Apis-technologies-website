'use client'

import { TrendingUp, Zap, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Portfolio() {
  const marketData = [
    {
      id: 1,
      icon: Users,
      title: 'Campus E-Commerce Market',
      size: '$2.5B+',
      description: 'Growing market for student-focused e-commerce and marketplace solutions across African universities',
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Digital Marketplace Growth',
      size: '45% CAGR',
      description: 'Mobile commerce adoption in emerging markets growing at a rapid pace with untapped student demographics',
    },
    {
      id: 3,
      icon: Zap,
      title: 'Campus Merchant Network',
      size: '10K+ Merchants',
      description: 'Thousands of on-campus merchants and service providers seeking digital presence and payment solutions',
    },
    {
      id: 4,
      icon: Target,
      title: 'Student Population',
      size: '50M+ Students',
      description: 'Large addressable market of digitally-savvy students across African campuses ready to adopt mobile commerce',
    },
  ]

  const opportunities = [
    {
      title: 'Campus Payment Integration',
      description: 'Partner with universities and fintech providers to offer seamless payment and wallet solutions',
    },
    {
      title: 'Logistics & Delivery Networks',
      description: 'Expand delivery capabilities with partnerships for same-day campus delivery services',
    },
    {
      title: 'Merchant Tools & Analytics',
      description: 'Develop premium tools for campus merchants to manage inventory, sales, and customer insights',
    },
    {
      title: 'Regional Expansion',
      description: 'Scale across multiple university campuses and expand to secondary cities and institutions',
    },
    {
      title: 'Student Loyalty Programs',
      description: 'Create rewards and loyalty ecosystems to increase user engagement and retention',
    },
    {
      title: 'Social Commerce Integration',
      description: 'Enable social shopping features allowing students to share and purchase through social platforms',
    },
  ]

  return (
    <div id="portfolio" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium">MARKET OPPORTUNITY</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Massive Market Size & Growth Potential
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Apis Technologies is positioned at the intersection of campus commerce, digital payments, and emerging market opportunity.
          </p>
        </div>

        {/* Market Size Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketData.map((market) => {
            const IconComponent = market.icon
            return (
              <div
                key={market.id}
                className="bg-background border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <IconComponent className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{market.title}</h3>
                <p className="text-2xl font-bold text-primary mb-3">{market.size}</p>
                <p className="text-foreground/70 text-sm">{market.description}</p>
              </div>
            )
          })}
        </div>

        {/* Opportunities Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Key Growth Opportunities
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              Strategic opportunities to expand Apis Technologies' footprint and capture market share in the growing campus commerce ecosystem.
            </p>
          </div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-background border border-primary/30 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-3 h-3 rounded-full bg-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{opportunity.title}</h3>
                <p className="text-foreground/70">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 pt-12 mt-8 border-t border-border/30">
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready to explore partnership opportunities?
          </h3>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Get in touch with our team to discuss how we can partner to capture this massive market opportunity.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            Schedule a Meeting
          </Button>
        </div>
      </div>
    </div>
  )
}
