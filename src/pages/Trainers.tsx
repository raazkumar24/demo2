import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Award,
  Star,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Dumbbell,
  Heart,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const trainers = [
  {
    name: 'Rahul Sharma',
    role: 'Head Strength Coach',
    image: '/images/trainer1.jpg',
    experience: '12+ years',
    certifications: ['ACE Certified', 'NSCA-CPT', 'CrossFit L2'],
    specializations: [
      'Strength Training',
      'Powerlifting',
      'Bodybuilding',
      'Functional Fitness',
    ],
    bio: 'Rahul is a former national-level powerlifter with over a decade of experience in strength coaching. He has trained 500+ clients and specializes in helping people build strength and confidence.',
    transformations: 150,
    rating: 4.9,
  },
  {
    name: 'Priya Patel',
    role: 'SenioYour GYM Trainer',
    image: '/images/trainer2.jpg',
    experience: '8+ years',
    certifications: ['NASM-CPT', 'ACE Health Coach', 'Yoga Alliance RYT-200'],
    specializations: [
      'Weight Loss',
      'HIIT Training',
      'Yoga & Mobility',
      'Nutrition Planning',
    ],
    bio: 'Priya combines her background in yoga with modern fitness techniques to create holistic training programs. She has helped hundreds of clients achieve their weight loss goals sustainably.',
    transformations: 200,
    rating: 4.8,
  },
  {
    name: 'Vikram Singh',
    role: 'Performance Coach',
    image: '/images/trainer3.jpg',
    experience: '10+ years',
    certifications: ['NSCA-CSCS', 'USAW L1', 'Precision Nutrition L1'],
    specializations: [
      'Athletic Performance',
      'Olympic Lifting',
      'Sports Conditioning',
      'Injury Prevention',
    ],
    bio: 'Vikram has worked with professional athletes and sports teams. His expertise in sports science and performance training makes him the go-to coach for serious fitness enthusiasts.',
    transformations: 120,
    rating: 5.0,
  },
  {
    name: 'Ananya Gupta',
    role: 'Wellness & Mobility Coach',
    image: '/images/trainer4.jpg',
    experience: '6+ years',
    certifications: ['ACE-CPT', 'FMS L1', 'Pilates Mat Certified'],
    specializations: [
      'Mobility Training',
      'Pilates',
      'Post-Rehab Fitness',
      'Stress Management',
    ],
    bio: 'Ananya focuses on movement quality and overall wellness. She specializes in helping clients recover from injuries and improve their daily movement patterns for a pain-free life.',
    transformations: 180,
    rating: 4.9,
  },
];

const personalTrainingBenefits = [
  'Customized workout plans tailored to your goals',
  'One-on-one attention and form correction',
  'Nutrition guidance and meal planning',
  'Progress tracking and regular assessments',
  'Flexible scheduling to fit your lifestyle',
  'Accountability and motivation support',
];

const transformationStats = [
  { label: 'Total Transformations', value: '2,500+', icon: TrendingUp },
  { label: 'Active Clients', value: '650+', icon: Users },
  { label: 'Years Combined Experience', value: '36+', icon: Clock },
  { label: 'Certifications', value: '20+', icon: Award },
];

export default function Trainers() {
  const heroRef = useRef<HTMLDivElement>(null);
  const trainersRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.trainers-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.trainer-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: trainersRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0">
          <img
            src="/images/trainers_bg.jpg"
            alt="Our Trainers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0B0D]/80" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center trainers-hero-content">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Our Team
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-[0.9] tracking-tight mb-6">
              Expert <span className="text-gradient">Coaches</span>
            </h1>
            <div className="gradient-rule w-24 mx-auto mb-6" />
            <p className="text-[#B8BCC8] text-lg max-w-2xl mx-auto">
              Certified professionals dedicated to helping you achieve your
              fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-[#141419] border-b border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {transformationStats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card text-center p-6 bg-[#0B0B0D] border border-white/5 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-[#E11D2E]" />
                  </div>
                  <p className="font-display font-black text-3xl text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[#B8BCC8] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section ref={trainersRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                Meet The Team
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Our <span className="text-gradient">Trainers</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainers.map((trainer, index) => (
                <div
                  key={index}
                  className="trainer-card bg-[#141419] border border-white/5 rounded-2xl overflow-hidden hover:border-[#E11D2E]/30 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="aspect-[3/4] lg:aspect-auto">
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:col-span-2 p-6 lg:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-display font-bold text-xl text-white mb-1">
                            {trainer.name}
                          </h3>
                          <p className="text-[#E11D2E] text-sm font-medium">
                            {trainer.role}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 bg-[#0B0B0D] px-3 py-1.5 rounded-full">
                          <Star className="w-4 h-4 fill-[#FF6A2C] text-[#FF6A2C]" />
                          <span className="text-white text-sm font-medium">
                            {trainer.rating}
                          </span>
                        </div>
                      </div>

                      <p className="text-[#B8BCC8] text-sm leading-relaxed mb-4">
                        {trainer.bio}
                      </p>

                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#E11D2E]" />
                          <span className="text-[#B8BCC8]">
                            {trainer.experience}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-[#E11D2E]" />
                          <span className="text-[#B8BCC8]">
                            {trainer.transformations}+ transformations
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-white text-sm font-medium mb-2">
                          Certifications:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {trainer.certifications.map((cert, cIndex) => (
                            <span
                              key={cIndex}
                              className="text-xs bg-[#0B0B0D] text-[#B8BCC8] px-3 py-1 rounded-full"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-white text-sm font-medium mb-2">
                          Specializations:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {trainer.specializations.map((spec, sIndex) => (
                            <span
                              key={sIndex}
                              className="text-xs bg-gradient-accent/10 text-[#E11D2E] px-3 py-1 rounded-full"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link to="/contact">
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          Book Session
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Training Benefits */}
      <section ref={benefitsRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                  Personal Training
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                  Why Choose{' '}
                  <span className="text-gradient">Personal Training?</span>
                </h2>
                <p className="text-[#B8BCC8] leading-relaxed mb-8">
                  Our personal training programs are designed to give you the
                  individualized attention and expert guidance you need to reach
                  youYour GYM goals faster and more effectively.
                </p>

                <div className="space-y-4">
                  {personalTrainingBenefits.map((benefit, index) => (
                    <div key={index} className="benefit-item flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#E11D2E] flex-shrink-0" />
                      <span className="text-[#B8BCC8]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0B0B0D] border border-white/5 rounded-xl p-6 text-center">
                  <Dumbbell className="w-10 h-10 text-[#E11D2E] mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-white mb-2">
                    Strength
                  </h3>
                  <p className="text-[#B8BCC8] text-sm">
                    Build muscle and increase power
                  </p>
                </div>
                <div className="bg-[#0B0B0D] border border-white/5 rounded-xl p-6 text-center">
                  <Heart className="w-10 h-10 text-[#E11D2E] mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-white mb-2">
                    Cardio
                  </h3>
                  <p className="text-[#B8BCC8] text-sm">
                    Improve endurance and heart health
                  </p>
                </div>
                <div className="bg-[#0B0B0D] border border-white/5 rounded-xl p-6 text-center">
                  <Zap className="w-10 h-10 text-[#E11D2E] mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-white mb-2">
                    HIIT
                  </h3>
                  <p className="text-[#B8BCC8] text-sm">
                    Maximize calorie burn efficiently
                  </p>
                </div>
                <div className="bg-[#0B0B0D] border border-white/5 rounded-xl p-6 text-center">
                  <Award className="w-10 h-10 text-[#E11D2E] mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-white mb-2">
                    Results
                  </h3>
                  <p className="text-[#B8BCC8] text-sm">
                    Achieve your goals faster
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Results */}
      <section className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                Success Stories
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Transformation <span className="text-gradient">Results</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#141419] border border-white/5 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-accent/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-[#E11D2E]" />
                </div>
                <p className="font-display font-black text-5xl text-white mb-2">
                  2,500+
                </p>
                <p className="text-[#B8BCC8] mb-4">Lives Transformed</p>
                <p className="text-[#B8BCC8] text-sm">
                  Our trainers have helped over 2,500 members achieve their
                  fitness goals and transform their lives.
                </p>
              </div>

              <div className="bg-[#141419] border border-white/5 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-[#E11D2E]" />
                </div>
                <p className="font-display font-black text-5xl text-white mb-2">
                  50,000+
                </p>
                <p className="text-[#B8BCC8] mb-4">Training Sessions</p>
                <p className="text-[#B8BCC8] text-sm">
                  Conducted over 50,000 personal training sessions with an
                  average rating of 4.8/5.
                </p>
              </div>

              <div className="bg-[#141419] border border-white/5 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-[#E11D2E]" />
                </div>
                <p className="font-display font-black text-5xl text-white mb-2">
                  95%
                </p>
                <p className="text-[#B8BCC8] mb-4">Success Rate</p>
                <p className="text-[#B8BCC8] text-sm">
                  95% of our personal training clients achieve their goals within
                  the first 6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center cta-content">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Get Started
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Train with{' '}
              <span className="text-gradient">the Best?</span>
            </h2>
            <p className="text-[#B8BCC8] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a free consultation with one of our expert trainers and start
              your transformation journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-10 py-6"
                >
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/membership">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-10 py-6"
                >
                  View Memberships
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
