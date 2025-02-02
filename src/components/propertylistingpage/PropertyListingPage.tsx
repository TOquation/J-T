import { CheckCircle } from "lucide-react";
import { Star } from "lucide-react";
import DualCalendar from "../shared/calender/dualCalender";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";


const HouseRules = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">House rules</h2>
      <p className="text-sm text-gray-600">
        You'll be staying in someone’s home, so please treat it with care and
        respect.
      </p>
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-gray-500" />
          <span>No smoking</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-gray-500" />
          <span>No partying allowed</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-gray-500" />
          <span>No unregistered guests</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-gray-500" />
          <span>No pets allowed</span>
        </div>
      </div>
    </div>
  );
};



const RatingSummary = () => {
  return (
    <div className="text-center space-y-2">
      <div className="flex justify-center items-center space-x-1 text-yellow-500">
        <Star className="w-6 h-6 fill-yellow-500" />
        <span className="text-2xl font-semibold">4.6</span>
      </div>
      <p className="text-sm text-gray-600">
        One of the most loved homes on V Hospitality based on ratings, reviews,
        and reliability.
      </p>
    </div>
  );
};

interface Review {
  name: string;
  tenure: string;
  rating: string;
  date: string;
  comment: string;
}

const reviews: Review[] = [
  {
    name: "Beulah Cummings",
    tenure: "4 years on V Hospitality",
    rating: "★★★★★",
    date: "Nov. 01, 2024",
    comment:
      "This place exceeded my expectations in every way. The photos don’t even capture how spacious and airy it feels. The balcony view was a delightful bonus.",
  },
  {
    name: "Lauren Dickens",
    tenure: "4 years on V Hospitality",
    rating: "★★★★★",
    date: "Nov. 01, 2024",
    comment:
      "What a fantastic place! The apartment was exactly as described, even better in person. The location was ideal.",
  },
  {
    name: "Janet Mueller",
    tenure: "4 years on V Hospitality",
    rating: "★★★★★",
    date: "Nov. 01, 2024",
    comment:
      "I booked this apartment for a business trip and found it to be ideal. It’s quiet, well-furnished, and has a comfortable work area with good lighting. The Wi-Fi was reliable.",
  },
];

const ReviewsComponent: React.FC = () => {
  return (
    <div className="">
      <div className="flex gap-4 justify-center">
        {reviews.map((review, index) => (
          <Card key={index} className="w-full max-w-md p-4 shadow-lg">
            <CardHeader>
              <CardTitle>{review.name}</CardTitle>
              <CardDescription>{review.tenure}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">{review.rating}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="relative mt-4 flex items-start space-x-2">
                <Quote className="w-32 h-32 text-red-700" />
                <p className="text-gray-700">{review.comment}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button variant="outline">View More</Button>
      </div>
    </div>
  );
};

const Location = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Where you'll be</h2>
      <p className="text-sm text-gray-600">
        2 Cubango Cl, Maitama, Abuja 904101, Federal Capital Territory, Nigeria
      </p>
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.118247987369!2d7.49509!3d9.064156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bbac3e89a1b%3A0xa8a1e3658b8d857e!2sMaitama%2C%20Abuja!5e0!3m2!1sen!2sng!4v1706567890123"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

const PropertyListingPage = () => {
  return (
    <div className="space-y-8 p-4">
      <HouseRules />
      <DualCalendar />
      <RatingSummary />
      <ReviewsComponent />
      <Location />
    </div>
  );
};

export default PropertyListingPage;
export { Location, ReviewsComponent, RatingSummary, HouseRules };
