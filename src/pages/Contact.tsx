import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const businessHours = [
  { day: 'Monday - Friday', gym: '5:00 AM - 11:00 PM', pool: '6:00 AM - 10:00 AM / 5:00 PM - 9:00 PM' },
  { day: 'Saturday', gym: '6:00 AM - 10:00 PM', pool: '7:00 AM - 11:00 AM / 4:00 PM - 8:00 PM' },
  { day: 'Sunday', gym: '7:00 AM - 9:00 PM', pool: '8:00 AM - 12:00 PM / 4:00 PM - 7:00 PM' },
];

const quickContacts = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@rfitness.in',
    href: 'mailto:hello@rfitness.in',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.form-content',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.info-card',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.hours-row',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hoursRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you within 24 hours.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0">
          <img
            src="/images/starttoday_bg.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0B0D]/85" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center contact-hero-content">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Get In Touch
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-[0.9] tracking-tight mb-6">
              Let&apos;s <span className="text-gradient">Talk</span>
            </h1>
            <div className="gradient-rule w-24 mx-auto mb-6" />
            <p className="text-[#B8BCC8] text-lg max-w-2xl mx-auto">
              Have questions? We&apos;re here to help. Reach out to us and we&apos;ll
              respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div ref={formRef}>
                <div className="form-content bg-[#141419] border border-white/5 rounded-2xl p-8 lg:p-10">
                  <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                    Send Message
                  </span>
                  <h2 className="font-display font-bold text-2xl text-white mb-6">
                    Get in <span className="text-gradient">Touch</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="bg-[#0B0B0D] border-white/10 text-white placeholder:text-[#B8BCC8]/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="bg-[#0B0B0D] border-white/10 text-white placeholder:text-[#B8BCC8]/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="bg-[#0B0B0D] border-white/10 text-white placeholder:text-[#B8BCC8]/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-white">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="bg-[#0B0B0D] border-white/10 text-white placeholder:text-[#B8BCC8]/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="bg-[#0B0B0D] border-white/10 text-white placeholder:text-[#B8BCC8]/50 min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-accent hover:opacity-90 text-white font-semibold py-6"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div ref={infoRef} className="space-y-8">
                {/* Address Card */}
                <div className="info-card bg-[#141419] border border-white/5 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#E11D2E]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-white mb-2">
                        Visit Us
                      </h3>
                      <p className="text-[#B8BCC8] leading-relaxed">
                        Sector 26, Chandigarh, India
                        <br />
                        Pin Code: 160019
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {quickContacts.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="info-card bg-[#141419] border border-white/5 rounded-xl p-6 text-center hover:border-[#E11D2E]/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-accent/10 flex items-center justify-center mx-auto mb-4">
                        <contact.icon className="w-6 h-6 text-[#E11D2E]" />
                      </div>
                      <h3 className="font-display font-semibold text-white mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-[#B8BCC8] text-sm">{contact.value}</p>
                    </a>
                  ))}
                </div>

                {/* Map */}
                <div className="info-card bg-[#141419] border border-white/5 rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-[#0B0B0D] flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-[#E11D2E] mx-auto mb-4" />
                      <p className="text-white font-medium mb-2">
                        Your GYM Gym & Swimming Pool
                      </p>
                      <p className="text-[#B8BCC8] text-sm">
                        Sector 26, Chandigarh
                      </p>
                      <a
                        href="https://maps.google.com/?q=Sector+26+Chandigarh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-[#E11D2E] hover:underline text-sm"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="info-card bg-[#141419] border border-white/5 rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#0B0B0D] border border-white/5 flex items-center justify-center text-[#B8BCC8] hover:text-white hover:border-[#E11D2E]/30 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#0B0B0D] border border-white/5 flex items-center justify-center text-[#B8BCC8] hover:text-white hover:border-[#E11D2E]/30 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#0B0B0D] border border-white/5 flex items-center justify-center text-[#B8BCC8] hover:text-white hover:border-[#E11D2E]/30 transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section ref={hoursRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                When to Visit
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Business <span className="text-gradient">Hours</span>
              </h2>
            </div>

            <div className="bg-[#0B0B0D] border border-white/5 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/5 bg-white/5">
                <div className="font-display font-semibold text-white">Day</div>
                <div className="font-display font-semibold text-white">Gym Hours</div>
                <div className="font-display font-semibold text-white">Pool Hours</div>
              </div>
              {businessHours.map((schedule, index) => (
                <div
                  key={index}
                  className="hours-row grid grid-cols-3 gap-4 p-6 border-b border-white/5 last:border-b-0"
                >
                  <div className="text-[#B8BCC8]">{schedule.day}</div>
                  <div className="text-white">{schedule.gym}</div>
                  <div className="text-white">{schedule.pool}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 p-4 bg-[#0B0B0D] border border-white/5 rounded-xl">
              <Clock className="w-5 h-5 text-[#E11D2E] flex-shrink-0 mt-0.5" />
              <p className="text-[#B8BCC8] text-sm">
                Please note that the pool is closed on Mondays for maintenance.
                The gym remains open with regular hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
              Ready to Start Your{' '}
              <span className="text-gradient">Fitness Journey?</span>
            </h2>
            <p className="text-[#B8BCC8] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Visit us for a free tour of our facilities or book a consultation
              with one of our expert trainers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-10 py-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="tel:+919876543210">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-10 py-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
