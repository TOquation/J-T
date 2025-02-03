import {
  Star,
  Quote,
  Tag,
  Mail,
  MapPin,
  Lock,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import DualCalendar from "../shared/calender/dualCalender";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

interface Review {
  name: string;
  tenure: string;
  rating: string;
  date: string;
  comment: string;
}

interface RatingCategoryProps {
  icon: React.ReactNode;
  label: string;
  score: number;
}

interface RatingBarProps {
  level: number;
  count: number;
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

const ratingBars = [
  { level: 5, count: 85 },
  { level: 4, count: 12 },
  { level: 3, count: 2 },
  { level: 2, count: 1 },
  { level: 1, count: 0 },
];

// {ratings}
const RatingCategory: React.FC<RatingCategoryProps> = ({
  icon,
  label,
  score,
}) => (
  <div className="flex flex-col items-center gap-1 flex-1">
    {icon}
    <span className="text-[0.9375rem] text-gray-700">{score}</span>
    <span className="text-[0.8125rem] text-gray-500">{label}</span>
  </div>
);

const RatingBar: React.FC<RatingBarProps> = ({ level, count }) => (
  <div className="flex items-center gap-3 h-6">
    <span className="text-sm text-gray-600 w-3">{level}</span>
    <div className="flex-1">
      <Progress
        value={count}
        className="h-[6px] bg-gray-100 [&>div]:bg-[#FDB022]"
      />
    </div>
  </div>
);

const RatingDetails: React.FC = () => {
  const ratingCategories = [
    {
      icon: <Sparkles className="w-5 h-5 text-gray-600" />,
      label: "Cleanliness",
      score: 4.8,
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-gray-600" />,
      label: "Accuracy",
      score: 4.9,
    },
    {
      icon: <Lock className="w-5 h-5 text-gray-600" />,
      label: "Security",
      score: 4.9,
    },
    {
      icon: <Mail className="w-5 h-5 text-gray-600" />,
      label: "Agent Support",
      score: 4.9,
    },
    {
      icon: <MapPin className="w-5 h-5 text-gray-600" />,
      label: "Location",
      score: 4.9,
    },
    {
      icon: <Tag className="w-5 h-5 text-gray-600" />,
      label: "Value",
      score: 4.9,
    },
  ];

  return (
    <div>
      {/* Add RatingDetails content here */}
        <RatingComponent />
    </div>
  );
};

const RatingComponent = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Header Rating */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-6 h-6 fill-[#D99100] text-[#D99100]" />
          <span className="text-3xl font-semibold text-gray-900">4.6</span>
        </div>
        <p className="text-sm text-gray-600 max-w-xs">
          One of the most loved homes on V Hospitality based on ratings, reviews, and reliability
        </p>
      </div>

      {/* Overall Rating */}
      <div className="w-[180px]">
        <h3 className="font-medium text-gray-900 mb-2">Overall rating</h3>
        <div className="space-y-1">
          {ratingBars.map((rating) => (
            <div key={rating.level} className="flex items-center gap-2">
              <span className="text-sm text-gray-600 w-3">{rating.level}</span>
              <Progress
                value={rating.count}
                className="h-[6px] bg-gray-100 w-full [&>div]:bg-[#D99100]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
      <DualCalendar />
      <RatingDetails />
      <ReviewsComponent />
      <Location />
    </div>
  );
};

export default PropertyListingPage;
export { Location, ReviewsComponent, RatingDetails };
