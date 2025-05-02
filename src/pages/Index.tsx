
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Create beautiful invitations with{" "}
              <span className="text-purple-600">Paperly</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl">
              Design stunning invitation cards for any occasion with our easy-to-use
              editor. Choose from hundreds of templates or create your own from scratch.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link to="/create">
                  Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/templates">Browse Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Designed for Every Occasion</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Weddings"
              description="Create elegant wedding invitations that capture your special day."
              icon="🎀"
            />
            <FeatureCard
              title="Birthdays"
              description="Design fun and colorful birthday invitations for all ages."
              icon="🎂"
            />
            <FeatureCard
              title="Corporate Events"
              description="Professional templates for business gatherings and conferences."
              icon="💼"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard
              number="1"
              title="Choose a Template"
              description="Select from our library of professionally designed templates."
            />
            <StepCard
              number="2"
              title="Customize"
              description="Add your text, photos, and personal touches."
            />
            <StepCard
              number="3"
              title="Share & Print"
              description="Send digitally or print physical copies."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to create your invitation?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of people who create stunning invitation cards with Paperly.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/create">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 mt-auto">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© 2025 Paperly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Step Card Component
const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Index;
