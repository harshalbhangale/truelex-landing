'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Scale, FileText, Users, Shield, TrendingUp, Sparkles } from "lucide-react";
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
      description: "Generate sophisticated legal documents in minutes with our advanced AI that understands Indian law and legal precedents."
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
      description: "Perfect for individual lawyers starting their digital journey",
      features: [
        "10 AI-drafted documents per month",
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
      description: "Ideal for established practices seeking efficiency",
      features: [
        "Unlimited AI document generation",
        "Advanced compliance management",
        "100GB secure storage",
        "Up to 5 team members",
        "Priority support & training",
        "Custom template builder",
        "Advanced analytics dashboard"
      ],
      cta: "Get Started Today",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with specific needs",
      features: [
        "Everything in Growing Firm",
        "Unlimited team members",
        "Custom API integrations",
        "Dedicated account manager",
        "Advanced security & compliance",
        "24/7 phone support",
        "Bespoke training programs"
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="TrueLex"
                width={44}
                height={44}
                className="w-11 h-11 drop-shadow-lg transform group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-slate-900">
                  TrueLex
                </span>
                <span className="text-xs text-slate-600 font-medium tracking-wide">LEGAL PRACTICE MANAGEMENT</span>
              </div>
            </Link>

            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-8">
                <Link href="#features" className="text-slate-700 hover:text-slate-900 transition font-medium">
                  Features
                </Link>
                <Link href="#testimonials" className="text-slate-700 hover:text-slate-900 transition font-medium">
                  Testimonials
                </Link>
                <Link href="#pricing" className="text-slate-700 hover:text-slate-900 transition font-medium">
                  Pricing
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://app.truelex.xyz"
                  className="text-slate-700 hover:text-slate-900 transition font-medium"
                >
                  Sign In
                </a>
                <a
                  href="https://app.truelex.xyz"
                  className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/landing-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8 pt-12">
            {/* Badge */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50 border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-serif font-semibold text-amber-900">
                  Trusted by 500+ Legal Professionals Across India
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Excellence in Legal
                <br />
                <span className="text-slate-700 italic">Practice Management</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
                Harness the power of artificial intelligence to streamline your legal practice.
                Draft contracts, manage compliance, and conduct due diligence with unprecedented efficiency.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href="https://app.truelex.xyz"
                className="group px-10 py-4 rounded-lg bg-slate-900 text-white font-serif text-lg font-semibold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-10 py-4 rounded-lg border-2 border-slate-300 text-slate-900 font-serif text-lg font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all">
                Schedule Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap items-center justify-center gap-8 pt-8 text-sm transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-600">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-600">14-day complimentary trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-600">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-400">Law Firms</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-white mb-2">10,000+</div>
              <div className="text-slate-400">Documents Generated</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-white mb-2">45sec</div>
              <div className="text-slate-400">Average Draft Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every tool you need to operate a modern, efficient legal practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900">
              What Legal Professionals Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from lawyers who have transformed their practice with TrueLex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-serif font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.firm}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900">
              Transparent, Fair Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that best suits your practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-slate-900 text-white shadow-2xl scale-105 border-4 border-slate-900'
                    : 'bg-slate-50 border-2 border-slate-200 hover:shadow-lg hover:border-slate-300'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-6">
                    <span className="inline-block px-4 py-1 rounded-full bg-white text-slate-900 text-sm font-bold">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`font-serif text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className={`font-serif text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <div className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-600'}`}>
                    {plan.period}
                  </div>
                </div>

                <a
                  href="https://app.truelex.xyz"
                  className={`block w-full py-3 rounded-lg font-serif font-semibold transition-all mb-8 text-center ${
                    plan.highlighted
                      ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </a>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-white' : 'text-emerald-600'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-slate-200' : 'text-slate-700'}`}>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your
            <br />
            <span className="italic">Legal Practice?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join hundreds of law firms already using TrueLex to deliver exceptional legal services with unprecedented efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://app.truelex.xyz"
              className="group px-10 py-4 rounded-lg bg-white text-slate-900 font-serif text-lg font-semibold hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-10 py-4 rounded-lg border-2 border-white text-white font-serif text-lg font-semibold hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </div>

          <p className="text-sm text-slate-400 pt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="TrueLex" width={32} height={32} className="w-8 h-8" />
                <div>
                  <span className="font-serif text-lg font-bold text-slate-900">TrueLex</span>
                  <div className="text-xs text-slate-600">Legal Practice Management</div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                AI-powered legal practice management platform for modern law firms in India.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><Link href="#features" className="hover:text-slate-900 transition">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-slate-900 transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition">Security</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><Link href="#" className="hover:text-slate-900 transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><Link href="#" className="hover:text-slate-900 transition">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © 2024 TrueLex. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-500 hover:text-slate-900 transition text-sm">Twitter</Link>
              <Link href="#" className="text-slate-500 hover:text-slate-900 transition text-sm">LinkedIn</Link>
              <Link href="#" className="text-slate-500 hover:text-slate-900 transition text-sm">Instagram</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
