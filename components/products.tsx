'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Products() {
  const products = [
    {
      name: 'Doyin',
      description: 'A campus-based e-commerce mobile application designed to connect students with campus merchants and services',
      features: [
        'Easy product browsing and discovery',
        'Secure mobile payment integration',
        'Real-time order tracking',
        'Campus merchant network',
        'Student-friendly interface',
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
            Transforming Markets with Intelligent Software
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            At Nadir Technologies, we&apos;re building a portfolio of innovative products that address critical market gaps across Africa. From campus commerce to enterprise solutions, our products are designed for scale and impact.
          </p>
        </div>

        {/* Flagship Product Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Flagship Product
            </span>
            <h3 className="text-3xl font-bold">Our First Product: Doyin</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A campus-based e-commerce platform that demonstrates our capability to build consumer-focused, scalable solutions with significant market impact.
            </p>
          </div>

          <div className="flex justify-center">
            {products.map((product) => (
              <div
                key={product.name}
                className="group w-full max-w-4xl bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left: Splash Screen */}
                  <div className="flex justify-center items-center p-8 bg-gradient-to-b from-card to-background/50">
                    <div className="relative w-40 h-80">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Splash-qXeJaQf5QLLxOxwoDFawAMRg1zTPjp.png"
                        alt="Doyin App Splash Screen"
                        fill
                        className="rounded-lg shadow-lg object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Right: Product Details */}
                  <div className="p-8 flex flex-col justify-center md:col-span-2">
                    {/* Product Icon/Header */}
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <div className="w-6 h-6 bg-primary rounded-md" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">{product.name}</h3>
                      <p className="text-primary text-sm font-medium mt-2">Campus E-Commerce Platform</p>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 mb-6 text-lg">{product.description}</p>

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
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                    >
                      Download App
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Products */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Product Pipeline
            </span>
            <h3 className="text-3xl font-bold">More Products Coming</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We&apos;re actively developing a suite of products across payments infrastructure, merchant tools, enterprise SaaS, and digital services. 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-background border border-primary/30 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">💳</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Financial Services</h4>
              <p className="text-foreground/70">
                Payment infrastructure and fintech solutions for African markets
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-background border border-primary/30 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">📊</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Merchant SaaS</h4>
              <p className="text-foreground/70">
                Business management tools and analytics for SMEs and merchants
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-background border border-primary/30 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🚀</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Enterprise Solutions</h4>
              <p className="text-foreground/70">
                Custom software and digital transformation services for large organizations
              </p>
            </div>
          </div>
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
