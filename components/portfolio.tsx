'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Financial Services Platform',
      category: 'Enterprise Solution',
      description: 'Complete digital banking solution for a regional financial institution',
      metrics: ['50K+ Users', '99.9% Uptime', '24/7 Support'],
      tags: ['Banking', 'Security', 'Scalability'],
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'Web & Mobile',
      description: 'Multi-vendor marketplace supporting thousands of merchants',
      metrics: ['$50M+ GMV', '100K+ Products', 'Real-time Analytics'],
      tags: ['Web', 'Mobile', 'Payment Integration'],
    },
    {
      id: 3,
      title: 'Supply Chain Management',
      category: 'Logistics Solution',
      description: 'Real-time tracking and management system for logistics company',
      metrics: ['500+ Vehicles', '99.5% Accuracy', '40% Cost Reduction'],
      tags: ['IoT', 'Analytics', 'Optimization'],
    },
    {
      id: 4,
      title: 'Healthcare Management System',
      category: 'Medical Solution',
      description: 'Comprehensive platform for patient management and hospital operations',
      metrics: ['20 Hospitals', '100K+ Patients', 'HIPAA Compliant'],
      tags: ['Healthcare', 'Compliance', 'Integration'],
    },
    {
      id: 5,
      title: 'Educational Technology Platform',
      category: 'EdTech Solution',
      description: 'Learning management system serving educational institutions',
      metrics: ['50K+ Students', '200+ Courses', '95% Satisfaction'],
      tags: ['Education', 'E-Learning', 'Analytics'],
    },
    {
      id: 6,
      title: 'Manufacturing Automation',
      category: 'Industrial Solution',
      description: 'IoT and AI-powered manufacturing optimization system',
      metrics: ['35% Efficiency', '30% Waste Reduction', 'Real-time Monitoring'],
      tags: ['IoT', 'AI/ML', 'Automation'],
    },
  ]

  return (
    <div id="portfolio" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium">PORTFOLIO</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Success Stories & Case Studies
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Discover how we&apos;ve transformed businesses across industries with our innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-background border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>

              {/* Description */}
              <p className="text-foreground/70 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-border/30">
                {project.metrics.map((metric) => (
                  <div key={metric} className="text-center">
                    <p className="text-xs text-foreground/60">{metric}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/5 text-primary/70 px-2 py-1 rounded border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium cursor-pointer">
                <span>View Case Study</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 pt-8">
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready to start your next project?
          </h3>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Get in touch with our team to discuss how AlienBee Technologies can help transform your business.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  )
}
