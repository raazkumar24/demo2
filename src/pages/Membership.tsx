import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Check,
  X,
  HelpCircle,
  ArrowRight,
  Star,
  Zap,
  Crown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Basic',
    icon: Star,
    description: 'Perfect for beginners starting their fitness journey',
    monthlyPrice: 1999,
    quarterlyPrice: 4999,
    annualPrice: 16999,
    popular: false,
    features: [
      { text: 'Gym Access (5 AM - 11 PM)', included: true },
      { text: 'Cardio & Strength Equipment', included: true },
      { text: 'Locker Room Access', included: true },
      { text: 'Free Parking', included: true },
      { text: '2 Personal Training Sessions', included: true },
      { text: 'Swimming Pool Access', included: false },
      { text: 'Group Classes', included: false },
      { text: 'Nutrition Consultation', included: false },
    ],
  },
  {
    name: 'Premium',
    icon: Zap,
    description: 'Our most popular plan for serious fitness enthusiasts',
    monthlyPrice: 3499,
    quarterlyPrice: 8999,
    annualPrice: 29999,
    popular: true,
    features: [
      { text: 'Gym Access (5 AM - 11 PM)', included: true },
      { text: 'Cardio & Strength Equipment', included: true },
      { text: 'Locker Room Access', included: true },
      { text: 'Free Parking', included: true },
      { text: '8 Personal Training Sessions', included: true },
      { text: 'Swimming Pool Access', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'Nutrition Consultation', included: false },
    ],
  },
  {
    name: 'Elite',
    icon: Crown,
    description: 'The ultimate fitness experience with all-inclusive benefits',
    monthlyPrice: 5499,
    quarterlyPrice: 13999,
    annualPrice: 44999,
    popular: false,
    features: [
      { text: 'Gym Access (5 AM - 11 PM)', included: true },
      { text: 'Cardio & Strength Equipment', included: true },
      { text: 'Premium Locker Room Access', included: true },
      { text: 'Priority Parking', included: true },
      { text: 'Unlimited Personal Training', included: true },
      { text: 'Swimming Pool Access', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'Monthly Nutrition Consultation', included: true },
    ],
  },
];

const comparisonFeatures = [
  { name: 'Gym Access', basic: true, premium: true, elite: true },
  { name: 'Cardio Equipment', basic: true, premium: true, elite: true },
  { name: 'Strength Equipment', basic: true, premium: true, elite: true },
  { name: 'Locker Room', basic: true, premium: true, elite: 'Premium' },
  { name: 'Parking', basic: true, premium: true, elite: 'Priority' },
  { name: 'Swimming Pool', basic: false, premium: true, elite: true },
  { name: 'Group Classes', basic: false, premium: 'Unlimited', elite: 'Unlimited' },
  { name: 'Personal Training', basic: '2/Month', premium: '8/Month', elite: 'Unlimited' },
  { name: 'Nutrition Guidance', basic: false, premium: false, elite: true },
  { name: 'Guest Passes', basic: false, premium: '2/Month', elite: '4/Month' },
  { name: 'Towel Service', basic: false, premium: true, elite: true },
  { name: 'Sauna Access', basic: false, premium: true, elite: true },
];

const faqs = [
  {
    question: 'Is there a joining fee?',
    answer:
      'No joining fee for annual plans. For monthly and quarterly plans, a one-time registration fee of ₹500 applies.',
  },
  {
    question: 'Can I freeze my membership?',
    answer:
      'Yes, you can freeze your membership for up to 30 days per year with prior notice. Medical freezes are allowed for up to 90 days with documentation.',
  },
  {
    question: 'What are the payment options?',
    answer:
      'We accept all major credit/debit cards, UPI, net banking, and cash. EMI options are available for annual memberships.',
  },
  {
    question: 'Can I upgrade my plan?',
    answer:
      'Absolutely! You can upgrade your plan at any time. The price difference will be calculated on a pro-rata basis.',
  },
  {
    question: 'Is there a cancellation policy?',
    answer:
      'Monthly plans can be cancelled with 15 days notice. Quarterly and annual plans have a 30-day cancellation period. Refunds are processed as per our terms.',
  },
  {
    question: 'Do you offer corporate discounts?',
    answer:
      'Yes, we offer special corporate rates for companies with 10+ employees. Contact our sales team for more details.',
  },
];

const benefits = [
  'No long-term contracts required',
  'Free fitness assessment on joining',
  'Access to all gym locations',
  'Complimentary workout towel',
  'Free Wi-Fi throughout the facility',
  '24/7 security and CCTV surveillance',
];

export default function Membership() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');
  const heroRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.membership-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.pricing-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pricingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.comparison-table',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: comparisonRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.benefit-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.faq-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const getPrice = (plan: typeof plans[0]) => {
    switch (billingCycle) {
      case 'monthly':
        return plan.monthlyPrice;
      case 'quarterly':
        return plan.quarterlyPrice;
      case 'annual':
        return plan.annualPrice;
      default:
        return plan.monthlyPrice;
    }
  };

  const getCycleLabel = () => {
    switch (billingCycle) {
      case 'monthly':
        return '/mo';
      case 'quarterly':
        return '/3mo';
      case 'annual':
        return '/yr';
      default:
        return '/mo';
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0">
          <img
            src="/images/memberships_bg.jpg"
            alt="Membership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0B0D]/85" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center membership-hero-content">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Memberships
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-[0.9] tracking-tight mb-6">
              Choose Your <span className="text-gradient">Plan</span>
            </h1>
            <div className="gradient-rule w-24 mx-auto mb-6" />
            <p className="text-[#B8BCC8] text-lg max-w-2xl mx-auto">
              Flexible membership options designed to fit your lifestyle and
              fitness goals. No hidden fees, no long-term contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-[#141419] rounded-xl p-1.5">
                {(['monthly', 'quarterly', 'annual'] as const).map((cycle) => (
                  <button
                    key={cycle}
                    onClick={() => setBillingCycle(cycle)}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                      billingCycle === cycle
                        ? 'bg-gradient-accent text-white'
                        : 'text-[#B8BCC8] hover:text-white'
                    }`}
                  >
                    {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                    {cycle === 'annual' && (
                      <span className="ml-2 text-xs opacity-80">Save 30%</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`pricing-card relative bg-[#141419] border rounded-2xl p-8 ${
                    plan.popular
                      ? 'border-[#E11D2E] scale-105 z-10'
                      : 'border-white/5'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-accent text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                        plan.popular
                          ? 'bg-gradient-accent'
                          : 'bg-gradient-accent/10'
                      }`}
                    >
                      <plan.icon
                        className={`w-8 h-8 ${
                          plan.popular ? 'text-white' : 'text-[#E11D2E]'
                        }`}
                      />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-[#B8BCC8] text-sm">{plan.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <span className="font-display font-black text-5xl text-white">
                      ₹{getPrice(plan).toLocaleString()}
                    </span>
                    <span className="text-[#B8BCC8]">{getCycleLabel()}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-[#E11D2E] flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-[#B8BCC8]/40 flex-shrink-0" />
                        )}
                        <span
                          className={
                            feature.included ? 'text-[#B8BCC8]' : 'text-[#B8BCC8]/40'
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button
                      className={`w-full py-6 font-semibold ${
                        plan.popular
                          ? 'bg-gradient-accent hover:opacity-90 text-white'
                          : 'bg-white/5 hover:bg-white/10 text-white'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={comparisonRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                Compare Plans
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Feature <span className="text-gradient">Comparison</span>
              </h2>
            </div>

            <div className="comparison-table overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white font-semibold">
                      Features
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold">
                      Basic
                    </th>
                    <th className="text-center py-4 px-4 text-[#E11D2E] font-semibold">
                      Premium
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold">
                      Elite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-4 px-4 text-[#B8BCC8]">{feature.name}</td>
                      <td className="text-center py-4 px-4">
                        {feature.basic === true ? (
                          <Check className="w-5 h-5 text-[#E11D2E] mx-auto" />
                        ) : feature.basic === false ? (
                          <X className="w-5 h-5 text-[#B8BCC8]/30 mx-auto" />
                        ) : (
                          <span className="text-[#B8BCC8] text-sm">
                            {feature.basic}
                          </span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4 bg-[#E11D2E]/5">
                        {feature.premium === true ? (
                          <Check className="w-5 h-5 text-[#E11D2E] mx-auto" />
                        ) : feature.premium === false ? (
                          <X className="w-5 h-5 text-[#B8BCC8]/30 mx-auto" />
                        ) : (
                          <span className="text-[#E11D2E] text-sm font-medium">
                            {feature.premium}
                          </span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {feature.elite === true ? (
                          <Check className="w-5 h-5 text-[#E11D2E] mx-auto" />
                        ) : feature.elite === false ? (
                          <X className="w-5 h-5 text-[#B8BCC8]/30 mx-auto" />
                        ) : (
                          <span className="text-[#B8BCC8] text-sm">
                            {feature.elite}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                  Member Benefits
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                  What You <span className="text-gradient">Get</span>
                </h2>
                <p className="text-[#B8BCC8] leading-relaxed mb-8">
                  Every membership at R Fitness comes with a range of benefits
                  designed to enhance your fitness experience and help you
                  achieve your goals faster.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#E11D2E] flex-shrink-0" />
                      <span className="text-[#B8BCC8]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="/images/group_class_card.jpg"
                    alt="Member Benefits"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                Got Questions?
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <div className="faq-content">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-[#0B0B0D] border border-white/5 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-[#E11D2E] text-left py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#B8BCC8] pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-[#0B0B0D] border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex items-center gap-2 text-[#B8BCC8] hover:text-white transition-colors">
                  <HelpCircle className="w-5 h-5" />
                  <span>View Terms & Conditions</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#141419] border-white/10 max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-white text-2xl">
                    Terms & Conditions
                  </DialogTitle>
                  <DialogDescription className="text-[#B8BCC8]">
                    Please read these terms carefully before purchasing a
                    membership.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-[#B8BCC8] text-sm mt-4">
                  <p>
                    <strong className="text-white">1. Membership Eligibility:</strong>{' '}
                    Members must be 16 years or older. Those under 18 require
                    parental consent.
                  </p>
                  <p>
                    <strong className="text-white">2. Payment Terms:</strong>{' '}
                    All fees must be paid in advance. Failed payments may result
                    in membership suspension.
                  </p>
                  <p>
                    <strong className="text-white">3. Cancellation Policy:</strong>{' '}
                    Monthly plans require 15 days notice. Quarterly and annual
                    plans require 30 days notice.
                  </p>
                  <p>
                    <strong className="text-white">4. Freeze Policy:</strong>{' '}
                    Memberships can be frozen for up to 30 days per year with
                    prior notice.
                  </p>
                  <p>
                    <strong className="text-white">5. Code of Conduct:</strong>{' '}
                    Members must follow gym rules and maintain appropriate
                    behavior. Violations may result in termination.
                  </p>
                  <p>
                    <strong className="text-white">6. Liability:</strong>{' '}
                    R Fitness is not liable for personal injuries or lost
                    belongings. Members workout at their own risk.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center cta-content">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-[#B8BCC8] text-lg leading-relaxed mb-10">
              Join thousands of members who have transformed their lives at R
              Fitness. Take the first step today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-10 py-6"
                >
                  Join Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-10 py-6"
                >
                  Book a Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
