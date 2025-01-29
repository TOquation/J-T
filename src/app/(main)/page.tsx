"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star, Heart } from "lucide-react";

// Define Property Interface
interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  minNights: number;
  rating: number;
  reviews: number;
  images: string[];
  agencyLogo: string;
  agencyName: string;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);
  const [api, setApi] = React.useState<any>(null);

  return (
    <Card className="relative overflow-hidden rounded-3xl border shadow-lg">
      {/* Top Badge & Favorite Button */}
      <div className="absolute left-0 right-0 top-0 z-10 flex justify-between p-4">
        <span className="rounded-xl bg-white/70 px-3 py-2 text-sm font-medium text-customOrange">
          Instant Book
        </span>
        <button className="rounded-full p-2">
        <Heart
          className="h-5 w-5"
          fill={isLiked ? '#222222' : "none"}
          strokeWidth={2}

          onClick={() => setIsLiked(!isLiked)}
        />
        </button>
      </div>

      {/* Carousel */}
      <CardContent className="p-0">
        <div className="relative">
          <Carousel
            className="w-full"
            opts={{ loop: true }}
            setApi={(carouselApi) => {
              setApi(carouselApi);
              carouselApi?.on("select", () =>
                setCurrentSlide(carouselApi.selectedScrollSnap())
              );
            }}
          >
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className="h-full w-full object-cover rounded-t-3xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Agency Logo */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
            <img
              src={property.agencyLogo}
              alt={property.agencyName}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium text-white">
              {property.agencyName}
            </span>
          </div>

          {/* Clickable Indicator Dots */}
          <div className="absolute bottom-7 right-4 z-10 flex gap-1">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)} // Scroll to the selected slide
                className={`h-[7px] rounded-full transition-all ${
                  currentSlide === index
                    ? "w-4 bg-orange-500"
                    : "w-[7px] bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="p-4">
          <div className="mb-1 flex items-start justify-between">
            <div>
              <h2 className="text-[16px] font-semibold">{property.title}</h2>
              <p className="text-[14px] text-gray-500">{property.location}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-[#DF9409] text-[#DF9409]" />
                <span className="ml-1 text- font-semibold">
                  {property.rating}
                </span>
              </div>
              <div className="text-sm flex items-center gap-1 text-gray-400">
                <p>{property.reviews}</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-[16px] font-bold">{property.price}</span>
            <span className="text-[14px] text-[#575757]">
              Night / min. {property.minNights}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Mock Property Data
const properties: Property[] = [
  {
    id: 1,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 2,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 3,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 4,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 5,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 6,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
];

const ApartmentGrid: React.FC = () => {
  return (
    <div className="max-w-full p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <div key={property.id} className="w-full">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApartmentGrid;
