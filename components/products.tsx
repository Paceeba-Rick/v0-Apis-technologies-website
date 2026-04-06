'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Products() {
  const products = [
    {
      name: 'INTRA-HD',
      description: 'Enterprise resource planning solution designed for African businesses',
      features: [
        'Real-time inventory management',
        'Advanced financial reporting',
        'Multi-currency support',
        'User-friendly dashboard',
        'Scalable infrastructure',
      ],
    },
    {
      name: 'CYK',
      description: 'Customer relationship management platform for seamless customer engagement',
      features: [
        'Lead management automation',
        'Sales pipeline tracking',
        'Customer communication hub',
        'Analytics and reporting',
        'Integration capabilities',
      ],
    },
    {
      name: 'Digital Hub',
      description: 'Comprehensive digital transformation suite for modern enterprises',
      features: [
        'Cloud infrastructure',
        'Data analytics',
        'Security management',
        'Team collaboration tools',
        'API integrations',
      ],
    },
  ]

  return (
    <div id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium">OUR PRODUCTS</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Innovative Solutions for Every Challenge
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Our suite of products is built to help businesses streamline operations, enhance customer relationships, and drive growth.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Product Icon/Header */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-md" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
              </div>

              {/* Description */}
              <p className="text-foreground/70 mb-6">{product.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full border-primary/50 text-foreground hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20 space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-medium">OUR SERVICES</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Services That Drive Growth
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
              <h4 className="text-xl font-bold mb-3">Custom Software Development</h4>
              <p className="text-foreground/70">
                Bespoke software solutions tailored to your unique business requirements, built with cutting-edge technologies and best practices.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
              <h4 className="text-xl font-bold mb-3">Web & Mobile App Development</h4>
              <p className="text-foreground/70">
                Responsive web and native mobile applications that engage users and deliver measurable business outcomes.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
              <h4 className="text-xl font-bold mb-3">Digital Transformation</h4>
              <p className="text-foreground/70">
                End-to-end digital transformation strategies that modernize your operations and enhance competitive advantage.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
              <h4 className="text-xl font-bold mb-3">IT Consulting & Strategy</h4>
              <p className="text-foreground/70">
                Expert guidance on technology adoption, infrastructure planning, and digital roadmap development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
