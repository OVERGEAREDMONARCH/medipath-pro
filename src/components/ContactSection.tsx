import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageSquare, HeartHandshake } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "24/7 emergency line",
      contact: "+1 (555) 123-4567",
      availability: "Available 24/7"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support", 
      description: "General inquiries",
      contact: "hello@mediconnect.com",
      availability: "Response within 4 hours"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant messaging",
      contact: "Available in app",
      availability: "Mon-Fri 9AM-6PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Main office",
      contact: "123 Health Street, Medical District",
      availability: "By appointment only"
    }
  ];

  const supportTypes = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Patient Support",
      description: "Get help with appointments, billing, or technical issues"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Emergency Line", 
      description: "24/7 immediate medical assistance and urgent consultations"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "General Inquiries",
      description: "Questions about our services, partnerships, or feedback"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">Contact Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We're Here to Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our services? Need technical support? Our dedicated team is ready to assist you 
            with any inquiries you may have.
          </p>
        </div>

        {/* Support Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportTypes.map((type, index) => (
            <Card key={index} className="border-border/50 text-center hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {type.icon}
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {type.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form and Methods */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="How can we help you?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Choose the contact method that works best for you. Our team is committed to providing 
                prompt and helpful responses to all inquiries.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{method.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                        <p className="font-medium text-foreground mb-1">{method.contact}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {method.availability}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Notice */}
            <Card className="border-destructive/50 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center text-destructive flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-destructive">Medical Emergency?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you're experiencing a medical emergency, please call 911 immediately or visit your nearest emergency room.
                    </p>
                    <Button variant="destructive" size="sm">
                      Emergency Resources
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;