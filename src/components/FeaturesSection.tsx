import { Calendar, MessageSquare, Pill, Video, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Book appointments with conflict detection, automated reminders, and calendar integration.",
    color: "from-primary to-primary/80"
  },
  {
    icon: MessageSquare,
    title: "Secure Messaging",
    description: "HIPAA-compliant chat between patients and healthcare providers with file sharing.",
    color: "from-secondary to-secondary/80"
  },
  {
    icon: Pill,
    title: "Medication Tracking",
    description: "Track prescriptions, set reminders, and monitor adherence with smart notifications.",
    color: "from-accent to-accent/80"
  },
  {
    icon: Video,
    title: "Telemedicine",
    description: "High-quality video consultations with screen sharing and digital prescriptions.",
    color: "from-primary to-secondary"
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Bank-level encryption, HIPAA compliance, and secure data storage for peace of mind.",
    color: "from-secondary to-accent"
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Access your health information, schedule appointments, and connect with providers anytime.",
    color: "from-accent to-primary"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">POWERFUL FEATURES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Modern Healthcare
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with user-friendly design 
            to revolutionize how patients and providers interact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`healthcare-icon bg-gradient-to-br ${feature.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Ready to transform your healthcare experience?</span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;