import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Calendar, User } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="relative w-full mb-16">
      {/* Split Background Images Container */}
      <div className="relative h-[250px] w-full overflow-hidden rounded-[32px]">
        <div className="absolute inset-0 flex">
          {/* Left Image */}
          <div className="relative w-1/2 overflow-visible">
            <img
              src="https://s3-alpha-sig.figma.com/img/69f7/4fc2/7d5d78e1358fa0f01a5a5821cd90bad7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qf9gpdJnGQehbhJ7m5Tg3kXFuU4UM8zjn7XDZ5MTB5WzAFgwZJb43yt-nihly9SHGPTinErvrUsmgjIsdhNM1ww5t1H1XKv~VDLQRD~VN-tpPq0BFrEHs~wYie9JTstVdsRolzysiPgT8tOU7KNPsZ9AZLXkNGno2LfgGdHmYkHnMMuKFMivIoFpZOtv6u~9XMlq3lLD6~Xu2Y~jUhDCOFmUMgfLbAoNRKA4UYngObt9L4Z8tFEXWeI7G9sMHCNsz4zwnbYsPP9jyW3MCIS9EwsK~Z6RHNy9aZ7eaVW~bxQQdOPrpLv-tdDNEH25q3LMRXEufFc1zkiVQy1q~hevAg__"
              alt="Living Room"
              className="w-full object-cover absolute top-[-180px]"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-1/2 overflow-visible">
            <img
              src="https://s3-alpha-sig.figma.com/img/c633/8c25/04bf508bace40b560b5b844113958136?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~k1JEPp~NKqGwQePJ733f21KiDCkHehUkMk-sZbuuK29IWel33sT1RX4on87FwE~Hf-bhH77I8Hoft10XsH27EtdUNHu1Gd7OtqMpZyYseDZ3Vem7-rnsMdu6X8-D~1CabYFUdOFRSabj1Qwj3Cev23xW39K3JTXHoTVz21nvt4UVz0VM8R7eQ24jr~h0Wvtn2f6N2ts6uUyVqU~cCXj07UVztTmaEJMQSwzDDS0DOQfySfBBKNiav2E4vmnGzQntQ8Ga3q6jED~-1tN6Zj7m3x5hjhDJDlTyolYBoTEH3pmrDmKzRdVhoC5zaWApJh5trY8p2eVrgbakEzP61S9w__"
              alt="Bedroom"
              className="absolute top-[-250px] w-full object-cover"
            />
          </div>
        </div>

        {/* Gradient Overlay to Blend Images with Darker Shade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/80 to-black/35" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center translate-x-20">
          <div className="text-center">
            <h2 className="flex items-baseline justify-center">
              <span className="text-6xl font-black text-orange-500">5%</span>
              <span className="text-3xl font-black text-orange-500 ml-2">
                off
              </span>
            </h2>
            <p className="text-xl font-medium text-white mt-2">
              Book up to 4 nights and enjoy 5% off
            </p>
            <div className="flex items-center justify-center mt-2 text-sm text-white">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg">
          <div className="grid grid-cols-4 p-1 items-center">
            {/* Where */}
            <div className="group pl-6 hover:bg-gray-50 rounded-l-xl transition-colors border-r border-gray-200">
              <div className="flex flex-col px-2">
                <div className="flex gap-1">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <label className="text-sm font-semibold text-gray-800">
                    Where
                  </label>
                </div>
                <div className="flex items-center">
                  <Input
                    placeholder="Search destination"
                    className="border-0 p-0 h-6 focus-visible:ring-0 placeholder:text-gray-400 bg-transparent text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Check In */}
            <div className="group pl-6 hover:bg-gray-50 transition-colors cursor-pointer border-r border-gray-200">
              <div className="flex flex-col px-2">
                <div className="flex gap-1">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <label className="text-sm font-semibold text-gray-800">
                    Check In
                  </label>
                </div>
                <div className="flex items-center h-6">
                  <span className="text-sm text-gray-400">Add date</span>
                </div>
              </div>
            </div>

            {/* Check Out */}
            <div className="group pl-6 hover:bg-gray-50 transition-colors cursor-pointer border-r border-gray-200">
              <div className="flex flex-col px-2">
                <div className="flex gap-1">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <label className="text-sm font-semibold text-gray-800">
                    Check Out
                  </label>
                </div>
                <div className="flex items-center h-6">
                  <span className="text-sm text-gray-400">Add date</span>
                </div>
              </div>
            </div>

            {/* Who + Search Button */}
            <div className="group pl-6 flex items-center justify-between hover:bg-gray-50 rounded-r-xl transition-colors">
              <div className="flex flex-col px-2">
                <div className="flex gap-1">
                  <User className="h-4 w-4 text-gray-400 mr-2" />
                  <label className="text-sm font-semibold text-gray-800">
                    Who
                  </label>
                </div>
                <div className="flex items-center h-6">
                  <span className="text-sm text-gray-400">Add guests</span>
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-7">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
