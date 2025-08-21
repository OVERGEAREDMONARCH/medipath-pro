import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/50 dark:border-white/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/50 dark:border-white/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/50 dark:border-white/30 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to Start Your
            <span className="block">Healthcare Journey?</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of patients and healthcare providers who trust MediConnect 
            for secure, efficient, and compassionate care.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-white text-lg px-8 py-4"
            >
              For Patients
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-4"
            >
              For Providers
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-white/80">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Trusted by 10K+ Patients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">500+ Healthcare Providers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;