'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how <span className="font-semibold text-blue-600">PT GLOBAL INOVATIF INDONESIA</span> collects, uses, and protects your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At <span className="font-semibold text-blue-600">PT GLOBAL INOVATIF INDONESIA</span>, we are committed to protecting your personal information and respecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                  use our services, or interact with our company.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Name and contact details (email, phone number, address)</li>
                      <li>Company information and job title</li>
                      <li>Communication preferences</li>
                      <li>Account credentials and authentication data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>IP address and device information</li>
                      <li>Browser type and operating system</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Usage data and interaction patterns</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Information</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Company size and industry sector</li>
                      <li>Business requirements and project details</li>
                      <li>Financial information for billing purposes</li>
                      <li>Service usage and performance metrics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full mt-1">
                        <UserCheck className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Service Delivery</h4>
                        <p className="text-gray-600 text-sm">To provide and maintain our services</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-full mt-1">
                        <UserCheck className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Communication</h4>
                        <p className="text-gray-600 text-sm">To respond to your inquiries and requests</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 p-2 rounded-full mt-1">
                        <UserCheck className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Marketing</h4>
                        <p className="text-gray-600 text-sm">To send relevant updates and promotions</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-100 p-2 rounded-full mt-1">
                        <UserCheck className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Improvement</h4>
                        <p className="text-gray-600 text-sm">To enhance our products and services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Protection Measures</h2>
                </div>
                
                <p className="text-gray-600 mb-6">
                  <span className="font-semibold text-blue-600">PT GLOBAL INOVATIF INDONESIA</span> implements robust security measures to protect your information:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Security</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• Secure authentication systems</li>
                      <li>• Regular security audits and updates</li>
                      <li>• Firewall and intrusion detection</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Organizational Security</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Employee training on data protection</li>
                      <li>• Access control and authorization</li>
                      <li>• Confidentiality agreements</li>
                      <li>• Data minimization principles</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-6">
                  Under applicable data protection laws, you have the following rights:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Access and Correction</h4>
                    <p className="text-gray-600 text-sm">Request access to or correction of your personal information</p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Data Portability</h4>
                    <p className="text-gray-600 text-sm">Request transfer of your data to another service provider</p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Objection and Restriction</h4>
                    <p className="text-gray-600 text-sm">Object to or restrict processing of your information</p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Deletion</h4>
                    <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or how we handle your information, 
                  please contact us:
                </p>

                <div className="bg-white p-6 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-900">Company:</span>
                      <span className="text-gray-600 ml-2">PT GLOBAL INOVATIF INDONESIA</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Email:</span>
                      <span className="text-gray-600 ml-2">privacy@globalinovatif.co.id</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Phone:</span>
                      <span className="text-gray-600 ml-2">+62 823-1204-2902</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Address:</span>
                      <span className="text-gray-600 ml-2">
                        18 Office Park 10th A Floor, Jl. TB Simatupang No 18, 
                        Jakarta Selatan 12520, Indonesia
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2024 PT GLOBAL INOVATIF INDONESIA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}