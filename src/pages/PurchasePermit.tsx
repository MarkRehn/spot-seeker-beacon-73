
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Car, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PurchasePermit = () => {
  const { toast } = useToast();
  const [selectedPermit, setSelectedPermit] = useState("");
  const [formData, setFormData] = useState({
    licensePlate: "",
    vehicleMake: "",
    vehicleModel: "",
    email: "",
    phone: ""
  });

  const permitTypes = [
    {
      id: "daily",
      name: "Daily Permit",
      price: 15,
      duration: "24 hours",
      description: "Perfect for visitors and occasional users",
      features: ["24-hour access", "Any available spot", "Mobile notifications"]
    },
    {
      id: "weekly",
      name: "Weekly Permit",
      price: 75,
      duration: "7 days",
      description: "Great for short-term projects or extended visits",
      features: ["7-day access", "Priority parking", "Mobile notifications", "Refund available"]
    },
    {
      id: "monthly",
      name: "Monthly Permit",
      price: 250,
      duration: "30 days",
      description: "Best value for regular commuters",
      features: ["30-day access", "Reserved spot option", "Mobile notifications", "Transfer privileges"],
      popular: true
    },
    {
      id: "semester",
      name: "Semester Permit",
      price: 450,
      duration: "120 days",
      description: "Ideal for students and long-term staff",
      features: ["120-day access", "Guaranteed spot", "Mobile notifications", "Guest passes included"]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePurchase = () => {
    if (!selectedPermit) {
      toast({
        title: "Please select a permit type",
        variant: "destructive"
      });
      return;
    }

    if (!formData.licensePlate || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "License plate and email are required",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would process the payment
    toast({
      title: "Payment Processing",
      description: "Redirecting to secure payment gateway...",
    });

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Permit Purchased Successfully!",
        description: "Your parking permit has been activated. Check your email for details.",
      });
    }, 2000);
  };

  const selectedPermitDetails = permitTypes.find(p => p.id === selectedPermit);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Purchase Parking Permit
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from our flexible permit options and get instant access to smart parking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Permit Selection */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="h-6 w-6 mr-2 text-blue-600" />
                  Select Permit Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {permitTypes.map((permit) => (
                    <div
                      key={permit.id}
                      className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedPermit === permit.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      onClick={() => setSelectedPermit(permit.id)}
                    >
                      {permit.popular && (
                        <Badge className="absolute -top-2 left-4 bg-orange-500">
                          Most Popular
                        </Badge>
                      )}
                      
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-lg text-slate-900">{permit.name}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">${permit.price}</div>
                          <div className="text-sm text-slate-600">{permit.duration}</div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-4">{permit.description}</p>
                      
                      <div className="space-y-2">
                        {permit.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-slate-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Information Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Vehicle & Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="licensePlate">License Plate Number *</Label>
                    <Input
                      id="licensePlate"
                      placeholder="ABC-1234"
                      value={formData.licensePlate}
                      onChange={(e) => handleInputChange("licensePlate", e.target.value.toUpperCase())}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vehicleMake">Vehicle Make</Label>
                    <Input
                      id="vehicleMake"
                      placeholder="Toyota, Honda, Ford..."
                      value={formData.vehicleMake}
                      onChange={(e) => handleInputChange("vehicleMake", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="vehicleModel">Vehicle Model</Label>
                    <Input
                      id="vehicleModel"
                      placeholder="Camry, Civic, F-150..."
                      value={formData.vehicleModel}
                      onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-6 w-6 mr-2 text-green-600" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {selectedPermitDetails ? (
                  <>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {selectedPermitDetails.name}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {selectedPermitDetails.duration} access
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-slate-900">
                            ${selectedPermitDetails.price}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-600">Subtotal</span>
                        <span className="font-semibold">${selectedPermitDetails.price}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-600">Processing Fee</span>
                        <span className="font-semibold">$2.50</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold text-slate-900 pt-2 border-t">
                        <span>Total</span>
                        <span>${selectedPermitDetails.price + 2.50}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={handlePurchase}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Purchase Permit
                    </Button>

                    <div className="text-xs text-slate-500 text-center">
                      <p>Secure payment processing</p>
                      <p>Instant permit activation</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Clock className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600">Please select a permit type to continue</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePermit;
