
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-2">
              <Sparkles className="h-3.5 w-3.5" /> New AI Template Creator
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Design Beautiful
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Custom Invitations
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Create stunning invitations for any occasion with our easy-to-use design tools and professionally crafted templates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-md group">
                <Link to="/create" className="flex items-center">
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-200 hover:border-purple-300 hover:bg-purple-50">
                <Link to="/templates">
                  Browse Templates
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-6 perspective">
            <div className="relative">
              {/* Main card */}
              <div className="w-3/4 mx-auto aspect-[5/7] bg-white rounded-xl shadow-2xl border-8 border-white transform transition-transform hover:-rotate-y-2 hover:rotate-x-2 hover:shadow-purple-200/30 overflow-hidden">
                <div className="h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-8 text-white">
                  <div className="text-center space-y-4">
                    <h3 className="font-heading text-2xl font-bold">You're Invited!</h3>
                    <p className="font-serif">Join us for an evening of celebration</p>
                    <div className="h-px w-16 bg-white/50 mx-auto"></div>
                    <p className="font-heading text-lg">June 15, 2025</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative cards */}
              <div className="absolute -bottom-8 -left-12 w-2/3 aspect-[5/7] rounded-xl shadow-xl border-8 border-white transform -rotate-12 bg-gradient-to-r from-blue-400 to-cyan-300 z-[-1]"></div>
              <div className="absolute -top-8 -right-12 w-2/3 aspect-[5/7] rounded-xl shadow-xl border-8 border-white transform rotate-12 bg-gradient-to-r from-amber-300 to-yellow-200 z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
