'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Lightbulb,
  Globe,
  Shield,
  Zap,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Structured Data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PT GLOBAL INOVATIF INDONESIA",
      "alternateName": "Global Inovatif Indonesia",
      "url": "https://globalinovatif.co.id",
      "logo": "https://globalinovatif.co.id/logo.png",
      "description": "Leading innovation company in Indonesia providing comprehensive business solutions, digital transformation, and technology integration services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "18 Office Park 10th A Floor, Jl. TB Simatupang No 18",
        "addressLocality": "Jakarta Selatan",
        "addressRegion": "DKI Jakarta",
        "postalCode": "12520",
        "addressCountry": "ID"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+62-823-1204-2902",
        "contactType": "customer service",
        "availableLanguage": ["Indonesian", "English"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/pt-global-inovatif-indonesia"
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation Consulting",
      description: "Strategic consulting to drive digital transformation and innovation initiatives"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Solutions",
      description: "International market expansion and cross-border business development"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for sustainable growth"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Technology Integration",
      description: "Cutting-edge technology solutions to optimize business operations"
    }
  ]

  const benefits = [
    "Expert consultation with industry specialists",
    "Customized solutions tailored to your needs",
    "Proven track record of successful projects",
    "24/7 support and maintenance services",
    "Competitive pricing and flexible packages",
    "International standards and best practices"
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Consultants" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="PT Global Inovatif Indonesia" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  PT GLOBAL INOVATIF INDONESIA
                </h1>
                <p className="text-xs text-gray-600">Innovation Beyond Boundaries</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Get Started
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🚀 Leading Innovation Company
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transforming Ideas Into
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}Global Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                <span className="font-semibold text-blue-600">PT GLOBAL INOVATIF INDONESIA</span> is your trusted partner 
                for innovative business solutions, driving growth and digital transformation across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-3"></div>
              <Card className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-0">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-blue-600">PT GLOBAL INOVATIF INDONESIA</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience in the industry, we have established ourselves as a leader 
                in providing innovative solutions that drive business success and sustainable growth.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl"></div>
              <Card className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Expert Team</h3>
                      <p className="text-gray-600">50+ professional consultants</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Proven Results</h3>
                      <p className="text-gray-600">98% client satisfaction rate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Lightbulb className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Innovation First</h3>
                      <p className="text-gray-600">Cutting-edge solutions</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help you achieve your business goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+62 823-1204-2902</p>
            </Card>

            <Card className="p-6 text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@globalinovatif.co.id</p>
            </Card>

            <Card className="p-6 text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600 text-sm">
                18 Office Park 10th A Floor<br />
                Jl. TB Simatupang No 18<br />
                Jakarta Selatan 12520
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="PT Global Inovatif Indonesia" className="h-8 w-auto" />
                <h3 className="text-xl font-bold">PT GLOBAL INOVATIF INDONESIA</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for innovative business solutions and digital transformation.
              </p>
              <p className="text-gray-400 text-sm">
                Innovation Beyond Boundaries
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT GLOBAL INOVATIF INDONESIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}