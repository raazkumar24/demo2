import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Category = 'all' | 'gym' | 'pool' | 'events';

interface GalleryImage {
  src: string;
  category: Exclude<Category, 'all'>;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/hero_gym_bg.jpg',
    category: 'gym',
    title: 'Main Gym Floor',
  },
  {
    src: '/images/hero_gym_card.jpg',
    category: 'gym',
    title: 'Strength Training',
  },
  {
    src: '/images/hero_pool_bg.jpg',
    category: 'pool',
    title: 'Olympic Pool',
  },
  {
    src: '/images/hero_pool_card.jpg',
    category: 'pool',
    title: 'Swimming Sessions',
  },
  {
    src: '/images/group_class_bg.jpg',
    category: 'gym',
    title: 'Group Classes',
  },
  {
    src: '/images/group_class_card.jpg',
    category: 'gym',
    title: 'Personal Training',
  },
  {
    src: '/images/gallery1.jpg',
    category: 'gym',
    title: 'Weight Room',
  },
  {
    src: '/images/gallery2.jpg',
    category: 'pool',
    title: 'Pool Lanes',
  },
  {
    src: '/images/gallery3.jpg',
    category: 'events',
    title: 'Yoga Session',
  },
  {
    src: '/images/gallery4.jpg',
    category: 'gym',
    title: 'Locker Room',
  },
  {
    src: '/images/gallery5.jpg',
    category: 'gym',
    title: 'Deadlift Zone',
  },
  {
    src: '/images/gallery6.jpg',
    category: 'pool',
    title: 'Aerial View',
  },
  {
    src: '/images/trainers_bg.jpg',
    category: 'events',
    title: 'Training Session',
  },
  {
    src: '/images/why_gym_bg.jpg',
    category: 'gym',
    title: 'Cardio Arena',
  },
  {
    src: '/images/pool_detail_bg.jpg',
    category: 'pool',
    title: 'Underwater View',
  },
  {
    src: '/images/journey_bg.jpg',
    category: 'events',
    title: 'Outdoor Training',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'gym', label: 'Gym' },
    { value: 'pool', label: 'Pool' },
    { value: 'events', label: 'Events' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0">
          <img
            src="/images/gallery1.jpg"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0B0D]/85" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center gallery-hero-content">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E11D2E] mb-4 block">
              Visual Tour
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-[0.9] tracking-tight mb-6">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <div className="gradient-rule w-24 mx-auto mb-6" />
            <p className="text-[#B8BCC8] text-lg max-w-2xl mx-auto">
              Explore our world-class facilities through our photo gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-24 lg:py-32 bg-[#0B0B0D]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.value
                      ? 'bg-gradient-accent text-white'
                      : 'bg-[#141419] text-[#B8BCC8] hover:text-white border border-white/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="gallery-item group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium">{image.title}</p>
                      <p className="text-[#B8BCC8] text-sm capitalize">
                        {image.category}
                      </p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#B8BCC8]">
                  No images found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0B0D]/95 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="absolute inset-0 flex items-center justify-center p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-5xl max-h-full">
              <img
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white font-medium text-lg">
                  {filteredImages[currentImageIndex].title}
                </p>
                <p className="text-[#B8BCC8] text-sm capitalize">
                  {filteredImages[currentImageIndex].category}
                </p>
                <p className="text-[#B8BCC8] text-xs mt-2">
                  {currentImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
