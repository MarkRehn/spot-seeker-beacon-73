
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, MapPin, RefreshCw, Clock } from "lucide-react";
import { useState } from "react";
import ParkingAvailabilityWidget from "@/components/ParkingAvailabilityWidget";

const ParkingStatus = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setLastUpdated(new Date().toLocaleTimeString());
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Real-Time Parking Status
              </h1>
              <p className="text-lg text-slate-600">
                Live availability across all connected parking garages
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <div className="flex items-center text-sm text-slate-600">
                <Clock className="h-4 w-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
              <Button 
                onClick={handleRefresh} 
                disabled={isRefreshing}
                variant="outline"
                size="sm"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Status Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Available</p>
                  <p className="text-3xl font-bold text-green-600">118</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Car className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Occupied</p>
                  <p className="text-3xl font-bold text-slate-900">112</p>
                </div>
                <div className="bg-slate-100 p-3 rounded-full">
                  <Car className="h-6 w-6 text-slate-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Occupancy Rate</p>
                  <p className="text-3xl font-bold text-blue-600">49%</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <div className="h-6 w-6 rounded bg-blue-600"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Active Garages</p>
                  <p className="text-3xl font-bold text-purple-600">2</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Legend */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Status Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-100 text-green-800 border-green-200">Available</Badge>
                <span className="text-sm text-slate-600">25+ spots available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Limited</Badge>
                <span className="text-sm text-slate-600">10-24 spots available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-orange-100 text-orange-800 border-orange-200">Nearly Full</Badge>
                <span className="text-sm text-slate-600">1-9 spots available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-red-100 text-red-800 border-red-200">Full</Badge>
                <span className="text-sm text-slate-600">No spots available</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Availability Widget */}
        <ParkingAvailabilityWidget />
      </div>
    </div>
  );
};

export default ParkingStatus;
