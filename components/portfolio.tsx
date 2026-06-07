'use client'

import { useState } from 'react'
import { TrendingUp, Zap, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MeetingModal } from './meeting-modal'

export function Portfolio() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false)
  const marketData = [
    {
      id: 1,
      icon: Users,
      title: 'African Digital Economy',
      size: '$300B+',
      description: 'Africa\'s total digital economy market with 13.8% annual growth across e-commerce, fintech, SaaS, and digital services',
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Software & Tech Market',
      size: '$30.2B (2025)',
      description: 'African software and digital transformation market projected to reach $72.2B by 2031 at 15.6% CAGR',
    },
    {
      id: 3,
      icon: Zap,
      title: 'Fintech & Payments',
      description: 'Pan-African fintech market growing 13x by 2030, with digital payments infrastructure expanding across the continent',
      size: '13x Growth',
    },
    {
      id: 4,
      icon: Target,
      title: 'Addressable Population',
      size: '1.4B+ People',
      description: 'Africa\'s growing digitally-connected population with increasing mobile internet penetration and consumer spending power',
    },
  ]

  const opportunities = [
    {
      title: 'Financial Services & Payments',
      description: 'Build and integrate payment infrastructure, fintech solutions, and financial services to underbanked African markets',
    },
    {
      title: 'Enterprise SaaS Solutions',
      description: 'Develop business software and management tools for SMEs, corporations, and government institutions across Africa',
    },
    {
      title: 'Pan-African Expansion',
      description: 'Scale products across multiple African countries and emerging markets to maximize market penetration and reach',
    },
    {
      title: 'Strategic Partnerships',
      description: 'Partner with telecom providers, financial institutions, and tech platforms to accelerate growth and distribution',
    },
    {
      title: 'Data & Analytics Capabilities',
      description: 'Develop advanced analytics, AI-powered insights, and business intelligence tools for customer intelligence',
    },
    {
      title: 'API & Developer Ecosystem',
      description: 'Build platform APIs and developer tools to enable third-party integrations and expand Nadir as an infrastructure layer',
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
            Africa&apos;s digital economy is rapidly expanding with massive opportunities across fintech, e-commerce, enterprise software, and digital services sectors.
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
              Strategic growth vectors for Nadir Technologies to establish leadership across Africa&apos;s digital economy and become the continent&apos;s leading technology company.
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
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            onClick={() => setMeetingModalOpen(true)}
          >
            Schedule a Meeting
          </Button>
        </div>

        <MeetingModal open={meetingModalOpen} onOpenChange={setMeetingModalOpen}
        </div>
      </div>
    </div>
  )
}
