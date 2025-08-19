import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Globe, Shield, Clock } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50,000+", label: "Happy Patients" },
    { icon: <Heart className="w-8 h-8" />, number: "1,000+", label: "Healthcare Providers" },
    { icon: <Globe className="w-8 h-8" />, number: "25+", label: "Countries Served" },
    { icon: <Award className="w-8 h-8" />, number: "99.9%", label: "Uptime Guarantee" }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient-Centered Care",
      description: "Every decision we make is guided by what's best for our patients' health and wellbeing."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy & Security",
      description: "We maintain the highest standards of data protection and medical privacy compliance."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuously advancing healthcare technology to provide better, faster, and more accessible care."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About MediConnect</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Revolutionizing Healthcare Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, MediConnect was born from a simple belief: everyone deserves access to quality healthcare, 
            regardless of location or circumstance. We're building the future of digital health.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                When Dr. Sarah Chen couldn't reach her family physician during a medical emergency, 
                she realized the gaps in our healthcare system. That moment sparked the idea for MediConnect.
              </p>
              <p>
                Today, we've connected thousands of patients with qualified healthcare providers, 
                making medical care more accessible, affordable, and convenient than ever before.
              </p>
              <p>
                Our platform combines cutting-edge technology with human compassion, ensuring that 
                quality healthcare is just a click away, 24/7.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-semibold text-lg mb-4">Our Mission</h4>
              <p className="text-muted-foreground">
                "To democratize healthcare by creating seamless connections between patients and providers, 
                making quality medical care accessible to everyone, everywhere."
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Dr. Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;