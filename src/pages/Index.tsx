
import { Car, Shield, Smartphone, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ParkingAvailabilityWidget from "@/components/ParkingAvailabilityWidget";

const Index = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Real-Time Updates",
      description: "Get live parking availability updates before you arrive at the garage."
    },
    {
      icon: <Car className="h-8 w-8 text-green-600" />,
      title: "Smart Navigation",
      description: "LED indicators and digital signage guide you to available spots quickly."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "License Plate Recognition",
      description: "Advanced security with automatic permit validation and unauthorized vehicle alerts."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Save Time & Fuel",
      description: "Reduce time spent circling garages and decrease unnecessary fuel consumption."
    }
  ];

  const benefits = [
    "Reduce parking search time by up to 60%",
    "Lower fuel consumption and emissions",
    "Enhanced security with automated monitoring",
    "Seamless permit purchase and management",
    "Real-time availability across all garage levels"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Smart Parking
              <span className="block text-blue-600">Made Simple</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Transform your parking experience with our intelligent garage management system. 
              Find spots faster, reduce stress, and help create a more sustainable urban environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/parking-status">
                  Check Availability <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/purchase-permit">Purchase Permit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Availability Widget */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Live Parking Availability</h2>
            <p className="text-lg text-slate-600">Check real-time availability across all garage levels</p>
          </div>
          <ParkingAvailabilityWidget />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose SmartPark?
            </h2>
            <p className="text-lg text-slate-600">
              Our system combines cutting-edge technology with user-friendly design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">System Benefits</h2>
            <p className="text-lg text-slate-600">Experience the future of parking management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Smart Parking?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the future of urban mobility and make parking stress a thing of the past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/parking-status">View Live Availability</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
