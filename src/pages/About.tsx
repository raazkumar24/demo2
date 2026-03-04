import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Target,
  Eye,
  Shield,
  Award,
  Clock,
  Heart,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'Every program, every class, every session is designed to deliver measurable results.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'Your well-being is our priority. We maintain the highest safety standards across all facilities.',
  },
  {
    icon: Heart,
    title: 'Community Focus',
    description:
      'We foster a supportive environment where members motivate and inspire each other.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'From equipment to trainers, we never compromise on quality.',
  },
];

const facilities = [
  {
    title: 'Strength Training Zone',
    description:
      'Over 5,000 sq ft dedicated to strength training with premium equipment from Life Fitness, Hammer Strength, and Rogue.',
    features: [
      'Free weights up to 150kg',
      'Power racks and squat cages',
      'Cable machines and pulleys',
      'Dumbbells from 2.5kg to 60kg',
    ],
    image: '/images/gallery1.jpg',
  },
  {
    title: 'Cardio Arena',
    description:
      'State-of-the-art cardio equipment with personal entertainment screens and heart rate monitoring.',
    features: [
      'Treadmills with virtual running routes',
      'Elliptical trainers and stair climbers',
      'Rowing machines and assault bikes',
      'Dedicated HIIT zone',
    ],
    image: '/images/why_gym_bg.jpg',
  },
  {
    title: 'Olympic Swimming Pool',
    description:
      '25-meter temperature-controlled pool with 6 lanes, perfect for both casual swimming and competitive training.',
    features: [
      'Temperature maintained at 27-29°C',
      'Daily water quality testing',
      'Professional lifeguards on duty',
      'Separate changing rooms',
    ],
    image: '/images/hero_pool_bg.jpg',
  },
];

const hygieneStandards = [
  'Equipment sanitized after every use',
  'Deep cleaning of all areas twice daily',
  'Pool water tested and treated every 4 hours',
  'Air purification systems throughout',
  'Hand sanitizer stations at multiple locations',
  'Regular pest control and maintenance',
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const hygieneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.about-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      // Story section
      gsap.fromTo(
        '.story-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Mission/Vision cards
      gsap.fromTo(
        '.mission-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Values
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Facilities
      gsap.fromTo(
        '.facility-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: facilitiesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Hygiene
      gsap.fromTo(
        '.hygiene-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hygieneRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero_gym_bg.jpg"
            alt="About Your GYM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0B0D]/80" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center about-hero-content">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              About Us
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-[0.9] tracking-tight mb-6">
              Our <span className="text-gradient">Story</span>
            </h1>
            <div className="gradient-rule w-24 mx-auto mb-6" />
            <p className="text-[#B8BCC8] text-lg max-w-2xl mx-auto">
              Building a healthier Chandigarh, one member at a time since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="story-content">
                <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                  Our Journey
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                  From a Dream to{' '}
                  <span className="text-gradient">Chandigarh&apos;s Finest</span>
                </h2>
                <div className="space-y-4 text-[#B8BCC8] leading-relaxed">
                  <p>
                    Your GYM was born from a simple belief: everyone deserves
                    access to world-class fitness facilities. Founded in 2018 by
                    fitness enthusiasts Rahul and Priya Sharma, we started with a
                    modest 3,000 sq ft gym and a vision to transform how
                    Chandigarh approaches health and wellness.
                  </p>
                  <p>
                    What began as a small community gym has grown into a
                    25,000 sq ft premium fitness destination, complete with an
                    Olympic-style swimming pool, state-of-the-art equipment, and
                    a team of 20+ certified trainers. But despite our growth, our
                    core mission remains unchanged—to provide a supportive
                    environment where every member can achieve theiYour GYM
                    goals.
                  </p>
                  <p>
                    Today, Your GYM is home to over 5,000 active members, from
                    beginners taking their first steps into fitness to
                    professional athletes preparing for competition. Our success
                    stories include weight loss transformations, strength gains,
                    and countless members who have made fitness a permanent part
                    of their lives.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/images/why_gym_card.jpg"
                    alt="Our Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#141419] border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-3xl text-white">
                        6+
                      </p>
                      <p className="text-[#B8BCC8] text-sm">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                Our Purpose
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Mission & <span className="text-gradient">Vision</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="mission-card bg-[#0B0B0D] border border-white/5 rounded-2xl p-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#E11D2E]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-[#B8BCC8] leading-relaxed">
                  To empower individuals to achieve their fullest potential
                  through fitness by providing world-class facilities, expert
                  guidance, and a supportive community that inspires lasting
                  lifestyle changes.
                </p>
              </div>

              <div className="mission-card bg-[#0B0B0D] border border-white/5 rounded-2xl p-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#E11D2E]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-[#B8BCC8] leading-relaxed">
                  To be the leading fitness destination in North India, known
                  for transforming lives through innovative training programs,
                  cutting-edge facilities, and an unwavering commitment to our
                  members&apos; success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                What We Stand For
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Our Core <span className="text-gradient">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="value-card bg-[#141419] border border-white/5 rounded-xl p-6 hover:border-[#E11D2E]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#E11D2E]" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#B8BCC8] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section ref={facilitiesRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                Our Infrastructure
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                World-Class <span className="text-gradient">Facilities</span>
              </h2>
            </div>

            <div className="space-y-16">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`facility-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-video rounded-2xl overflow-hidden">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="font-display font-bold text-2xl text-white mb-4">
                      {facility.title}
                    </h3>
                    <p className="text-[#B8BCC8] leading-relaxed mb-6">
                      {facility.description}
                    </p>
                    <ul className="space-y-3">
                      {facility.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-[#E11D2E] flex-shrink-0" />
                          <span className="text-[#B8BCC8]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene & Safety */}
      <section ref={hygieneRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                  Your Safety Matters
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                  Hygiene & <span className="text-gradient">Safety</span>{' '}
                  Standards
                </h2>
                <p className="text-[#B8BCC8] leading-relaxed mb-8">
                  We maintain the highest standards of cleanliness and safety
                  across all our facilities. Your health and well-being are our
                  top priorities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hygieneStandards.map((standard, index) => (
                    <div key={index} className="hygiene-item flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#E11D2E] flex-shrink-0" />
                      <span className="text-[#B8BCC8] text-sm">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/images/gallery4.jpg"
                    alt="Clean Facilities"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-accent rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-3xl text-white">
                        100%
                      </p>
                      <p className="text-white/80 text-sm">Safety Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
