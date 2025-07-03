
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Lock, Shield, Car, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Auth = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin'>('user');
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "",
    licenseNumber: "" 
  });

  // Mock user data for demonstration
  const mockUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    licenseNumber: "ABC123",
    permits: [
      {
        id: 1,
        type: "Monthly",
        startDate: "2024-07-01",
        endDate: "2024-07-31",
        status: "active",
        vehicle: "Toyota Camry - ABC123"
      }
    ]
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.email || !loginData.password) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Mock login logic
    if (loginData.email === "admin@smartpark.com") {
      setUserRole('admin');
    } else {
      setUserRole('user');
    }
    
    setIsLoggedIn(true);
    toast({
      title: "Login Successful!",
      description: `Welcome back!`
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerData.name || !registerData.email || !registerData.password || !registerData.licenseNumber) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        variant: "destructive"
      });
      return;
    }

    setUserRole('user');
    setIsLoggedIn(true);
    toast({
      title: "Registration Successful!",
      description: "Welcome to SmartPark!"
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('user');
    setLoginData({ email: "", password: "" });
    setRegisterData({ name: "", email: "", password: "", confirmPassword: "", licenseNumber: "" });
    toast({
      title: "Logged out successfully"
    });
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              {userRole === 'admin' ? 'Admin Dashboard' : 'My Account'}
            </h1>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>

          {userRole === 'admin' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-2 text-blue-600" />
                    Admin Panel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/admin">Go to Admin Dashboard</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    All Systems Operational
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Users
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    System Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* User Profile */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-6 w-6 mr-2 text-blue-600" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Full Name</Label>
                    <div className="text-slate-900 font-medium">{mockUserData.name}</div>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <div className="text-slate-900 font-medium">{mockUserData.email}</div>
                  </div>
                  <div>
                    <Label>License Number</Label>
                    <div className="text-slate-900 font-medium">{mockUserData.licenseNumber}</div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Current Permits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Car className="h-6 w-6 mr-2 text-green-600" />
                    My Permits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {mockUserData.permits.map((permit) => (
                    <div key={permit.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{permit.type} Permit</span>
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">Active</span>
                        </div>
                      </div>
                      <div className="text-sm text-slate-600 space-y-1">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Valid: {permit.startDate} to {permit.endDate}
                        </div>
                        <div className="flex items-center">
                          <Car className="h-4 w-4 mr-2" />
                          {permit.vehicle}
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button asChild className="w-full mt-4">
                    <Link to="/purchase-permit">Purchase New Permit</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome to SmartPark</h1>
          <p className="text-slate-600">Sign in to manage your parking permits</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Lock className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </form>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Demo:</strong> Use "admin@smartpark.com" for admin access
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input
                      id="register-name"
                      placeholder="John Doe"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-license">License Plate Number</Label>
                    <Input
                      id="register-license"
                      placeholder="ABC123"
                      value={registerData.licenseNumber}
                      onChange={(e) => setRegisterData({...registerData, licenseNumber: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-confirm">Confirm Password</Label>
                    <Input
                      id="register-confirm"
                      type="password"
                      placeholder="••••••••"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <User className="h-4 w-4 mr-2" />
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
