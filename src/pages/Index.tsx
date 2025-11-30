"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, FileText, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Policy Generation",
    description: "Automatically generate comprehensive compliance documents tailored to your company's needs.",
  },
  {
    icon: FileText,
    title: "Document Analysis & Risk Reports",
    description: "Upload existing documents for AI-driven analysis, identifying gaps and suggesting remediations.",
  },
  {
    icon: ShieldCheck,
    title: "Unified Compliance Scoring",
    description: "Get a clear, numeric compliance score with detailed breakdowns and actionable insights.",
  },
  {
    icon: TrendingUp,
    title: "Automated Updates & Versioning",
    description: "Stay ahead with scheduled re-analysis and policy refreshes as laws and regulations evolve.",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-background text-foreground p-4 md:p-8">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
            U-COP: Unified Compliance & Operations Platform
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Automatically generate, analyze, update, and score company compliance documents using AI. Secure, multi-tenant, and production-ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              <Link to="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader className="pb-4">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 md:py-28 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Streamline Your Compliance?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Join U-COP today and transform how your company manages compliance with intelligent automation.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Link to="/signup">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;