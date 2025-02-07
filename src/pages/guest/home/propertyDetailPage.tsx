'use client';

import { useEffect, useRef, useState } from 'react';
import DualCalendar from '@/components/calenders/dualCalender';
import ImageGallery from '@/components/imageGallery';
import ListingDetailsSection from '@/sections/propertyDetail/listingDetailsSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Share2 } from 'lucide-react';
import RatingSection from '@/sections/propertyDetail/ratingSection';
import BookingCard from '@/components/cards/bookingCard';
import { Button } from '@/components/ui/button';

const rules = [
  { label: 'No smoking' },
  { label: 'No partying allowed' },
  { label: 'No unregistered guests' },
  { label: 'No pets allowed' },
];

interface Host {
  name: string;
  avatarUrl?: string;
}

const host: Host = { name: 'Eleven Homes' };

const PropertyDetailPage = ({ id }: { id: string }) => {
  const [activeTab, setActiveTab] = useState('photos');

  const photosSectionRef = useRef<HTMLElement>(null);
  const detailsSectionRef = useRef<HTMLElement>(null);
  const hostSectionRef = useRef<HTMLElement>(null);
  const reviewsSectionRef = useRef<HTMLElement>(null);
  const locationSectionRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    photos: photosSectionRef,
    Details: detailsSectionRef,
    Host: hostSectionRef,
    Reviews: reviewsSectionRef,
    Location: locationSectionRef,
  };

  const scrollToSection = (sectionId: string) => {
    const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (sectionRef.current) {
      const navHeight = 120; // Height of the fixed navbar
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveTab(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Adjusted offset for header

      Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveTab(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let photosSectionClassName;
  useEffect(() => {
    photosSectionClassName = 'scroll-mt-32 pt-1';
  }, []);

  photosSectionClassName = 'scroll-mt-32 pt-1';

  // Common section wrapper style
  const sectionClassName = 'scroll-mt-32 pt-16';

  return (
    <div className="max-w-full">
      <div className="fixed left-[274px] right-0 top-16 z-10 bg-white px-10 pt-3">
        <div className="mb-3 flex items-center text-black">
          <ArrowLeft size={20} />
          <span className="text-lg">Back</span>
        </div>
        <h1 className="text-lg">2 Bedroom Luxury Shortlet Apartment</h1>

        <div className="flex justify-between">
          <div className="mt-3 flex">
            {['photos', 'Details', 'Host', 'Reviews', 'Location'].map(
              (item) => (
                <div
                  key={item}
                  className={`cursor-pointer px-4 ${
                    activeTab === item
                      ? 'border-b-2 border-primary text-primary duration-150'
                      : ''
                  }`}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div className="flex">
            <div className="flex items-center">
              <Share2 />
              <span className="underline">Share</span>
            </div>
            <div className="flex items-center">
              <Share2 />
              <span className="underline">Share</span>
            </div>
          </div>

          <Button
            size="lg"
            className={`px-11 font-bold ${activeTab == 'Reviews' || activeTab == 'Location' ? 'block' : 'invisible'}`}
            onClick={() => scrollToSection('photos')}
          >
            Request To Book
          </Button>
        </div>
      </div>

      <div className="mt-32 w-full px-10">
        <div className="grid grid-cols-7 gap-3">
          <main className="col-span-5">
            {/* Photos Section */}
            <section ref={photosSectionRef} className={photosSectionClassName}>
              <ImageGallery />
              <p className="border-b py-5 text-[16px] font-[500] text-[#000000]">
                <span className="text-[16px] font-[500] text-[#666666]">
                  Last Updated on:
                </span>{' '}
                Aug 22 2024
              </p>
              <Separator />
            </section>

            {/* Details Section */}
            <section ref={detailsSectionRef} className={sectionClassName}>
              <ListingDetailsSection />
            </section>

            {/* Host Section */}
            <section
              ref={hostSectionRef}
              className={sectionClassName}
              aria-labelledby="host-heading"
            >
              <h2 id="host-heading" className="text-xl font-semibold">
                Meet the host
              </h2>
              <div className="mt-3 flex items-center space-x-3 px-4">
                <Avatar>
                  {host.avatarUrl ? (
                    <AvatarImage src={host.avatarUrl} alt={host.name} />
                  ) : (
                    <AvatarFallback>
                      {host.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
                <span className="font-medium text-gray-800">{host.name}</span>
              </div>
              <Separator className="my-3" />

              <div className="max-w-3xl space-y-6">
                <h2 id="rules-heading" className="text-xl font-semibold">
                  House rules
                </h2>
                <p className="mt-2 px-4 text-sm text-gray-600">
                  You'll be staying in someone's home, so please treat it with
                  care and respect.
                </p>
                <div className="mt-2 grid grid-cols-2 gap-4 px-4 text-sm text-gray-700">
                  {rules.map((rule, index) => (
                    <div key={index}>
                      <span>{rule.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Separator className="my-3" />
              <DualCalendar />
            </section>

            <Separator className="my-3" />
          </main>

          <aside className="sticky top-48 col-span-2 self-start">
            <BookingCard />
          </aside>
        </div>

        {/* Review Section */}
        <section ref={reviewsSectionRef} className={sectionClassName}>
          <RatingSection />
        </section>

        {/* Location Section */}
        <section
          ref={locationSectionRef}
          className={`${sectionClassName} pb-96`}
        >
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Where you'll be</h2>
            <p className="text-sm text-gray-600">
              2 Cubango Cl, Maitama, Abuja 904101, Federal Capital Territory,
              Nigeria
            </p>
            <div className="h-64 w-full overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.118247987369!2d7.49509!3d9.064156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bbac3e89a1b%3A0xa8a1e3658b8d857e!2sMaitama%2C%20Abuja!5e0!3m2!1sen!2sng!4v1706567890123"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
