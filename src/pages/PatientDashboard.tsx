import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  Heart, 
  User, 
  FileText, 
  Pill, 
  Activity,
  Bell,
  Settings,
  LogOut,
  Phone,
  MessageCircle,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MediConnect</h1>
                <p className="text-xs text-muted-foreground">Patient Dashboard</p>
              </div>
            </Link>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, John Doe
          </h2>
          <p className="text-muted-foreground">
            Here's an overview of your health information and upcoming appointments.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="records">Medical Records</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-muted-foreground text-sm">Upcoming Appointments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Pill className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-muted-foreground text-sm">Active Medications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">98%</p>
                      <p className="text-muted-foreground text-sm">Health Score</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">8</p>
                      <p className="text-muted-foreground text-sm">Medical Records</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest medical interactions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium">Appointment with Dr. Smith</p>
                      <p className="text-sm text-muted-foreground">Yesterday, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium">Lab results uploaded</p>
                      <p className="text-sm text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium">Prescription refilled</p>
                      <p className="text-sm text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule New Appointment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message Your Doctor
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Medical Records
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Appointments</CardTitle>
                <CardDescription>Upcoming and past medical appointments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Upcoming Appointments */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Upcoming</h4>
                  <div className="border border-border/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Dr. Sarah Johnson - Cardiology</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Dec 15, 2024
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            2:30 PM
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Upcoming</Badge>
                        <Button size="sm" variant="outline">
                          Join Video Call
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-border/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Dr. Michael Brown - General Check-up</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Dec 20, 2024
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            10:00 AM
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Scheduled</Badge>
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="records" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Medical Records</CardTitle>
                <CardDescription>Your health history and documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Blood Test Results</p>
                        <p className="text-sm text-muted-foreground">Dec 10, 2024</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border border-border/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">X-Ray Chest</p>
                        <p className="text-sm text-muted-foreground">Nov 28, 2024</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Medications</CardTitle>
                <CardDescription>Your active prescriptions and medication schedule</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border border-border/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Lisinopril 10mg</p>
                        <p className="text-sm text-muted-foreground">Once daily with breakfast</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                  
                  <div className="border border-border/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Metformin 500mg</p>
                        <p className="text-sm text-muted-foreground">Twice daily with meals</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                  
                  <div className="border border-border/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Vitamin D3 1000 IU</p>
                        <p className="text-sm text-muted-foreground">Once daily</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientDashboard;