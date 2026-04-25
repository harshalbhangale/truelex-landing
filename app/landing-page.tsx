'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Brain, Shield, Users, BookOpen, BarChart3, TrendingUp, FileCheck, Clock, Award } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Drafting",
      description: "Leverage cutting-edge AI to draft contracts, agreements, and legal documents with unprecedented speed and accuracy.",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Stay ahead of regulatory requirements with automated compliance tracking and intelligent deadline monitoring.",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team in real-time with advanced permission controls and workflow management.",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      icon: BookOpen,
      title: "Legal Research",
      description: "Access comprehensive legal precedents, case law, and research materials tailored for Indian jurisprudence.",
      gradient: "from-orange-400 to-amber-400"
    },
    {
      icon: BarChart3,
      title: "M&A Due Diligence",
      description: "Conduct thorough due diligence for mergers and acquisitions with AI-powered analytics and risk assessment.",
      gradient: "from-indigo-400 to-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Gain actionable insights from your legal data with intelligent reporting and predictive analytics.",
      gradient: "from-rose-400 to-pink-400"
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹8,999",
      period: "/month",
      description: "Perfect for solo practitioners and small firms",
      features: [
        "Up to 10 contracts per month",
        "Basic AI drafting assistance",
        "5GB secure cloud storage",
        "Email support",
        "Basic legal templates"
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "₹24,999",
      period: "/month",
      description: "Ideal for growing law firms",
      features: [
        "Unlimited contracts",
        "Advanced AI capabilities",
        "100GB secure storage",
        "Up to 5 team members",
        "Priority support",
        "Advanced analytics",
        "Custom templates",
        "Compliance tracking"
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security features",
        "24/7 phone support",
        "Custom training",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const stats = [
    { value: "500+", label: "Law Firms" },
    { value: "10,000+", label: "Documents Generated" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "45sec", label: "Avg. Draft Time" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <Image
                    src="/logo.png"
                    alt="TrueLex Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 relative z-10 drop-shadow-lg transform group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    TrueLex
                  </span>
                  <span className="text-xs text-slate-500 font-medium -mt-1">Legal Practice Management</span>
                </div>
              </Link>

              <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-8">
                  <Link href="#features" className="text-slate-700 hover:text-blue-600 transition font-medium">
                    Features
                  </Link>
                  <Link href="#pricing" className="text-slate-700 hover:text-blue-600 transition font-medium">
                    Pricing
                  </Link>
                  <Link href="#" className="text-slate-700 hover:text-blue-600 transition font-medium">
                    About
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://app.truelex.xyz"
                    className="text-slate-700 hover:text-blue-600 transition font-medium"
                  >
                    Sign In
                  </a>
                  <a
                    href="https://app.truelex.xyz"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-700">
                    Trusted by 500+ Legal Professionals
                  </span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="text-slate-900">Modern Legal</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Practice Management
                    </span>
                    <br />
                    <span className="text-slate-900">for India</span>
                  </h1>

                  <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                    Streamline your legal practice with AI-powered contract drafting, compliance tracking,
                    and intelligent due diligence. Built specifically for Indian law firms.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.truelex.xyz"
                    className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all">
                    Schedule Demo
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                      <Award className="w-3 h-3 text-purple-600" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">Cancel anytime</span>
                  </div>
                </div>
              </div>

              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200/50">
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 transform hover:scale-105 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                            <FileCheck className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-slate-900">Document Generated</span>
                        </div>
                        <p className="text-sm text-blue-600 font-semibold">Non-Disclosure Agreement (NDA)</p>
                        <p className="text-xs text-slate-500 mt-1">Completed in 45 seconds with India-specific clauses</p>
                        <div className="mt-3 flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                          </div>
                          <span className="text-xs font-semibold text-blue-600">100%</span>
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 transform hover:scale-105 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-slate-900">Compliance Alert</span>
                        </div>
                        <p className="text-sm text-purple-600 font-semibold">GST Return Filing Due</p>
                        <p className="text-xs text-slate-500 mt-1">Statutory deadline tracked automatically</p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs font-semibold text-purple-600">Due in 7 days</span>
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 transform hover:scale-105 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                            <BarChart3 className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-slate-900">Due Diligence Report</span>
                        </div>
                        <p className="text-sm text-green-600 font-semibold">M&A Analysis Complete</p>
                        <p className="text-xs text-slate-500 mt-1">Analyzed in minutes with AI-powered insights</p>
                        <div className="mt-3">
                          <span className="text-xs font-semibold text-green-600">Ready for review</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                        <div className="text-xs text-slate-500 font-medium mt-1">Active Firms</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10K+</div>
                        <div className="text-xs text-slate-500 font-medium mt-1">Documents</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">99.9%</div>
                        <div className="text-xs text-slate-500 font-medium mt-1">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-2">
                <span className="text-sm font-semibold text-slate-700">Comprehensive Legal Platform</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Everything You Need to
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Run a Modern Law Firm
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Powerful features designed to streamline your legal practice and enhance productivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
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

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-2">
                <span className="text-sm font-semibold text-slate-700">Flexible Pricing</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Choose the Right Plan
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  for Your Practice
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Transparent pricing with no hidden fees. Start with a 14-day free trial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-transparent shadow-2xl scale-105 text-white'
                      : 'bg-white/80 border-2 border-slate-200 hover:shadow-xl hover:border-slate-300'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4">
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <div className={`text-4xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </div>
                    <div className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-500'}`}>
                      {plan.period}
                    </div>
                  </div>

                  <a
                    href="https://app.truelex.xyz"
                    className={`block w-full py-3 rounded-xl font-semibold transition-all mb-8 text-center ${
                      plan.highlighted
                        ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'bg-white/20' : 'bg-green-100'
                        }`}>
                          <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-green-600'}`} />
                        </div>
                        <span className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Ready to Transform Your
                  <br />
                  Legal Practice?
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Join 500+ law firms already using TrueLex to streamline their workflow and enhance productivity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="https://app.truelex.xyz"
                    className="group px-10 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
                  >
                    Start Your Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="px-10 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-all">
                    Schedule a Demo
                  </button>
                </div>

                <p className="text-sm text-blue-100">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/logo.png" alt="TrueLex Logo" width={32} height={32} className="w-8 h-8" />
                  <div>
                    <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TrueLex</span>
                    <div className="text-xs text-slate-500">Legal Practice Management</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  AI-powered legal practice management platform for modern law firms in India.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li><Link href="#features" className="hover:text-blue-600 transition">Features</Link></li>
                  <li><Link href="#pricing" className="hover:text-blue-600 transition">Pricing</Link></li>
                  <li><Link href="#" className="hover:text-blue-600 transition">Security</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li><Link href="#" className="hover:text-blue-600 transition">About</Link></li>
                  <li><Link href="#" className="hover:text-blue-600 transition">Blog</Link></li>
                  <li><Link href="#" className="hover:text-blue-600 transition">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li><Link href="#" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-blue-600 transition">Terms of Service</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © 2024 TrueLex. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="#" className="text-slate-400 hover:text-blue-600 transition text-sm">Twitter</Link>
                <Link href="#" className="text-slate-400 hover:text-blue-600 transition text-sm">LinkedIn</Link>
                <Link href="#" className="text-slate-400 hover:text-blue-600 transition text-sm">GitHub</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
