import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Waves,
  Clock,
  Shield,
  Thermometer,
  Users,
  AlertCircle,
  CheckCircle,
  Calendar,
  Info,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const poolDetails = [
  {
    icon: Waves,
    title: '25-Meter Pool',
    description: 'Olympic-style pool with 6 lanes for lap swimming',
  },
  {
    icon: Thermometer,
    title: 'Temperature Controlled',
    description: 'Maintained at optimal 27-29°C year-round',
  },
  {
    icon: Shield,
    title: 'Daily Maintenance',
    description: 'Water tested and treated every 4 hours',
  },
  {
    icon: Users,
    title: 'Professional Lifeguards',
    description: 'Trained staff on duty during all operating hours',
  },
];

const timeSlots = [
  { time: '06:00 AM - 07:00 AM', available: true },
  { time: '07:00 AM - 08:00 AM', available: true },
  { time: '08:00 AM - 09:00 AM', available: false },
  { time: '09:00 AM - 10:00 AM', available: true },
  { time: '05:00 PM - 06:00 PM', available: true },
  { time: '06:00 PM - 07:00 PM', available: false },
  { time: '07:00 PM - 08:00 PM', available: true },
  { time: '08:00 PM - 09:00 PM', available: true },
];

const safetyRules = [
  {
    title: 'Shower Before Entry',
    description: 'All swimmers must shower before entering the pool.',
  },
  {
    title: 'Proper Swimwear Required',
    description: 'Only proper swimming costumes are allowed. No cotton clothing.',
  },
  {
    title: 'No Running',
    description: 'Running on the pool deck is strictly prohibited.',
  },
  {
    title: 'No Diving in Shallow Area',
    description: 'Diving is only permitted in designated deep areas.',
  },
  {
    title: 'Children Supervision',
    description: 'Children under 12 must be accompanied by an adult.',
  },
  {
    title: 'No Food or Drinks',
    description: 'Food and beverages are not allowed on the pool deck.',
  },
];

const cancellationPolicy = [
  'Cancellations must be made at least 4 hours before your scheduled slot.',
  'Late cancellations or no-shows may result in a penalty fee.',
  'Rescheduling is allowed up to 2 hours before your slot.',
  'Refunds for prepaid slots are processed within 5-7 business days.',
];

export default function PoolBooking() {
  const { toast } = useToast();
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    membershipId: '',
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const rulesRef = useRef<HTMLDivElement>(null);
  const policyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pool-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.detail-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.booking-form',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bookingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.rule-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rulesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.policy-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: policyRef.current,
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
    if (!selectedSlot) {
      toast({
        title: 'Please select a time slot',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Booking Request Submitted!',
      description: 'We will confirm your booking shortly via email.',
    });
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
            src="/images/hero_pool_bg.jpg"
            alt="Swimming Pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0B0D]/80" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center pool-hero-content">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Swimming Pool
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-[0.9] tracking-tight mb-6">
              Swim <span className="text-gradient">Strong</span>
            </h1>
            <div className="gradient-rule w-24 mx-auto mb-6" />
            <p className="text-[#B8BCC8] text-lg max-w-2xl mx-auto">
              Olympic-style pool with professional coaching and flexible booking
              slots.
            </p>
          </div>
        </div>
      </section>

      {/* Pool Details */}
      <section ref={detailsRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                Pool Features
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                World-Class <span className="text-gradient">Aquatic Facility</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {poolDetails.map((detail, index) => (
                <div
                  key={index}
                  className="detail-card bg-[#141419] border border-white/5 rounded-xl p-6 text-center hover:border-[#E11D2E]/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent/10 flex items-center justify-center mx-auto mb-4">
                    <detail.icon className="w-7 h-7 text-[#E11D2E]" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-[#B8BCC8] text-sm">{detail.description}</p>
                </div>
              ))}
            </div>

            {/* Pool Specifications */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#141419] border border-white/5 rounded-2xl p-8">
                <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#E11D2E]" />
                  Operating Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-[#B8BCC8]">Morning Sessions</span>
                    <span className="text-white font-medium">
                      6:00 AM - 10:00 AM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-[#B8BCC8]">Evening Sessions</span>
                    <span className="text-white font-medium">
                      5:00 PM - 9:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#B8BCC8]">Closed On</span>
                    <span className="text-white font-medium">
                      Mondays (Maintenance)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#141419] border border-white/5 rounded-2xl p-8">
                <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-3">
                  <Info className="w-6 h-6 text-[#E11D2E]" />
                  Pool Specifications
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-[#B8BCC8]">Length</span>
                    <span className="text-white font-medium">25 meters</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-[#B8BCC8]">Depth Range</span>
                    <span className="text-white font-medium">
                      3.5 ft - 8 ft
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#B8BCC8]">Number of Lanes</span>
                    <span className="text-white font-medium">6 lanes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section ref={bookingRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Time Slots */}
              <div>
                <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                  Select Time Slot
                </span>
                <h2 className="font-display font-bold text-3xl text-white mb-6">
                  Available <span className="text-gradient">Slots</span>
                </h2>
                <p className="text-[#B8BCC8] mb-8">
                  Select your preferred time slot for swimming. Each session is
                  1 hour long.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        slot.available && setSelectedSlot(slot.time)
                      }
                      disabled={!slot.available}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedSlot === slot.time
                          ? 'border-[#E11D2E] bg-[#E11D2E]/10'
                          : slot.available
                          ? 'border-white/10 bg-[#0B0B0D] hover:border-white/30'
                          : 'border-white/5 bg-[#0B0B0D]/50 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-medium ${
                            selectedSlot === slot.time
                              ? 'text-[#E11D2E]'
                              : 'text-white'
                          }`}
                        >
                          {slot.time}
                        </span>
                        {slot.available ? (
                          selectedSlot === slot.time && (
                            <CheckCircle className="w-5 h-5 text-[#E11D2E]" />
                          )
                        ) : (
                          <span className="text-xs text-[#B8BCC8]/50">
                            Booked
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-[#0B0B0D] border border-white/5 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#E11D2E] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium mb-1">
                        Membership Required
                      </p>
                      <p className="text-[#B8BCC8] text-sm">
                        Pool access is available for Premium and Elite members.
                        Basic members can upgrade their plan to access the pool.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="booking-form">
                <div className="bg-[#0B0B0D] border border-white/5 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-white mb-6">
                    Book Your Slot
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-[#141419] border-white/10 text-white placeholder:text-[#B8BCC8]/50"
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
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-[#141419] border-white/10 text-white placeholder:text-[#B8BCC8]/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-[#141419] border-white/10 text-white placeholder:text-[#B8BCC8]/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-white">
                        Select Date
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8BCC8]" />
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="bg-[#141419] border-white/10 text-white pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="membership" className="text-white">
                        Membership Type
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-[#141419] border-white/10 text-white">
                          <SelectValue placeholder="Select your membership" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#141419] border-white/10">
                          <SelectItem value="premium">
                            Premium Member
                          </SelectItem>
                          <SelectItem value="elite">Elite Member</SelectItem>
                          <SelectItem value="none">
                            Not a member yet
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-accent hover:opacity-90 text-white font-semibold py-6"
                    >
                      Book Slot
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Rules */}
      <section ref={rulesRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                Safety First
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Pool <span className="text-gradient">Safety Rules</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyRules.map((rule, index) => (
                <div
                  key={index}
                  className="rule-item bg-[#141419] border border-white/5 rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-accent/10 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-[#E11D2E]" />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-[#B8BCC8] text-sm">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section ref={policyRef} className="py-24 lg:py-32 bg-[#141419]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0B0B0D] border border-white/5 rounded-2xl p-8 lg:p-12 policy-content">
              <div className="text-center mb-8">
                <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
                  Booking Policy
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Cancellation &{' '}
                  <span className="text-gradient">Refund Policy</span>
                </h2>
              </div>

              <ul className="space-y-4">
                {cancellationPolicy.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E11D2E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#B8BCC8]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-[#141419] border border-white/5 rounded-xl">
                <p className="text-[#B8BCC8] text-sm text-center">
                  For any queries regarding pool bookings, please contact us at{' '}
                  <a
                    href="tel:+919876543210"
                    className="text-[#E11D2E] hover:underline"
                  >
                    +91 98765 43210
                  </a>{' '}
                  or email{' '}
                  <a
                    href="mailto:pool@rfitness.in"
                    className="text-[#E11D2E] hover:underline"
                  >
                    pool@rfitness.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
