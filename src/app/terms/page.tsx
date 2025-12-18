'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel, Users } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to <span className="font-semibold text-blue-600">PT GLOBAL INOVATIF INDONESIA</span>. 
              These terms and conditions govern your use of our services and website.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using the services provided by <span className="font-semibold text-blue-600">PT GLOBAL INOVATIF INDONESIA</span>, 
                  you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
                  please do not use our services or website.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Services Description</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <span className="font-semibold text-blue-600">PT GLOBAL INOVATIF INDONESIA</span> provides innovative business solutions including:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Consulting Services</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Innovation consulting</li>
                        <li>• Digital transformation</li>
                        <li>• Strategic planning</li>
                        <li>• Process optimization</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Technology Solutions</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Software development</li>
                        <li>• System integration</li>
                        <li>• Cloud solutions</li>
                        <li>• Technical support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">As a user of our services, you agree to:</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full mt-1">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Provide Accurate Information</h4>
                        <p className="text-gray-600 text-sm">Ensure all information provided is true, accurate, and complete</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-full mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Maintain Security</h4>
                        <p className="text-gray-600 text-sm">Keep your account credentials secure and confidential</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 p-2 rounded-full mt-1">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Comply with Laws</h4>
                        <p className="text-gray-600 text-sm">Use our services in compliance with applicable laws and regulations</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-100 p-2 rounded-full mt-1">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Respect Intellectual Property</h4>
                        <p className="text-gray-600 text-sm">Respect copyrights, trademarks, and other intellectual property rights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Pricing and Payment</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>All fees for our services are quoted in Indonesian Rupiah (IDR)</li>
                      <li>Payment terms are specified in individual service agreements</li>
                      <li>Late payments may incur interest charges as permitted by law</li>
                      <li>All prices are exclusive of applicable taxes and duties</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Policy</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Refunds are evaluated on a case-by-case basis</li>
                      <li>Requests for refunds must be submitted within 30 days of service delivery</li>
                      <li>Refunds may be subject to administrative fees</li>
                      <li>Custom solutions and consulting services are generally non-refundable</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Gavel className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Intellectual Property Rights</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    All intellectual property rights in our services, including but not limited to software, 
                    documentation, designs, and methodologies, remain the property of 
                    <span className="font-semibold text-blue-600"> PT GLOBAL INOVATIF INDONESIA</span>.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Your Rights</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Limited, non-exclusive license to use our services</li>
                      <li>• Right to use deliverables as specified in service agreements</li>
                      <li>• Ability to provide feedback and suggestions for improvement</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Restrictions</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• No reverse engineering or decompilation of our software</li>
                      <li>• No redistribution or resale of our services</li>
                      <li>• No use of our trademarks without explicit permission</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    To the fullest extent permitted by law, <span className="font-semibold text-blue-600">PT GLOBAL INOVATIF INDONESIA</span> shall not be liable for:
                  </p>

                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Any indirect, incidental, special, or consequential damages</li>
                    <li>Loss of profits, revenue, data, or business opportunities</li>
                    <li>Damages arising from your use or inability to use our services</li>
                    <li>Damages resulting from unauthorized access to your account</li>
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> Our total liability under any circumstance shall not exceed 
                      the amount paid by you for the specific service giving rise to the claim.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Termination by User</h3>
                    <p className="text-gray-600">
                      You may terminate your use of our services at any time by providing written notice 
                      to <span className="font-semibold text-blue-600">PT GLOBAL INOVATIF INDONESIA</span>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Termination by Company</h3>
                    <p className="text-gray-600">
                      We reserve the right to suspend or terminate your access to our services if:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>You violate these terms and conditions</li>
                      <li>You engage in fraudulent or illegal activities</li>
                      <li>You fail to pay for services rendered</li>
                      <li>Your use poses a risk to our systems or other users</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    These Terms and Conditions shall be governed by and construed in accordance with 
                    the laws of the Republic of Indonesia.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Parties shall first attempt to resolve disputes amicably</li>
                      <li>• Unresolved disputes shall be subject to Indonesian jurisdiction</li>
                      <li>• Courts in Jakarta Selatan shall have exclusive jurisdiction</li>
                      <li>• Proceedings shall be conducted in the Indonesian language</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>

                <div className="bg-white p-6 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-900">Company:</span>
                      <span className="text-gray-600 ml-2">PT GLOBAL INOVATIF INDONESIA</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Email:</span>
                      <span className="text-gray-600 ml-2">legal@globalinovatif.co.id</span>
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

                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Agreement:</strong> By using our services, you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms and Conditions.
                  </p>
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