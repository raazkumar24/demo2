import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, Users, Dumbbell, Waves, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Member since 2023',
    content:
      'R Fitness transformed my life. The trainers are exceptional and the facilities are world-class. I have lost 20kg in 6 months!',
    rating: 5,
    image: '/images/trainer1.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'Member since 2022',
    content:
      'The swimming pool is pristine and the coaching staff is incredibly supportive. Best gym experience in Chandigarh!',
    rating: 5,
    image: '/images/trainer2.jpg',
  },
  {
    name: 'Amit Singh',
    role: 'Member since 2024',
    content:
      'Clean facilities, modern equipment, and great atmosphere. The personal training sessions have helped me achieve my goals.',
    rating: 5,
    image: '/images/trainer3.jpg',
  },
];

const highlights = [
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'State-of-the-art machines and free weights for all fitness levels.',
  },
  {
    icon: Waves,
    title: 'Olympic Pool',
    description: 'Temperature-controlled 25m pool with professional coaching.',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Certified professionals dedicated to your fitness journey.',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const membershipRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.hero-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        '.hero-image',
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
      );

      // Intro section
      gsap.fromTo(
        '.intro-text',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Highlights
      gsap.fromTo(
        '.highlight-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Membership preview
      gsap.fromTo(
        '.membership-content',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: membershipRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Testimonials
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA section
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 hero-image">
          <img
            src="/images/hero_gym_bg.jpg"
            alt="R Fitness Gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/95 via-[#0B0B0D]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
          <div className="max-w-4xl hero-content">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Chandigarh &bull; Gym & Pool
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase leading-[0.9] tracking-tight mb-6">
              Train Hard
              <br />
              <span className="text-gradient">Live Bold</span>
            </h1>
            <div className="gradient-rule w-32 mb-6" />
            <p className="text-[#B8BCC8] text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
              Strength training, cardio zones, and expert coaching—built for real
              results. Join Chandigarh&apos;s premier fitness destination.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/membership">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-8 py-6 text-base group"
                >
                  Join Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center intro-text">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Welcome to R Fitness
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Your Journey to a{' '}
              <span className="text-gradient">Stronger You</span> Starts Here
            </h2>
            <p className="text-[#B8BCC8] text-lg leading-relaxed max-w-3xl mx-auto">
              At R Fitness, we believe fitness is more than just exercise—it&apos;s a
              lifestyle. Our state-of-the-art facility in Chandigarh combines
              cutting-edge equipment, expert trainers, and a supportive community
              to help you achieve your goals. Whether you&apos;re looking to build
              strength, improve endurance, or master your swimming technique,
              we&apos;ve got everything you need under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section ref={highlightsRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              World-Class <span className="text-gradient">Facilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="highlight-card bg-[#0B0B0D] border border-white/5 rounded-xl p-8 hover:border-[#E11D2E]/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-accent/10 flex items-center justify-center mb-6 group-hover:bg-gradient-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#E11D2E]" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#B8BCC8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section ref={membershipRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="membership-content">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                Memberships
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Flexible Plans for{' '}
                <span className="text-gradient">Every Goal</span>
              </h2>
              <p className="text-[#B8BCC8] text-lg leading-relaxed mb-8">
                Choose from our range of membership options designed to fit your
                lifestyle. From gym-only access to full gym and pool packages,
                we have the perfect plan for you.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Gym-only, Pool-only, or Full Access',
                  'Monthly, Quarterly & Annual Plans',
                  'No hidden fees or long-term contracts',
                  'Free fitness assessment included',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#B8BCC8]">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/membership">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-8 group"
                >
                  View All Plans
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/memberships_card.jpg"
                  alt="Membership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-accent rounded-xl p-6 shadow-2xl">
                <p className="font-display font-bold text-3xl text-white">
                  Starting at
                </p>
                <p className="font-display font-black text-5xl text-white">
                  ₹1,999<span className="text-lg font-medium">/mo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Testimonials
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              What Our <span className="text-gradient">Members Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-[#0B0B0D] border border-white/5 rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FF6A2C] text-[#FF6A2C]"
                    />
                  ))}
                </div>
                <p className="text-[#B8BCC8] leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#B8BCC8]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 lg:py-32 bg-[#0B0B0D] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/starttoday_bg.jpg"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/80 to-[#0B0B0D]/60" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center cta-content">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Get Started Today
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
              Ready to Transform{' '}
              <span className="text-gradient">Your Life?</span>
            </h2>
            <p className="text-[#B8BCC8] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Join R Fitness today and take the first step towards a healthier,
              stronger you. Visit us for a tour or sign up online in under two
              minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/membership">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-10 py-6 text-base"
                >
                  Join Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-10 py-6 text-base"
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
