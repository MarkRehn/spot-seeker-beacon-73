
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Car, 
  AlertTriangle, 
  DollarSign, 
  TrendingUp,
  Search,
  Filter,
  Download,
  Eye,
  Shield,
  Clock
} from "lucide-react";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    {
      title: "Total Active Permits",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Current Occupancy",
      value: "68%",
      change: "+5%",
      trend: "up",
      icon: <Car className="h-6 w-6 text-green-600" />
    },
    {
      title: "Security Alerts",
      value: "3",
      change: "-2",
      trend: "down",
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />
    },
    {
      title: "Revenue (Monthly)",
      value: "$48,250",
      change: "+18%",
      trend: "up",
      icon: <DollarSign className="h-6 w-6 text-purple-600" />
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "Unauthorized Vehicle",
      location: "Level 2, Spot A-15",
      time: "2 minutes ago",
      license: "XYZ-789",
      severity: "high"
    },
    {
      id: 2,
      type: "Overstay Detected",
      location: "Level 1, Spot B-8",
      time: "15 minutes ago",
      license: "ABC-123",
      severity: "medium"
    },
    {
      id: 3,
      type: "System Maintenance",
      location: "Level 3 Camera Array",
      time: "1 hour ago",
      license: "N/A",
      severity: "low"
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "Monthly Permit",
      amount: "$250.00",
      customer: "john.doe@email.com",
      license: "ABC-1234",
      status: "completed",
      time: "10 minutes ago"
    },
    {
      id: 2,
      type: "Daily Permit",
      amount: "$15.00",
      customer: "jane.smith@email.com",
      license: "DEF-5678",
      status: "completed",
      time: "25 minutes ago"
    },
    {
      id: 3,
      type: "Weekly Permit",
      amount: "$75.00",
      customer: "mike.wilson@email.com",
      license: "GHI-9012",
      status: "pending",
      time: "1 hour ago"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "failed": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-lg text-slate-600">
                Monitor and manage your parking garage system
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Shield className="h-4 w-4 mr-2" />
                Security Center
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className={`h-4 w-4 mr-1 ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`} />
                      <span className={`text-sm font-medium ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Alerts */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-orange-600" />
                  Recent Security Alerts
                </CardTitle>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">{alert.type}</h4>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">{alert.location}</p>
                      <div className="flex items-center text-xs text-slate-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {alert.time}
                        {alert.license !== "N/A" && (
                          <>
                            <span className="mx-2">•</span>
                            <span>License: {alert.license}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <DollarSign className="h-6 w-6 mr-2 text-green-600" />
                  Recent Transactions
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <Input
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-32"
                    />
                  </div>
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">{transaction.type}</h4>
                        <div className="text-right">
                          <div className="font-bold text-slate-900">{transaction.amount}</div>
                          <Badge className={getStatusColor(transaction.status)}>
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">{transaction.customer}</p>
                      <div className="flex items-center text-xs text-slate-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {transaction.time}
                        <span className="mx-2">•</span>
                        <span>License: {transaction.license}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
