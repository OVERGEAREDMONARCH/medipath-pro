import { Button } from "@/components/ui/button";
import { Play, Calendar, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-healthcare-light-blue via-background to-healthcare-light-green" />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20">
                <Shield className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">HIPAA Compliant & Secure</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground leading-relaxed">
                Modern Healthcare
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Streamline patient care with our comprehensive platform featuring appointment scheduling, 
                medication tracking, secure messaging, and telemedicine capabilities.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open('tel:+1234567890', '_self')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-8">
              <div className="text-center min-w-[80px]">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Happy Patients</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Healthcare Providers</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-2xl sm:text-3xl font-bold text-accent">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Support Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up order-first lg:order-last">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-healthcare)]">
              <img 
                src={heroImage} 
                alt="Modern healthcare telemedicine platform"
                className="w-full h-auto object-cover min-h-[300px] sm:min-h-[400px]"
              />
              
              {/* Floating cards */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-card/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-border/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-card-foreground">Live Consultation</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Dr. Sarah Wilson</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-card/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-border/20">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">98%</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;