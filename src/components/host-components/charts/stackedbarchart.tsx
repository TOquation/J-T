// components/HorizontalStackedBarChart.tsx
import { cn } from "@/lib/utils"; // shadcn utility for className merging
import { MoreHorizontal } from "lucide-react"; // Icon from Lucide React

interface HorizontalStackedBarChartProps {
  className?: string;
}

const HorizontalStackedBarChart = ({ className }: HorizontalStackedBarChartProps) => {
  // Data for the chart
  const data = [
    { label: "Occupied", value: 286, color: "bg-pink-100" },
    { label: "Reserved", value: 87, color: "bg-orange-100" },
    { label: "Available", value: 32, color: "bg-yellow-200" },
    { label: "Not Ready", value: 13, color: "bg-gray-300" },
  ];

  
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={cn("p-4 bg-white rounded-lg shadow-sm", className)}>
     
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-semibold text-gray-800 leading-none">
          Availability
        </h3>
        <MoreHorizontal className="w-5 h-5 text-gray-500" />
      </div>

     
      <div className="flex w-full h-14 space-x-1">
        {data.map((item, index) => (
          <div
            key={index}
            className={cn(
              item.color,
              "h-full",
              index === 0 && "rounded-l-xl",
              index === data.length - 1 && "rounded-r-lg"
            )}
            style={{ width: `${(item.value / total) * 100}%` }}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 mt-10">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className={cn(item.color, "w-1 h-12 rounded-sm")} />
            <div>
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-lg font-semibold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalStackedBarChart;