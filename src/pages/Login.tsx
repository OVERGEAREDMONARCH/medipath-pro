import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Mail, Lock, User, Phone, Calendar, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email') as string;
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
      
      // Redirect based on email domain (mock logic)
      if (email?.includes('doctor') || email?.includes('dr.') || email?.includes('provider')) {
        navigate('/provider-dashboard');
      } else {
        navigate('/patient-dashboard');
      }
    }, 2000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const role = formData.get('role') as string;
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: "Welcome to MediConnect. Please verify your email.",
      });
      
      // Redirect based on selected role
      if (role === 'doctor') {
        navigate('/provider-dashboard');
      } else {
        navigate('/patient-dashboard');
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/" className="flex items-center space-x-3 w-fit">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">MediConnect</h1>
            <p className="text-xs text-muted-foreground">Healthcare Platform</p>
          </div>
        </Link>
      </div>

      {/* Login Form */}
      <div className="container mx-auto px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to home</span>
          </Link>
          
          <Card className="shadow-elegant bg-card/95 backdrop-blur-sm border-border/20">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome to MediConnect
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Access your healthcare dashboard
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="doctor@mediclinic.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <button type="button" className="text-primary hover:text-primary/80 transition-colors">
                      Forgot password?
                    </button>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signupEmail">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signupEmail"
                        type="email"
                        placeholder="john.doe@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Account Type</Label>
                    <select 
                      id="role"
                      name="role"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select account type</option>
                      <option value="patient">Patient</option>
                      <option value="doctor">Healthcare Provider</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signupPassword">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signupPassword"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 text-sm">
                    <input type="checkbox" className="mt-1 rounded border-border" required />
                    <span className="text-muted-foreground">
                      I agree to the{" "}
                      <button type="button" className="text-primary hover:text-primary/80 transition-colors">
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button type="button" className="text-primary hover:text-primary/80 transition-colors">
                        Privacy Policy
                      </button>
                    </span>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>
                Need help?{" "}
                <button className="text-primary hover:text-primary/80 transition-colors">
                  Contact Support
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;