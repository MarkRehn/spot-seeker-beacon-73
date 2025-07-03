
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, MapPin } from "lucide-react";

const ParkingAvailabilityWidget = () => {
  // Mock data - in a real system, this would come from your backend
  const parkingData = [
    {
      garageName: "Main Campus Garage",
      location: "University District",
      levels: [
        { level: "Level 1", available: 12, total: 50, status: "limited" },
        { level: "Level 2", available: 28, total: 50, status: "available" },
        { level: "Level 3", available: 3, total: 50, status: "nearly-full" },
        { level: "Level 4", available: 45, total: 50, status: "available" },
      ]
    },
    {
      garageName: "Downtown Plaza",
      location: "Business District",
      levels: [
        { level: "Level 1", available: 0, total: 40, status: "full" },
        { level: "Level 2", available: 8, total: 40, status: "limited" },
        { level: "Level 3", available: 22, total: 40, status: "available" },
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-100 text-green-800 border-green-200";
      case "limited": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "nearly-full": return "bg-orange-100 text-orange-800 border-orange-200";
      case "full": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available": return "Available";
      case "limited": return "Limited";
      case "nearly-full": return "Nearly Full";
      case "full": return "Full";
      default: return "Unknown";
    }
  };

  return (
    <div className="space-y-6">
      {parkingData.map((garage, garageIndex) => (
        <Card key={garageIndex} className="border-0 shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {garage.garageName}
                  </CardTitle>
                  <div className="flex items-center text-slate-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{garage.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-900">
                  {garage.levels.reduce((acc, level) => acc + level.available, 0)}
                </div>
                <div className="text-sm text-slate-600">spots available</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {garage.levels.map((level, levelIndex) => (
                <div key={levelIndex} className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">{level.level}</span>
                    <Badge className={getStatusColor(level.status)}>
                      {getStatusText(level.status)}
                    </Badge>
                  </div>
                  <div className="text-lg font-bold text-slate-900">
                    {level.available}/{level.total}
                  </div>
                  <div className="text-sm text-slate-600">spots available</div>
                  <div className="mt-2 bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        level.status === 'available' ? 'bg-green-500' :
                        level.status === 'limited' ? 'bg-yellow-500' :
                        level.status === 'nearly-full' ? 'bg-orange-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${(level.available / level.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ParkingAvailabilityWidget;
