
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import { useState, useEffect } from "react";

const Index = () => {
  // For rotating banner text
  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerTexts = [
    "Create stunning invitations in minutes",
    "Design beautiful wedding cards with ease",
    "Craft perfect birthday invites that impress"
  ];

  // Auto-rotate banner text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Enhanced with animation */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute opacity-30 -right-10 top-10 h-64 w-64 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute opacity-20 -left-10 bottom-10 h-72 w-72 bg-purple-300 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-block bg-purple-100 px-4 py-1.5 rounded-full text-purple-800 font-medium text-sm mb-6 animate-fade-in">
              ✨ Create cards for any occasion
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="text-purple-600">{bannerTexts[currentBanner]}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl">
              Design stunning invitation cards for any occasion with our easy-to-use
              editor. Choose from hundreds of templates or create your own from scratch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 transition-all group">
                <Link to="/create" className="flex items-center">
                  Start Creating 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-200 hover:bg-purple-50">
                <Link to="/templates">Browse Templates</Link>
              </Button>
            </div>
            
            {/* Preview Image */}
            <div className="mt-12 relative w-full max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Invitation Editor Preview" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modernized */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Design for Every Occasion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our templates are professionally designed for all of life's special moments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Wedding Invitations"
              description="Create elegant wedding invitations that capture your special day with customizable templates."
              icon="💍"
              color="bg-purple-50"
            />
            <FeatureCard
              title="Birthday Celebrations"
              description="Design fun and colorful birthday invitations for all ages with our easy-to-use tools."
              icon="🎂"
              color="bg-blue-50"
            />
            <FeatureCard
              title="Corporate Events"
              description="Professional templates for business gatherings, conferences, and corporate announcements."
              icon="💼"
              color="bg-green-50"
            />
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <CategoryBadge label="Baby Shower" />
            <CategoryBadge label="Graduation" />
            <CategoryBadge label="Holiday Parties" />
            <CategoryBadge label="Save the Date" />
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced with visual elements */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Create beautiful invitations in three simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard
              number="1"
              title="Choose a Template"
              description="Browse our library of professionally designed templates for any occasion."
            />
            <StepCard
              number="2"
              title="Customize Your Design"
              description="Add your text, photos, colors, and personal touches to make it unique."
            />
            <StepCard
              number="3"
              title="Share & Print"
              description="Download your design, share digitally, or order professional prints."
            />
          </div>
        </div>
      </section>

      {/* Testimonials - New section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Thousands of people love using Paperly for their special occasions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The templates were beautiful and so easy to customize! I created the perfect wedding invitations in under an hour."
              author="Jessica R."
              role="Bride"
            />
            <TestimonialCard
              quote="As an event planner, I use Paperly for all my client invitations. The professional designs always impress!"
              author="Michael T."
              role="Event Planner"
            />
            <TestimonialCard
              quote="I'm not creative at all, but Paperly made it so simple to design beautiful birthday invites for my daughter."
              author="Sarah K."
              role="Mom of 3"
            />
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced with animation */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to create your invitation?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of people who create stunning invitation cards with Paperly.
          </p>
          <Button asChild size="lg" variant="secondary" className="animate-pulse-slow">
            <Link to="/create">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="py-12 bg-gray-900 text-gray-400 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Designs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Printing Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Design Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>© 2025 Paperly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component - Enhanced with hover effects
const FeatureCard = ({ title, description, icon, color }: { title: string; description: string; icon: string; color: string }) => {
  return (
    <div className={`${color} p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Step Card Component - Enhanced with better styling
const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-md">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// New Components

// Category Badge Component
const CategoryBadge = ({ label }: { label: string }) => {
  return (
    <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full py-2 px-4 text-center text-sm font-medium cursor-pointer">
      {label}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
      <div className="text-purple-600 text-4xl mb-4">"</div>
      <p className="italic text-gray-700 mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
