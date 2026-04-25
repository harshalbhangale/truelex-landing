'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, FileText, Shield, Users, Scale, TrendingUp, Sparkles, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: FileText,
      title: "AI-Powered Contract Drafting",
      description: "Generate sophisticated legal documents in minutes with advanced AI that understands Indian law and legal precedents."
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Stay ahead of regulatory requirements with automated tracking and intelligent alerts for statutory deadlines."
    },
    {
      icon: Users,
      title: "Seamless Collaboration",
      description: "Work together efficiently with your team through real-time collaboration and advanced permission controls."
    },
    {
      icon: Scale,
      title: "Legal Research",
      description: "Access comprehensive case law database and precedents tailored specifically for Indian jurisprudence."
    },
    {
      icon: TrendingUp,
      title: "M&A Due Diligence",
      description: "Conduct thorough due diligence with AI-powered analytics that identify risks and opportunities instantly."
    },
    {
      icon: Sparkles,
      title: "Smart Automation",
      description: "Automate repetitive legal tasks and focus on strategic work that truly matters for your clients."
    },
  ];

  const testimonials = [
    {
      quote: "TrueLex has transformed how we handle contract drafting. What used to take hours now takes minutes.",
      author: "Advocate Priya Sharma",
      firm: "Sharma & Associates, Mumbai",
      rating: 5
    },
    {
      quote: "The compliance tracking feature alone has saved us from countless potential issues. Absolutely indispensable.",
      author: "Senior Partner Rajesh Kumar",
      firm: "Kumar Legal Services, Delhi",
      rating: 5
    },
    {
      quote: "An essential tool for modern legal practice. The AI drafting is remarkably accurate and India-focused.",
      author: "Advocate Meera Desai",
      firm: "Desai Law Chambers, Pune",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Solo Practitioner",
      price: "₹8,999",
      period: "/month",
      description: "Perfect for individual lawyers",
      features: [
        "10 AI-drafted documents/month",
        "Basic compliance tracking",
        "5GB secure cloud storage",
        "Email support",
        "Standard legal templates"
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Growing Firm",
      price: "₹24,999",
      period: "/month",
      description: "Ideal for established practices",
      features: [
        "Unlimited AI documents",
        "Advanced compliance management",
        "100GB secure storage",
        "Up to 5 team members",
        "Priority support",
        "Custom template builder",
        "Advanced analytics"
      ],
      cta: "Get Started Today",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations",
      features: [
        "Everything in Growing Firm",
        "Unlimited team members",
        "Custom API integrations",
        "Dedicated account manager",
        "Advanced security",
        "24/7 phone support",
        "Bespoke training"
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="TrueLex"
                width={40}
                height={40}
                className="w-10 h-10 drop-shadow-md transform group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-semibold text-gray-900">
                TrueLex
              </span>
            </Link>

            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-8">
                <Link href="#features" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
                  Features
                </Link>
                <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
                  Testimonials
                </Link>
                <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
                  Pricing
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://app.truelex.xyz"
                  className="text-gray-600 hover:text-gray-900 transition text-sm font-medium"
                >
                  Sign In
                </a>
                <a
                  href="https://app.truelex.xyz"
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/landing-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-purple-900/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className={`transition-all duration-1000 mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium text-white">
                  Trusted by 500+ Legal Professionals Across India
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Modern Legal Practice
                <br />
                Management for{' '}
                <span className="font-serif italic text-blue-200">India</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mb-10">
                Harness the power of AI to streamline your legal practice. Draft contracts, manage compliance, and conduct due diligence with unprecedented efficiency.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href="https://app.truelex.xyz"
                className="group px-8 py-4 rounded-lg bg-white text-blue-900 font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all">
                Schedule a Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap items-center gap-6 text-sm transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-blue-100">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-blue-100">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-blue-100">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Law Firms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-400 text-sm">Documents Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">45sec</div>
              <div className="text-gray-400 text-sm">Avg. Draft Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Everything You Need for a{' '}
              <span className="font-serif italic text-blue-600">Modern</span> Legal Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to streamline your workflow and enhance productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              What{' '}
              <span className="font-serif italic text-blue-600">Legal Professionals</span>
              {' '}Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from lawyers who have transformed their practice with TrueLex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.firm}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="font-serif italic text-blue-600">Transparent</span>, Fair Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best suits your practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white shadow-2xl scale-105 border-2 border-blue-600'
                    : 'bg-white border-2 border-gray-200 hover:shadow-lg hover:border-gray-300'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-6">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <div className={`text-sm ${plan.highlighted ? 'text-blue-200' : 'text-gray-600'}`}>
                    {plan.period}
                  </div>
                </div>

                <a
                  href="https://app.truelex.xyz"
                  className={`block w-full py-3 rounded-lg font-semibold transition-all mb-8 text-center ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </a>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-blue-200' : 'text-green-600'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to{' '}
            <span className="font-serif italic text-blue-200">Transform</span>
            {' '}Your Legal Practice?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join hundreds of law firms using TrueLex to deliver exceptional legal services with unprecedented efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://app.truelex.xyz"
              className="group px-10 py-4 rounded-lg bg-white text-blue-900 font-semibold hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-10 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </div>

          <p className="text-sm text-blue-200 pt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="TrueLex" width={32} height={32} className="w-8 h-8" />
                <span className="text-lg font-semibold text-gray-900">TrueLex</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI-powered legal practice management platform for modern law firms in India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="#features" className="hover:text-gray-900 transition">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-gray-900 transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition">Security</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="#" className="hover:text-gray-900 transition">About</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="#" className="hover:text-gray-900 transition">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 TrueLex. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-gray-900 transition text-sm">Twitter</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 transition text-sm">LinkedIn</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 transition text-sm">Instagram</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
