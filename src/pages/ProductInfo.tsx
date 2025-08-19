import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Heart, Shield, Clock, Users, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProductInfo = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassionate Care",
      description: "Connect with healthcare providers who prioritize your wellbeing and comfort."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliant",
      description: "Your medical data is protected with enterprise-grade security and encryption."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Access healthcare services anytime, anywhere with our round-the-clock platform."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Network",
      description: "Connect with certified healthcare professionals across multiple specialties."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "Get quick consultations, prescriptions, and medical advice in minutes."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Star Reviews",
      description: "Join thousands of satisfied patients who trust MediConnect for their healthcare."
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      description: "Perfect for occasional consultations",
      features: [
        "3 consultations per month",
        "Basic health monitoring",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$24.99",
      period: "/month",
      description: "Ideal for regular healthcare needs",
      features: [
        "Unlimited consultations",
        "Advanced health tracking",
        "Priority support",
        "Family member access",
        "Prescription management",
        "Lab result integration"
      ],
      popular: true
    },
    {
      name: "Family",
      price: "$39.99",
      period: "/month",
      description: "Complete healthcare for your family",
      features: [
        "Up to 6 family members",
        "Unlimited consultations",
        "Pediatric specialists",
        "Emergency consultations",
        "Health reports & analytics",
        "Dedicated care coordinator"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Why Choose MediConnect?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the future of healthcare with our comprehensive platform that puts your health and convenience first.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                50,000+ Patients
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                HIPAA Compliant
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                4.9/5 Rating
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Healthcare That Works For You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the benefits that make MediConnect the preferred choice for modern healthcare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your healthcare needs. All plans include our core features with no hidden fees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border/50'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/login">
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who have already discovered a better way to manage their health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" variant="secondary" className="px-8">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductInfo;