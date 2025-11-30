import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          U-COP: Unified Compliance & Operations Platform
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Automatically generate, analyze, update, and score company compliance documents using AI. Secure, multi-tenant, and production-ready.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
            <Link to="/features">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;