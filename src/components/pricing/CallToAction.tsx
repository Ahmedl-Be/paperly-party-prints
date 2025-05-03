
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to create beautiful invitations?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Start with our Free plan today. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="secondary" size="lg" className="animate-pulse-slow">
            <Link to="/create">Get Started Free</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
            <Link to="/templates">Browse Templates</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
